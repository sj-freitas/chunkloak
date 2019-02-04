import React, { Component } from 'react';

class B extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  async componentDidMount() {
    const Component = await __chunkloak__('./ultra-top-secret/UltraTopSecret', 'ultra-top-secret', 'superAdmins');

    this.setState({ Component });
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
