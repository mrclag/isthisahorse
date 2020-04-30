import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Image from './Image';
import axios from 'axios';

class ImageList extends Component {
  state = {
    images: [],
    visible: 2,
    isLoading: true,
    newLoaded: false,
    status: false,
  };

  componentDidMount() {
    setTimeout(this.getImages, 500);
  }

  getImages = () => {
    axios
      .get('http://localhost:8000/api/images/', {
        headers: {
          accept: 'application/json',
        },
      })
      .then((res) => {
        this.setState({ images: res.data, status: true });
        console.log(res);
      });
    this.setState({ isLoading: false });
  };

  handleVisible = () => {
    const visible = this.state.visible;
    const new_visible = visible + 2;
    this.setState({ newLoaded: true });
    setTimeout(() => {
      this.setState({ visible: new_visible, newLoaded: false });
    }, 300);
  };

  render() {
    const images = this.state.images.slice(0, this.state.visible).map((img) => {
      return <Image key={img.id} picture={img.picture} name={img.classified} />;
    });

    return (
      <>
        {this.state.isLoading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : (
          <>
            {this.state.images.length === 0 && this.state.status && (
              <h3>No images classified.</h3>
            )}
            {images}
            {this.state.newLoaded && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <br />
            {this.state.images.length > this.state.visible &&
              this.state.images.length > 2 && (
                <Button
                  variant="primary"
                  size="lg mb-5"
                  onClick={this.handleVisible}
                >
                  Load More
                </Button>
              )}
            {this.state.images.length <= this.state.visible &&
              this.state.images.length > 0 && <h3>No more images to load</h3>}
          </>
        )}
      </>
    );
  }
}

export default ImageList;
