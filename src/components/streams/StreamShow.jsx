/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLayoutEffect, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { useRef } from 'react';
import flv from 'flv.js';

const StreamShow = (props) => {
  const [targetStream, setTargetStream] = useState(false);

  const params = useParams();
  const streamId = Number(params.id);
  const videoRef = useRef();
  const playerRef = useRef();

  useLayoutEffect(() => {
    props.fetchStream(streamId);
  }, []);

  console.log(props);

  const buildPlayer = () => {
    if (
      playerRef.current !== undefined ||
      !streamId ||
      props.streams.length < 1
    )
      return;
    const playerToBuild = flv.createPlayer({
      type: 'flv',
      isLive: true,
      url: `http://localhost:8000/live/${streamId}.flv`,
    });
    console.log(playerToBuild);
    playerRef.current = playerToBuild;
    playerRef.current.attachMediaElement(videoRef.current);
    playerRef.current.load();
  };

  useEffect(() => {
    if (playerRef.current !== undefined || targetStream) return;
    try {
      if (props.streams.length > 0) {
        const [targetStreamFilter] = props.streams.filter(
          (stream) => stream.id === Number(params.id),
        );
        setTargetStream(targetStreamFilter);
        buildPlayer();
      }
    } catch (err) {
      console.error(err);
    }
  }, [props.streams]);

  console.log(videoRef, 'playerRef', playerRef);
  if (!playerRef.current)
    return (
      <div className="flex flex-row justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl mx-auto">
        {' '}
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex flex-row space-x-8 items-center">
              <h1 className="font-bold text-2xl">{targetStream.title}</h1>
              <p>{targetStream.description}</p>
            </div>
            {/* We use less vertical padding on card headers on desktop than on body sections */}
          </div>
          <div className="px-4 py-5 sm:p-6">
            <video
              ref={videoRef}
              style={{ width: '100%' }}
              controls
              src=""></video>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    user: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
