import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: ""
  }

  componentDidMount() {
    axios.get('/api/hello').then(res => {
      console.log(res.data)
    })
  }

  render() {
    return(
      <div>
        <h1>Welcome to starter project</h1>
      </div>
    )
  }
}

export default App;
