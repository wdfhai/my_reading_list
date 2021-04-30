export const SavedBooks = (props) => {
  return(
    <>
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-sm-12 col-md-3">
              <img className="card-img-top" src={props.image} alt="thumbnail" style={{height: "300px", width: "225px", margin: "10px"}}/>
              <p>Find it here: <a href={props.url} target="_blank" rel="noreferrer" alt="link">{props.url ? "Preview Link" : "Unavailable"}</a></p>
            </div>
            <div className="col-sm-12 col-md-9">
              <button
                className="btn" 
                type="button" 
                data-id={props.id} 
                style={{float: "right"}}
                onMouseEnter={{backgroundColor: "red"}}
                onClick={props.remove}
              >&#10060;</button>
              <h4 className="card-title">Title: {props.title}</h4>
              <h5 className="card-title">Author(s): {props.author}</h5>
              <p className="card-text" style={{height: "225px", overflowY: "auto"}}>Synopsis: {props.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}