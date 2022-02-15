/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from 'react';
import { Box } from '../UI/Button';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import { useNavigate } from 'react-router';

const StreamEdit = (props) => {
  const params = useParams();

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (props.streams.length > 0) return;
    props.fetchStream(Number(params.id));
  }, []);

  const [targetStreamFilter] = props.streams.filter(
    (stream) => stream.id === Number(params.id),
  );

  const onSubmit = (formValues) => {
    props.editStream(Number(targetStreamFilter.id), formValues);
    navigate('/');
  };

  return (
    <>
      <>
        <Box pl={4} mt={1} mb={2}>
          <h1 className="text-xl font-bold uppercase">Edit Stream</h1>
        </Box>
        <Box>
          <StreamForm initialValues={targetStreamFilter} onSubmit={onSubmit} />
        </Box>
      </>
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

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit,
);
