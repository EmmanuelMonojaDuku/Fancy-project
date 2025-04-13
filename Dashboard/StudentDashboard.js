import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Container, Typography, Paper, Grid, List, ListItem, ListItemText } from '@material-ui/core';

const StudentDashboard = () => {
  const { reservedBooks } = useContext(BookContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Your Reserved Books
            </Typography>
            {reservedBooks.length === 0 ? (
              <Typography>You have no books reserved</Typography>
            ) : (
              <List>
                {reservedBooks.map((book) => (
                  <ListItem key={book.id}>
                    <ListItemText
                      primary={book.title}
                      secondary={`by ${book.author} - ISBN: ${book.isbn}`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;