import React, { Component } from 'react';

class B extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  async componentDidMount() {
    const loadedModule = await import('./ultra-top-secret/UltraTopSecret'  /* webpackChunkName: "ultra-top-secret" */);
    
    this.setState({
      Component: loadedModule.default,
    });
  }

  render() {
    const { Component } = this.state;

    return (
      <div>
          { Component && <Component text="BANANA" /> }
      </div>
    );
  }
}

export default B;
