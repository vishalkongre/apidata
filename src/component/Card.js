import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Cards({ first_name, last_name, img, email }) {
  const classes = useStyles();
  return (
    <Box boxShadow={3} m={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="span">
              Name : {`${first_name} ${last_name}`}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}

            <Typography>Email:{email}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Cards;
