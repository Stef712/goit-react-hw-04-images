import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGallleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, handleClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => handleClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ImageGallery;
