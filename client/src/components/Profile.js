    
import React, { Component } from 'react';
import { FormLabel }  from 'react-bootstrap';
//import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{userprofile.name}</h1>
          <div className="Profile">
            <img src={userprofile.picture} alt="profile" />
            <div>
              <FormLabel>Nickname</FormLabel>
              <h3>{userprofile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(userprofile, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;