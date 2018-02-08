import React, {Component} from 'react';
import Routes from './routes/Routes';

// imported naviagation bar to the root folder because its not going to change
import Navigation from './components/Navigation';

//imported sidebar
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {

    var sideBarStyle = {
      marginTop: "90px"
    };

    var cardStyle = {
      height: "77vh",
      overflowY: "scroll",
      width: "auto",
      marginRight: "30px",
      paddingTop: "0px",
      paddingBottom: "0px"
    };

    var cardDivStyle = {
      marginTop: "44px"
    };

    return (
      <div className="contain" style={{backgroundColor:"#e8edf"}}>
        <Navigation/>

        <div uk-grid='true'>
          <div className="uk-width-1-6">
            <div style={sideBarStyle}>

              <Sidebar/>

            </div>

          </div>

          <div className="uk-width-5-6" style={cardDivStyle}>
            <h3>Patients
              <span>Choose from the patients below to view more
              </span>
            </h3>
            <div className="uk-card uk-card-default uk-card-body" style={cardStyle}>
              <Routes/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
