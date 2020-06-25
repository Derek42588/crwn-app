import React, { Component } from 'react';
import FormInput from '../form-input/form-input';

import CustomButton from '../CustomButton/CustomButton';

import {
  handleSignInWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
  signInWithGithub,
} from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleGoogleSignIn = async () => {
    const authError = await signInWithGoogle();

    if (authError) {
      console.log('auth error was:', authError);
    }
  };
  handleFacebookSignIn = async () => {
    const authError = await signInWithFacebook();

    if (authError) {
      console.log('auth error was:', authError);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await handleSignInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error){
      console.log(error)
    }
  };

  render() {
    return (
      <div className="SignIn">
        <h2 className="SignIn__title">I already have an account</h2>
        <span className="SignIn__subtitle">
          Sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            type="text"
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            value={this.state.password}
            required
            type="password"
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="SignIn__button-container">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton type="button" onClick={this.handleGoogleSignIn} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
            <CustomButton type="button" onClick={this.handleFacebookSignIn} isGoogleSignIn>
              Sign In with Facebook
            </CustomButton>
            <CustomButton type="button" onClick={signInWithTwitter} isGoogleSignIn>
              Sign In with Twitter
            </CustomButton>
            <CustomButton type="button" onClick={signInWithGithub} isGoogleSignIn>
              Sign In with Github
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
