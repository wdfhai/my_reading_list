import { useState } from "react";
import { SearchResults } from "../../components/SearchResults";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form"

export const Search = () => {
  const URL = "https://www.googleapis.com/books/v1/volumes?q="

  const [searchResults, setSearchResults] = useState([])
  const [formObject, setFormObject] = useState({})

  async function searchBooks () {
    const title = formObject["title"] || ""
    const author = formObject["author"] || ""
    const titleSearch = title.split(' ').join('+')
    const authorSearch = author.split(' ').join('+')
    const titleQuery = `+intitle:${titleSearch}` || ""
    const authorQuery = `+inauthor:${authorSearch}` || ""
    await fetch(URL + titleSearch + titleQuery + authorQuery)
    .then(res => res.json())
    .then((result) => {
      setSearchResults(result.items);
    },
    (error) => {
      console.log(error);
      }
    )
  }

  function handleInputChange({ target }) {
    const { value, name } = target;
    setFormObject({...formObject, [name]: value})
  }

  function handleBookSearch(event) {
    event.preventDefault();
    const { value, name } = event.target;
    setFormObject({...formObject, [name]: value})
    searchBooks()
  }

  function handleSaveBook ({ target }){
    API.saveBook({
      title: target.dataset.title,
      author: target.dataset.author,
      url: target.dataset.url,
      synopsis: target.dataset.synopsis,
      image: target.dataset.image,
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Find a new read!</h1>
        <p className="lead">Use this form to search for your next favorite book!</p>
        <hr className="my-4"/>
        <form className="form">
          <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
          <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
          <FormBtn
            disabled={!(formObject.title && formObject.author)}
            onClick={handleBookSearch}
            >
            Search
          </FormBtn>
        </form>
      </div>
      <div className="jumbotron">
        <div className="row">
          <h1 className="display-4">Search Results</h1>
          <p className="lead">Your results currently contain <b>{searchResults.length}</b> books. You can add the one you like to your Saved Books by clicking &#10084;.</p>
          <hr className="my-4"/>
        </div>
        <br />
        <div className="row">
        {searchResults.length > 0 && searchResults.map((book) => (
          <SearchResults 
            key={book.id}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/300x400?text=Not-Available"}
            title={book.volumeInfo.title} 
            author={book.volumeInfo.authors} 
            url={book.volumeInfo.previewLink} 
            description={book.volumeInfo.description} 
            save={handleSaveBook}
          />
        ))} 
        </div>         
      </div>
    </>
  )
}