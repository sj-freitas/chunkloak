import React, { Component } from 'react';

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  loadComponent = async () => {
    const Component = await __chunkloak__('./ultra-top-secret/UltraTopSecret', 'ultra-top-secret');

    this.setState({ Component });
  }

  render() {
    const { Component } = this.state;

    return (
      <div>
          <button onClick={ this.loadComponent }>Do login</button>
          { Component && <Component text="BANANA" /> }
          ALWAYS RENDERED
      </div>
    );
  }
}

export default A;
