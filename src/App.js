import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'
import * from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [],
    edited: [],
  }
  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    ContactsAPI.remove(contact)
  }
  createContact = () => {
    ContactsAPI.create(contact)
      .then((contact) => {
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
  }
  render() {
    return (
      <div>
      <Route exact path='/' render={() => (
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
        />
        )} />
      <Route path='/create' render={({ history }) =>  (
        <CreateContact
          onDeleteContact={(contact) => {
            this.createContact(contact)
            history.push('/')
          }}
      ) />
      </div>
    );
  }
}

export default App;
