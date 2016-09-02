import React from 'react';
 
export default class ProfilePage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <>User Profile</>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}