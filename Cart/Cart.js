import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { AuthContext } from '../../context/AuthContext';
import { Container, Typography, Button, List, Paper } from '@material-ui/core';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeFromCart, reserveBooks } = useContext(BookContext);
  const { user } = useContext(AuthContext);

  const handleReserve = () => {
    if (user?.role === 'student') {
      const reserved = reserveBooks();
      alert(`Reserved ${reserved.length} books successfully!`);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <>
          <Paper>
            <List>
              {cart.map((book) => (
                <CartItem 
                  key={book.id} 
                  book={book} 
                  onRemove={() => removeFromCart(book.id)} 
                />
              ))}
            </List>
          </Paper>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReserve}
            style={{ marginTop: '20px' }}
          >
            Reserve Books ({cart.length})
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;