import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function MyCard({ img, item, rating, price, sale }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={img} alt="450X300" />
        <div className="center">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item}
            </Typography>
            {rating && <Typography component="div">{rating}</Typography>}

            <Typography component="div">{price}</Typography>
          </CardContent>
        </div>
        <CardActions className="center">
          <Button variant="outlined" className="btn">
            Add to cart
          </Button>
        </CardActions>
        {sale && <div className="sale">sale</div>}
      </Card>
    </>
  );
}