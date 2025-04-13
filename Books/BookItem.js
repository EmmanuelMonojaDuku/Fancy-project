import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Chip } from '@material-ui/core';

const BookItem = ({ book, onAddToCart }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography color="textSecondary">
          by {book.author}
        </Typography>
        <Typography variant="body2" component="p">
          ISBN: {book.isbn}
        </Typography>
        <Chip
          label={book.available ? 'Available' : 'Checked Out'}
          color={book.available ? 'primary' : 'secondary'}
          style={{ marginTop: '10px' }}
        />
      </CardContent>
      <CardActions>
        {onAddToCart && book.available && (
          <Button 
            size="small" 
            color="primary"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default BookItem;