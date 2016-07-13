import React, {
  Component,
  PropTypes
}                       from 'react';
import NavigationBar    from '../../components/navigation/NavigationBar.jsx';
import navigationModel  from '../../models/navigation.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navModel : navigationModel
    };
  }

  render() {
    return (
      <div>
        <NavigationBar
          brand={this.state.navModel.brand}
          navModel={this.state.navModel}
        />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

// statics :
App.propTypes = {
  children: PropTypes.node,
  history:  PropTypes.object,
  location: PropTypes.object
};

export default App;
