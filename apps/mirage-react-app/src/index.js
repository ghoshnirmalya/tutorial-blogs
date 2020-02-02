import React from 'react';
import ReactDOM from 'react-dom';
import { makeServer } from "mirage-mock-api/src/server"

import App from './App';

if (process.env.NODE_ENV === "development") {
  makeServer()
}

ReactDOM.render(<App />, document.getElementById('root'));
