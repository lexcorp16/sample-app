import React, { Component } from 'react';
import axios from 'axios';

import SignUpForm from './SignUp';

class App extends Component {
  render() {
    return (
      <div className="center-content">
        <SignUpForm />
      </div>
    );
  }
}

export default App;
