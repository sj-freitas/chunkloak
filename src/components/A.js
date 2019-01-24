import React, { Component } from 'react';

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  async componentDidMount() {
    const loadedModule = await import('./ultra-top-secret/UltraTopSecret'  /* webpackChunkName: "ultra-top-secret" */);
    const decoy = await import('./Decoy' /* webpackChunkName: "decoy" */);
    
    this.setState({
      Component: loadedModule.default,
      Decoy: decoy.default,
    });
  }

  render() {
    const { Component, Decoy } = this.state;

    return (
      <div>
          { Component && <Component text="BANANA" /> }
          { Decoy && <Decoy /> }
      </div>
    );
  }
}

export default A;
