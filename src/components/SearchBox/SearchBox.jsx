import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchBox}>
    <label htmlFor="search" className={styles.label}>
      Find contacts by name
    </label>
    <input
      type="text"
      id="search"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </div>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
