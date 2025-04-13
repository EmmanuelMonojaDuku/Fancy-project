import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Container, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Paper } from '@material-ui/core';
import BookList from '../Books/BookList';

const AdminDashboard = () => {
  const { books, addBook, updateBook, deleteBook } = useContext(BookContext);
  const [open, setOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: ''
  });

  const handleOpen = (book = null) => {
    setCurrentBook(book);
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        isbn: book.isbn
      });
    } else {
      setFormData({
        title: '',
        author: '',
        isbn: ''
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (currentBook) {
      updateBook({
        ...currentBook,
        ...formData
      });
    } else {
      addBook(formData);
    }
    handleClose();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Library Statistics
            </Typography>
            <Typography>Total Books: {books.length}</Typography>
            <Typography>
              Available Books: {books.filter(book => book.available).length}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => handleOpen()}
            style={{ height: '100%' }}
          >
            Add New Book
          </Button>
        </Grid>
      </Grid>

      <BookList showAdminControls onEdit={handleOpen} onDelete={deleteBook} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentBook ? 'Edit Book' : 'Add New Book'}</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            label="Title"
            fullWidth
            margin="normal"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            name="author"
            label="Author"
            fullWidth
            margin="normal"
            value={formData.author}
            onChange={handleChange}
          />
          <TextField
            name="isbn"
            label="ISBN"
            fullWidth
            margin="normal"
            value={formData.isbn}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {currentBook ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;