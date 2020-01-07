import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId: '345291866597-8jrdgmb26i80lnnpet9a31iat505tbf7.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=>{
        this.auth=window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
        //get the property to sign in on google
      });
    });
  }

  onAuthChange=(isSignedIn)=>{
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }else{
      this.props.signOut();
    }
  };
  
  //Function to know if we are signed in on google user
  renderAuthButton(){
    if(this.props.isSignedIn===null){
      return null;
    } else if(this.props.isSignedIn){
      return(
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"/>
            Sign Out
          </button>
      )
    }else{
      return(
        <button onClick={this.onSignInClick} className="ui green google button">
          <i className="google icon"/>
            Sign in with google
          </button>
      )
    }
  }

  //Button Handler

  onSignInClick=()=>{
    this.auth.signIn();
  };

  onSignOutClick=()=>{
    this.auth.signOut();
  };

  render(){
    return(
      <div className="ui segment" style={{display:"flex"}}>
        <label className="ui container"><h1>Ingresa en google para hacer tu horario</h1></label>
        {this.renderAuthButton()}

      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);