// import React from 'react';
// import Switch from '@material-ui/core/Switch';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(({ palette, shadows }) => ({
//   circle: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 20,
//     height: 20,
//     borderRadius: '50%',
//     backgroundColor: palette.background.default,
//     boxShadow: shadows[1],
//   },
//   active: {
//     backgroundColor: palette.secondary.main,
//   },
// }));

// const Switches = () => {
//   const classes = useStyles();
//   const [switchValue, setSwitchValue] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   const handleChange = () => {
//     setSwitchValue(!switchValue);
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   };

//   const Icon = () => (
//     <div
//       className={`${classes.circle} ${
//         switchValue && !loading ? classes.active : ''
//       }`}
//     >
//       {loading && (
//         <CircularProgress size={14} color="secondary" thickness={6} />
//       )}
//     </div>
//   );

//   return (
//     <Switch
//       checkedIcon={<Icon />}
//       icon={<Icon />}
//       // disabled={loading}
//       checked={switchValue}
//       onChange={handleChange}
//       value="checkedA"
//       inputProps={{ 'aria-label': 'Switch with loading state' }}
//     />
//   );
// };

// export default Switches;

import './formik-demo.css';
import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    topics: Yup.array()
      .max(1, 'Pick at least 3 tags')
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      ),
  }),
  mapPropsToValues: (props) => ({
    email: '',
    topics: [],
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topics: values.topics.map((t) => t.value),
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'MyForm',
});

const MyForm = (props) => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: 'block' }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.email}</div>
      )}
      <MySelect
        value={values.topics}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.topics}
        touched={touched.topics}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <DisplayFormikState {...props} />
    </form>
  );
};

const options = [
  { value: 'Food', label: 'Food' },
  { value: 'Being Fabulous', label: 'Being Fabulous' },
  { value: 'Ken Wheeler', label: 'Ken Wheeler' },
  { value: 'ReasonML', label: 'ReasonML' },
  { value: 'Unicorns', label: 'Unicorns' },
  { value: 'Kittens', label: 'Kittens' },
];

class MySelect extends React.Component {
  handleChange = (value) => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange('topics', value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('topics', true);
  };

  render() {
    return (
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="color">Topics (select at least 3) </label>
        <Select
          id="color"
          options={options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: 'red', marginTop: '.5rem' }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

const MyEnhancedForm = formikEnhancer(MyForm);

// Helper styles for demo
import './formik-demo.css';
import { MoreResources, DisplayFormikState } from './formik-helper';

const App = () => (
  <div className="app">
    <h1>
      Using <a href="https://github.com/jaredpalmer/formik">Formik</a> with
      3rd-party input components
    </h1>
    <p>
      This example shows to use Formik with a 3rd-party input component. The
      trick is to use Formik's <code>setFieldValue</code> prop and a custom
      component class whenever you need a custom change handler.{' '}
    </p>
    <p>
      To show this off, below is a Formik-enhanced form. It has a "vanilla"
      Formik input for <code>email</code> and a custom select component for{' '}
      <code>topics</code> that uses Jed Watson's{' '}
      <a href="https://github.com/JedWatson/react-select">react-select</a>{' '}
      library.
    </p>
    <MyEnhancedForm />
    <MoreResources />
  </div>
);

import React, { useEffect } from 'react';
import { Chip, TextField, makeStyles } from '@mui/material';
import Downshift from 'downshift';

// const useStyles = makeStyles(
//   (theme: { spacing: (arg0: number, arg1: number) => any }) => ({
//     chip: {
//       margin: theme.spacing(0.5, 0.25),
//     },
//   })
// );

export default function TagsInput({ ...props }) {
  //   const classes = useStyles();
  const { selectedTags, placeholder, tags, ...other } = props;
  const [inputValue, setInputValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState([]);
  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);
  useEffect(() => {
    selectedTags(selectedItem);
  }, [selectedItem, selectedTags]);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      const newSelectedItem = [...selectedItem];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setInputValue('');
        return;
      }
      if (!event.target.value.replace(/\s/g, '').length) return;

      newSelectedItem.push(event.target.value.trim());
      setSelectedItem(newSelectedItem);
      setInputValue('');
    }
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === 'Backspace'
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  }

  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue('');
    setSelectedItem(newSelectedItem);
  }

  const handleDelete = (item) => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <React.Fragment>
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder,
          });
          return (
            <div>
              <TextField
                InputProps={{
                  startAdornment: selectedItem.map((item) => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      //   className={classes.chip}
                      onDelete={handleDelete(item)}
                    />
                  )),
                  onBlur,
                  onChange: (event) => {
                    handleInputChange(event);
                    onChange(event);
                  },
                  onFocus,
                }}
                {...other}
                {...inputProps}
              />
            </div>
          );
        }}
      </Downshift>
    </React.Fragment>
  );
}

// TagsInput.defaultProps = {
//   tags: [],
// };

// TagsInput.propTypes = {
//   selectedTags: PropTypes.func.isRequired,
//   tags: PropTypes.arrayOf(PropTypes.string),
// };

render(<App />, document.getElementById('root'));
