import React, { Component } from 'react';
import FormInput from '../form-input/form-input';

import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } =  this.state

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName } )

      this.setState({ email: '', password: '', displayName: '', confirmPassword: '' });

    } catch (error){
      console.error(error)
    }

  };

  render() {

    const { displayName, email, password, confirmPassword } = this.state

    return (
      <div className="SignIn">
        <h2 className="SignIn__title">I want to create an account</h2>
        <span className="SignIn__subtitle">
          Sign up with an email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            required
            type="text"
            handleChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            name="email"
            value={email}
            required
            type="text"
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            value={password}
            required
            type="password"
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            value={confirmPassword}
            required
            type="password"
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <div className="SignIn__button-container">
            <CustomButton type="submit" value="Submit Form">
              Sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
