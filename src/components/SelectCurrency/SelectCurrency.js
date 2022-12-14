import { PropTypes } from "prop-types";
import { Select } from "@material-ui/core";

const SelectCurrency = ({ list, value, onChange }) => (
  <Select value={value} onChange={onChange} variant="outlined" native>
    {list.map(({ code, description }) => (
      <option value={code} key={code}>
        {code} - {description}
      </option>
    ))}
  </Select>
);

SelectCurrency.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectCurrency;
