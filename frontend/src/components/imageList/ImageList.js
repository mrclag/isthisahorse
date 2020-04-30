import React, { Component } from 'react';
import Image from './Image';
import axios from 'axios';

class ImageList extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios
      .get('http://localhost:8000/api/images/', {
        headers: {
          accept: 'application/json',
        },
      })
      .then((res) => {
        this.setState({ images: res.data });
        console.log(res);
      });
  };

  render() {
    const images = this.state.images.map((img) => {
      return <Image key={img.id} picture={img.picture} name={img.classified} />;
    });

    return (
      <>
        <h1>Image List Here</h1>
        {images}
      </>
    );
  }
}

export default ImageList;
