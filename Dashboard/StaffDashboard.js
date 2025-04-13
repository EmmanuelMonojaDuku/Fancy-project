import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import BookList from '../Books/BookList';

const StaffDashboard = () => {
  const { books, reservedBooks } = useContext(BookContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
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
            <Typography>
              Books Checked Out: {reservedBooks.length}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <BookList />
    </Container>
  );
};

export default StaffDashboard;