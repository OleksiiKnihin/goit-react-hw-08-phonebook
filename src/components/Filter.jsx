import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      <label>Find contacts by Name </label>
      <input
        type="text"
        name="filter"
        placeholder="Angelina"
        onChange={handleChange}
      />
    </div>
  );
};
