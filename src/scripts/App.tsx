import * as React from 'react';
import { Component } from 'react';
import { TSComponentExample, ComponentExample } from 'lib/ui';

// scss
import 'scss/App.scss';

// images
const logo = require('img/logo.svg');

// props
interface AppProps {
  name: string;
}
export class App extends React.Component<AppProps, {}>{
  render() {
    console.log('APP')
    return <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to {this.props.name}</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <ComponentExample name="AN EXAMPLE COMPONENT WITH .TSX EXTENSION" />
      <TSComponentExample name="AN EXAMPLE COMPONENT WITH .TS EXTENSION " />
    </div>
  }
}

