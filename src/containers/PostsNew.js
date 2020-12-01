import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {

  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Post Content" name="content" component={this.renderField} />
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link className="btn btn-danger" to="/blog/posts">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors= {};

  // Validate the inputs from 'values'
  if(!values.title) {
    errors.title = "Please enter a title";
  }
  if(!values.categories) {
    errors.categories = "Please enter some categories";
  }
  if(!values.content) {
    errors.content = "Please enter some content";
  }

  // if errors is empty, the form is fine to submit
  // if errors has *any* properties, Redux Form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(PostsNew);
