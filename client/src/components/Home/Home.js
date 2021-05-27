import React, { Component } from "react";
import "./Home.css";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from "../../config";


// if we have time for this...?

import HeroImage from "../elements/HeroImage/HeroImage";
// import SearchBar from "../elements/SearchBar/SearchBar";
// import FourColGrid from "../elements/FourColGrid/FourColGrid";
// import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
// import Spinner from "../elements/Spinner/Spinner";

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTitle: ""
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}Top250Movies/${API_KEY}`;
    this.fetchItems(endpoint);
  }

  searchMovies = searchMovie => {
    console.log(searchMovie);
    let endpoint = "";
    this.setState({
      movies: [],
      loading: true,
      searchMovie
    });

    if (searchMovie === "") {
      endpoint = `${API_URL}Top250Movies/${API_KEY}`;
    } else {
      endpoint = `${API_URL}SearchMovie/${API_KEY}&${searchTitle}`;
    }

    https://imdb-api.com/en/API/SearchMovie/k_12345678/Inception 2010
    this.fetchItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = "";
    this.setState({
      loading: true
    });

    if (this.state.searchTitle === "") {
      endpoint = `${API_URL}Top250Movies/${API_KEY}&${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}SearchMovie/${API_KEY}&${searchTitle}&${
        this.state.searchTitle
      }$page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      });
  };

  render() {
    return (
      <div className="rmdb-home">
        {this.state.heroImage ? (
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
                this.state.heroImage.backdrop_path
              }`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
            />
            <SearchBar callback={this.searchItems} />
          </div>
        ) : null}
        <div className="rmdb-home-grid">
          <FourColGrid
            header={this.state.searchTerm ? "Search Result" : "Popular Movies"}
            loading={this.state.loading}
          >
            {this.state.movies.map((element, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable={true}
                  image={
                    element.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}`
                      : "./images/no_image.jpg"
                  }
                  movieId={element.id}
                  movieName={element.title}
                />
              );
            })}
          </FourColGrid>
          {this.state.loading ? <Spinner /> : null}
          {this.state.currentPage <= this.state.totalPages &&
          !this.state.loading ? (
            <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;