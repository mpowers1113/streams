/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLayoutEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = (props) => {
  const params = useParams();
  const streamId = Number(params.id);

  useLayoutEffect(() => {
    props.fetchStream(streamId);
  }, []);

  const [targetStreamFilter] = props.streams.filter(
    (stream) => stream.id === streamId,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl mx-auto">
        {' '}
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex flex-row space-x-8 items-center">
              <h1 className="font-bold text-2xl">{targetStreamFilter.title}</h1>
              <p>{targetStreamFilter.description}</p>
            </div>
            {/* We use less vertical padding on card headers on desktop than on body sections */}
          </div>
          <div className="px-4 py-5 sm:p-6">content</div>
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
