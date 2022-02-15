import { Field, reduxForm } from 'redux-form';
import { Box, Button } from '../UI/Button';

const renderInput = ({ input, label, meta }) => {
  const renderError = () => {
    return (
      <Box center mt={1}>
        <p className="text-orange-600">Required field</p>
      </Box>
    );
  };
  return (
    <div className="mb-3 max-w-md pt-0">
      <Box mb={1}>
        <label>{label}</label>
      </Box>
      <Box>
        <input
          {...input}
          placeholder={input.name}
          className={
            meta.touched && meta.error
              ? 'bg-red-300 px-3 py-3 relative text-red-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full placeholder-red-700'
              : 'px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
          }
        />
        {meta.touched && meta.error && renderError()}
      </Box>
    </div>
  );
};

const StreamForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
  console.log(props.initialValues, 'props.initialValues');
  return (
    <Box pl={4} mt={1}>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="title" label="Enter Title" component={renderInput} />
        <Field
          name="description"
          label="Enter Description"
          component={renderInput}
        />
        <Box mt={2}>
          <Button>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) errors.title = 'You must enter a title';

  if (!formValues.description)
    errors.description = 'You must enter a description';

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
