import React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem = ({ book, onRemove }) => {
  return (
    <ListItem>
      <ListItemText
        primary={book.title}
        secondary={`by ${book.author} - ISBN: ${book.isbn}`}
      />
      <IconButton edge="end" aria-label="delete" onClick={onRemove}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;