import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Flex, Box, Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const StreamListFunctional = (props) => {
  useLayoutEffect(() => {
    props.fetchStreams();
  });

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div key={stream.id} className="w-full min-w-fit">
          <Flex spaceBetween middle p={1} mb={1}>
            <Box>
              <Box>
                <svg
                  className="h-8 mr-4 w-8 text-red-500"
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
              </Box>
              <Box>
                <div className="divide-y-2 divide-solid">
                  <h1 className="mr-4 font-bold text-lg">{stream.title}</h1>
                  <p>{stream.description}</p>
                </div>
              </Box>
            </Box>
            {stream.userId === props.user && (
              <div className="flex flex-row space-x-4 ml-12">
                <Box ml={2}>
                  <Link to={`/edit/${stream.id}`}>
                    <Button>Edit</Button>
                  </Link>
                </Box>

                <Box ml={2}>
                  <Link to={`/delete/${stream.id}`}>
                    <Button>Delete</Button>
                  </Link>
                </Box>
              </div>
            )}
          </Flex>
        </div>
      );
    });
  };

  return (
    <>
      <Flex start={'start'}>
        <Box p={0.6}>
          <div className="w-500">{renderList()}</div>
        </Box>
      </Flex>
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
