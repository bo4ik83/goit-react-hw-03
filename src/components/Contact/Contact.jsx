import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => (
  <div className={styles.contactCard}>
    <div className={styles.info}>
      <div className={styles.name}>
        <span className={styles.icon}><FaUser/></span>{" "}
        {name}
      </div>
      <div className={styles.number}>
        <span className={styles.icon}><FaPhoneAlt/></span>{" "}
        {number}
      </div>
    </div>
    <button className={styles.deleteButton} onClick={onDelete}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
