import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'store/selectors';
import { changeFilter } from 'store/filterSlice';
import { FilterWrap, FilterInput } from './Filter.styled';

const filterGenerateId = nanoid();

export function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const normalizedValue = e.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <FilterWrap>
      <label htmlFor="filter">
        Find contacts by name:
        <FilterInput
          id={filterGenerateId}
          type="text"
          name="filter"
          placeholder="Search contacts"
          value={value}
          onChange={onChange}
        />
      </label>
    </FilterWrap>
  );
}
