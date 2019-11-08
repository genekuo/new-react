import React, { Component } from 'react';

import ContactForm from "./ContactForm";



class App extends Component {
    submit = values => {
      // print the form values to the console
    };

    render() {
      return <ContactForm onSubmit={this.submit} />;
    }
}

export default App;

