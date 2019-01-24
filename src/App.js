import React, { Component } from 'react';
import './App.css';

const hasAccess = true;
const component = hasAccess ? 'UltraTopSecret' : 'Decoy';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  componentDidMount() {
    import(`./components/ultra-top-secret/${component}`).then(m => console.log(m) || this.setState({
      Component: m.default,
    }));
  }

  render() {
    const { Component } = this.state;

    return (
      <div className="App">
        <div>
          { Component && <Component text="BANANA" /> }
        </div>
      </div>
    );
  }
}

export default App;
