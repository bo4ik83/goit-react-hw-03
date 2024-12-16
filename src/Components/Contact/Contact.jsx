import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ name, number }) => (
  <li className={styles.item}>
    {name}: {number}
  </li>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
