import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';
import { GalleryImg, GalleryItem } from './ImageGalleyItem.styled';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    return (
      <>
        <GalleryItem>
          <GalleryImg
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
          {this.state.showModal && (
            <Modal
              onClose={this.toggleModal}
              image={largeImageURL}
              alt={tags}
            />
          )}
        </GalleryItem>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.objectOf({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
