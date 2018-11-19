import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [],
  }
  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }
  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
