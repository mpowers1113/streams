/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router';
import { deleteStream } from '../../actions';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';
import Modal from '../UI/Modal';
import { useNavigate } from 'react-router';
import { useLayoutEffect } from 'react';

const StreamDelete = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    props.fetchStream(Number(params.id));
  }, []);

  const [targetStreamFilter] = props.streams.filter(
    (stream) => stream.id === Number(params.id),
  );

  const cancelAction = () => {
    navigate('/');
  };

  const deleteThis = (id) => {
    props.deleteStream(id);
    navigate('/');
  };

  const renderContent = () => {
    if (props.streams.length > 0) {
      return `Are you sure you want to delete: ${targetStreamFilter.title} ?`;
    }
    return `Are you sure you want to delete this stream?`;
  };

  const renderTitle = () => {
    if (props.streams.length > 0) {
      return `Delete ${targetStreamFilter.title} ?`;
    }
    return `Loading...`;
  };

  return (
    <Modal
      targetId={Number(targetStreamFilter.id)}
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
