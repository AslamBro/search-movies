import React from "react";

export default class extends React.Component {
   state = {
     search: '',    
     type: 'all'  
   }

  handleKey = (e) => {
    if(e.key === `Enter`) {
      this.props.searchMovies(this.state.search, this.state.type);

    }
  }

  handleFilter = (e) => {
    this.setState ( ()=> ({type: e.target.dataset.type}), () => {
          this.props.searchMovies(this.state.search, this.state.type)
    }
    )
  }
  

   render () {
     return (
          <div class="row">
          <div class="input-field">
            <input 
            placeholder="Search" 
            type="Search" 
            class="validate" 
            value={this.state.search}
            onChange={(e)=> this.setState({search: e.target.value})}
            onKeyDown={this.handleKey}
           />
           <button 
           className="btn search-btn" 
           onClick={() => 
           this.props.searchMovie(this.state.search, this.state.type)}>
             
             Search Movies
           </button>
          </div>
         
      </div> 
     )
   }
}
