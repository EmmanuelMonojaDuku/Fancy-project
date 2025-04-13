import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { AuthContext } from '../../context/AuthContext';
import { Grid, TextField } from '@material-ui/core';
import BookItem from './BookItem';

const BookList = () => {
  const { books, addToCart } = useContext(BookContext);
  const { user } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search Books"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={3}>
        {filteredBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookItem 
              book={book} 
              onAddToCart={user?.role === 'student' ? () => addToCart(book) : null} 
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookList;