import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MyMenu(props) {
  return (
    <>
      <div
        style={{
          margin: '20px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '22px',
        }}
      >
        <h2> Start Bootstrap</h2>
        <h3>Home</h3>
        <h3>About</h3>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Shop</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All Products</Typography>
            <Typography>Popular Items</Typography>
            <Typography>New Arrivals</Typography>
          </AccordionDetails>
        </Accordion>
        <button className="btn">
          <ShoppingCartIcon />
          Cart{' '}
          <span
            style={{
              backgroundColor: 'black',
              width: '50px',
              height: '20px',
              border: '1px solid black',
              borderRadius: '0.5rem',
              color: 'white',
            }}
          >
            0
          </span>
        </button>
      </div>
    </>
  );
}
