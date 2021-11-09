import React from "react";
import PropTypes from "prop-types";
import s from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, id, onDeletContact }) => (
  <li className={s.contactListItem}>
    <p className={s.contact}>
      {" "}
      {name}: {number}
    </p>
    <button
      className={s.buttonDelete}
      type="button"
      onClick={() => onDeletContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactListItem;
