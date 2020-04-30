import React, { Component } from 'react';
import { Spinner, Button, Alert, Image } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import './Classifier.css';
import axios from 'axios';

class Classifier extends Component {
  state = {
    files: [],
    isLoading: false,
    recentImage: null,
  };



  onDrop = (files) => {
    this.setState({
      files: [],
      isLoading: true,
      recentImage: null,
    });
    this.loadImage(files);
  };

  loadImage = (files) => {
    setTimeout(() => {
      this.setState(
        {
          files,
          isLoading: false,
        },
        () => {
          console.log(this.state.files);
        }
      );
    }, 500);
  };

  activateSpinner = () => {
    this.setState({ isLoading: true, files: [] });
  };

  deactivateSpinner = () => {
    this.setState({ isLoading: false });
  };

  sendImage = () => {
    this.activateSpinner();
    let formData = new FormData();
    formData.append('picture', this.state.files[0], this.state.files[0].name);
    axios
      .post('http://localhost:8000/api/images/', formData, {
        headers: {
          accept: 'application/json',
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        this.getImageClass(res);
        console.log(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getImageClass = (obj) => {
    axios
      .get(`http://localhost:8000/api/images/${obj.data.id}/`, {
        headers: {
          accept: 'application/json',
        },
      })
      .then((res) => {
        this.setState({ recentImage: res });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.deactivateSpinner();
  };

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop} accept="image/png, image/jpeg">
        {({ isDragActive, getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: 'dropzone back' })}>
              <input {...getInputProps()} />
              <i
                className="far fa-image mb-2 text-muted"
                style={{ fontSize: 100 }}
              ></i>
              <p className="text-muted">
                {isDragActive
                  ? 'Drop some images'
                  : `Drag 'n' drop some files here, or click to select files`}
              </p>
            </div>
            <aside>{files}</aside>
            {this.state.files.length > 0 && (
              <Button
                onClick={this.sendImage}
                variant="info"
                size="lg"
                className="mt-3"
              >
                Select Image
              </Button>
            )}

            {this.state.isLoading && (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
            {this.state.recentImage && (
              <>
                <Alert variant="primary">
                  {this.state.recentImage.data.classified}
                </Alert>
                <Image
                  className="justify-content-center"
                  src={this.state.recentImage.data.picture}
                  height="200"
                  rounded
                />
              </>
            )}
          </section>
        )}
      </Dropzone>
    );
  }
}

export default Classifier;
