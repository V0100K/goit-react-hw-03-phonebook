import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeletContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeletContact={onDeletContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactList;
