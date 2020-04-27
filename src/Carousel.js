import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    // sets state of photos
    return { photos };
  }
  handleIndexClick(e) {
    // dataset refers to the data-index attr
    this.setState({
      active: Number(e.target.dataset.index)
    });
  }
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => 
            <img
              key={photo}
              onClick={this.handleIndexClick.bind(this)}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
