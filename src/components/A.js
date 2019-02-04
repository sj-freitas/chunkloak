import React, { Component } from 'react';

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  async getComponent() {
    try {
      const Component = await import('./ultra-top-secret/UltraTopSecret'  /* webpackChunkName: "ultra-top-secret" */);

      __chunkloak__('./ultra-top-secret/UltraTopSecret', 'ultra-top-secret');

      return Component.default;
    } catch (e) {
      return () => null;
    }
  }

  async componentDidMount() {
    const Component = await this.getComponent();

    this.setState({ Component });
  }

  render() {
    const { Component } = this.state;

    return (
      <div>
          { Component && <Component text="BANANA" /> }
          ALWAYS RENDERED
      </div>
    );
  }
}

export default A;
