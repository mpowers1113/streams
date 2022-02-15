import { Box } from '../UI/Button';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { useNavigate } from 'react-router';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
  const navigate = useNavigate();

  const onSubmit = (formValues) => {
    props.createStream(formValues);
    navigate('/');
  };
  return (
    <>
      <Box pl={4} mt={1} mb={2}>
        <h1 className="text-xl font-bold uppercase">Create a Stream</h1>
      </Box>
      <Box>
        <StreamForm onSubmit={onSubmit} />
      </Box>
    </>
  );
};

export default connect(null, { createStream })(StreamCreate);
