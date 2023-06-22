import { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import {
  SearchBtn,
  SearchBtnLabel,
  SearchComponent,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = e => {
    this.setState({ searchName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      return toast.error('Please enter a search name');
    }
    this.props.onSubmit(this.state.searchName);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <SearchComponent>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <SearchBtnLabel>Search</SearchBtnLabel>
            <BsSearch />
          </SearchBtn>

          <SearchInput
            value={this.state.searchName}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchComponent>
    );
  }
}
