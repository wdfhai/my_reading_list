import { useState, useEffect } from "react";
import { SavedBooks } from "../../components/SavedBooks";
import API from "../../utils/API";

export const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([])

  async function getSavedBooks (){
    await API.getBooks().then((response) => {
      console.log(response)
      setSavedBooks(response.data)
    })
  }

  function handleRemoveBook ({ target }){
    const id = target.dataset.id
    API.deleteBook(id).then((response) => {
      getSavedBooks()
    })
  }

  useEffect(() => {
    getSavedBooks()
  },[])

  console.log(savedBooks)

  return (
    <div className="jumbotron">
      <div className="row mb-3">
        <h1>Saved Books</h1>
      </div>
      <div className="row mb-3">
        <h2>Here are your saved books!</h2>
        <p className="lead">Looks like you have <b>{savedBooks.length}</b> books saved. You can remove the ones you want by clicking &#10060;.</p>
      </div>
      <div>
        {savedBooks.length && savedBooks.map((book)=>(
          <SavedBooks 
            key={book._id}
            id={book._id}
            image={book.image ? book.image : "https://via.placeholder.com/300x400?text=Not-Available"}
            title={book.title} 
            author={book.author} 
            url={book.url} 
            synopsis={book.synopsis} 
            remove={handleRemoveBook}
          />
        ))}        
      </div>
    </div>
  )
}