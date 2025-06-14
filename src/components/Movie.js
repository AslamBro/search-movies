export default function Movie (props) {
    const {Title, Year, imdbID, Type, Poster} = props;

    return (
          <div key={imdbID} className="card movie">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={Poster} />
          </div>
          <div class="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}<i class="material-icons right">more_vert</i></span>
            <p>{Year}<span className="right">{Type}</span></p>
          </div>
        </div>
    )
}
