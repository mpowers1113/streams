import React, { useEffect, useState } from 'react';

class Login extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '460055702062-5b2ppnc7a47gg8djmcu5vld1372911ki.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (!this.state.isSignedIn) {
      return <button onClick={this.onSignInClick}>Sign In</button>;
    }
    return <button onClick={this.onSignOutClick}>Sign Out</button>;
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default Login;
