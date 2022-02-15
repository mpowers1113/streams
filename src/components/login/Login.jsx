import React from "react";
import { Button } from "../UI/Button";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
class Login extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "460055702062-5b2ppnc7a47gg8djmcu5vld1372911ki.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (!this.props.isSignedIn) {
      return (
        <Button primary onClick={this.onSignInClick}>
          Sign In
        </Button>
      );
    }
    return <Button onClick={this.onSignOutClick}>Sign Out</Button>;
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Login);
