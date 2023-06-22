import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from './services/pixabayAPI';
import { Button } from './Button/Button';
import { AppComponent } from './App.styled';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
    images: [],
    isLoading: false,
    totalImages: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { searchName, page } = this.state;
    try {
      if (prevState.searchName !== searchName) {
        const imageResult = await this.addImages(searchName, page);
        this.setState({ images: imageResult });
      }
      if (prevState.page !== page) {
        const imageResult = await this.addImages(searchName, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...imageResult],
        }));
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  addImages = async (searchName, page) => {
    this.setState({ isLoading: true });
    const image = await API.fetchImages(searchName, page);
    this.setState({ totalImages: image.totalHits, isLoading: false });
    if (image.totalHits === 0) {
      toast.error('No results found');
    }
    return image.hits;
  };

  handleSubmitForm = searchName => {
    if (searchName === this.state.searchName) {
      toast.info(
        `We found ${searchName}! Please enter a different search name.`
      );
    }
    this.setState({ searchName: searchName });
  };

  handleButtonMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <AppComponent>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && (
          <Button onClick={this.handleButtonMore} />
        )}
        <ToastContainer />
      </AppComponent>
    );
  }
}
