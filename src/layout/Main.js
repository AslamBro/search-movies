import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";


export default class Main extends React.Component {
  state = {
    movies: []
}

  componentDidMount () {
    fetch ('http://www.omdbapi.com/?apikey=e370cc00&s=panda')
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
}

 searchMovies = (str, type = 'all') => {
  fetch (`http://www.omdbapi.com/?apikey=e370cc00&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
  .then(response => response.json())
  .then(data => this.setState({movies: data.Search}))
 }
  
   render () {
    return(
      <div className="container content">
         <Search searchMovies={this.searchMovies} />
        {this.state.movies.length ? ( <Movies movies={this.state.movies} />) : <Loader />}
      </div>
      
    )
  }
}


