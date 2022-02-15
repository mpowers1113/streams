/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router';
import { deleteStream } from '../../actions';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';
import Modal from '../UI/Modal';
import { useNavigate } from 'react-router';
import { useEffect, useLayoutEffect, useState } from 'react';

const StreamDelete = (props) => {
  const [targetStream, setTargetStream] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (props.streams.length > 0) return;
    props.fetchStream(Number(params.id));
  }, []);

  useEffect(() => {
    if (targetStream) return;
    try {
      if (props.streams.length > 0) {
        const [targetStreamFilter] = props.streams.filter(
          (stream) => stream.id === Number(params.id),
        );
        setTargetStream(targetStreamFilter);
      }
    } catch (err) {
      console.error(err);
    }
  }, [props.streams]);

  const cancelAction = () => {
    navigate('/');
  };

  const deleteThis = (id) => {
    props.deleteStream(id);
    navigate('/');
  };

  const renderContent = () => {
    if (targetStream) {
      return `Are you sure you want to delete: ${targetStream.title} ?`;
    }
    return `Are you sure you want to delete this stream?`;
  };

  const renderTitle = () => {
    if (props.streams.length > 0) {
      return `Delete ${targetStream.title} ?`;
    }
    return `Loading...`;
  };

  return (
    <Modal
      targetId={Number(targetStream.id)}
      confirm={'Delete'}
      content={renderContent()}
      title={renderTitle()}
      cancel={cancelAction}
      deleteThis={deleteThis}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    user: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete,
);
