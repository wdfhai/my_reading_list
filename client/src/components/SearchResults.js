export const SearchResults = (props) => {
  return(
    <>
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <img className="card-img-top" src={props.image} alt="thumbnail" style={{height: "300px", width: "225px", margin: "10px"}}/>
              <p>Find it here: <a href={props.url} target="_blank" rel="noreferrer" alt="link">Preview Link</a></p>
            </div>
            <div className="col-sm-12 col-md-9">
              <button 
                className="btn" 
                type="button" 
                data-title={props.title} 
                data-author={props.author} 
                data-url={props.url} 
                data-synopsis={props.description} 
                data-image={props.image} 
                style={{float: "right"}} 
                onClick={props.save}
              >&#10084;</button>
              <h4 className="card-title">Title: {props.title}</h4>
              <h5 className="card-title">Author(s): {props.author}</h5>
              <p className="card-text" style={{height: "225px", overflowY: "auto"}}>Synopsis: {props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}