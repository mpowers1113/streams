import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Box, Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const StreamListFunctional = (props) => {
  useLayoutEffect(() => {
    props.fetchStreams();
  });

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div key={stream.description + stream.title} className="max-w-xl p-8">
          <div key={stream.id} className="flex flex-row justify-between">
            <div className="h-10 w-10">
              <svg
                className="mt-4 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <rect x="4" y="4" width="16" height="16" rx="2" />{' '}
                <line x1="8" y1="4" x2="8" y2="20" />{' '}
                <line x1="16" y1="4" x2="16" y2="20" />{' '}
                <line x1="4" y1="8" x2="8" y2="8" />{' '}
                <line x1="4" y1="16" x2="8" y2="16" />{' '}
                <line x1="4" y1="12" x2="20" y2="12" />{' '}
                <line x1="16" y1="8" x2="20" y2="8" />{' '}
                <line x1="16" y1="16" x2="20" y2="16" />
              </svg>
            </div>

            <div className="p-4 w-full">
              <Link to={`/show/${stream.id}`}>
                <h1 className="font-bold text-lg">{stream.title}</h1>
              </Link>
            </div>
            <div className="p-4 w-full">
              <p>{stream.description}</p>
            </div>

            {stream.userId === props.user && (
              <div className="flex flex-row">
                <div className="p-4 w-full">
                  <Link to={`/edit/${stream.id}`}>
                    <Button>Edit</Button>
                  </Link>
                </div>

                <div className="p-4 w-full">
                  <Link to={`/delete/${stream.id}`}>
                    <Button>Delete</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {renderList()}

      {props.isSignedIn === true && (
        <div className="flex justify-center align-middle">
          <Box p={0.6}>
            <Link to="/new">
              <button className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Create Stream
              </button>
            </Link>
          </Box>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    user: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamListFunctional);
