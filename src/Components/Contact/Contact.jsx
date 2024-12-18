import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <div className={styles.contactCard}>
    <div className={styles.info}>
      <div className={styles.name}>
        <span className={styles.icon}>
          <img src="/svg/user.svg" alt="name" width={18} height={18} />
        </span>{" "}
        {name}
      </div>
      <div className={styles.number}>
        <span className={styles.icon}>
          <img src="/svg/phone.svg" alt="number" width={18} height={18} />
        </span>{" "}
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
