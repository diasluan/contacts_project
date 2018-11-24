import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    contacts: [
       {
         "id": "karen",
         "name": "Karen Isgrigg",
         "handle": "karen_isgrigg",
         "avatarURL": "http://localhost:5001/karen.jpg"
       },
       {
         "id": "richard",
         "name": "Richard Kalehoff",
         "handle": "richardkalehoff",
         "avatarURL": "http://localhost:5001/richard.jpg"
       },
       {
         "id": "tyler",
         "name": "Tyler McGinnis",
         "handle": "tylermcginnis",
         "avatarURL": "http://localhost:5001/tyler.jpg"
       }
      ],
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
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
