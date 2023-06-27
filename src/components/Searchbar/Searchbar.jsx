import { useState } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import {
  SearchBtn,
  SearchBtnLabel,
  SearchComponent,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = e => {
    setSearchName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      return toast.error('Please enter a search name');
    }
    onSubmit(searchName);
    resetForm();
  };
  const resetForm = () => {
    setSearchName('');
  };

  return (
    <SearchComponent>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
          <BsSearch />
        </SearchBtn>

        <SearchInput
          value={searchName}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchComponent>
  );
};
