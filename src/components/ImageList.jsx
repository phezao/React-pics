import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    )
  })
  return (
    <div>{images}</div>
  )
}

export default ImageList;
