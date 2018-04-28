// Importing React since we are using React.
import React, { Component } from 'react';
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Importing material-ui theme.
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// Importing UI components from rebass.
import { Container } from 'rebass';
// Importing app logo.
// import logo from './logo.svg';
// Importing css
import './App.css';
// Importing Navbar component.
import NavBar from './Components/AppBar';
// Importing Footer component.
import Footer from './Components/Footer';
// Importing Home page component.
import Home from './containers/Home';
// Importing the My symptom journal page component.
import SymptomJournal from './containers/SymptomJournal';
// Importing the DoctorList page component.
import DoctorList from './containers/DoctorsList';
// Importing the Appointments page component.
import Appointments from './containers/Appointments';
// Importing the My health log page component.
import MedLog from './containers/MedLog';
// Importing the Attachments page.
import Attachments from './containers/Attachments';
// Importing the Prescriptions page
import Prescriptions from './containers/Prescriptions';
// Importing the Charts page
import Charts from './containers/Charts';
// Importing the Login page
import Login from './containers/Login';
// Importing the side bar
import Sidebar from './Components/Sidebar';

// App theme customization.
const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 18,
  },
});

class App extends Component {
  render() {
    return [
      <MuiThemeProvider theme={theme}>
        <NavBar />,
        <Sidebar />,
        {/* <Router>
          <Container>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/symptoms" component={SymptomJournal} />
            <Route exact path="/doctors" component={DoctorList} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/log" component={MedLog} />
            <Route exact path="/attachments" component={Attachments} />
            <Route exact path="/prescriptions" component={Prescriptions} />
            <Route exact path="/charts" component={Charts} />
          </Container>
        </Router>, */}
        <Footer />
      </MuiThemeProvider>,
    ];
  }
}

// Exporting App component so that index.js can access it and render the components to the page.
export default App;
