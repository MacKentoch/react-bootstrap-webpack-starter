import React            from 'react';
import NavigationBar    from '../../components/navigation/NavigationBar.jsx';
import navigationModel  from '../../models/navigation.model.json';

class App extends React.Component {
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
  children  : React.PropTypes.node,
  history   : React.PropTypes.object,
  location  : React.PropTypes.object
};

export default App;
