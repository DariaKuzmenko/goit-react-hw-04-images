import { Component } from 'react';
import { ModalContainer, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModalBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.closeModalBackDrop}>
        <ModalContainer>
          <img src={this.props.image} alt={this.props.alt} />
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
