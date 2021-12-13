import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const contact = JSON.parse(localStorage.getItem("contact"));
    if (contact) {
      this.setState({ contacts: contact });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contact", JSON.stringify(this.state.contacts));
    }
  }
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  formSubmitHandler = ({ id, name, number }) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };



  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onChange={this.changeFilter}
          onDeletContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
