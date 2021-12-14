/* eslint-disable react/function-component-definition */
import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './Finances.css';

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

function Finances (props: FeaturedPostProps) {
  const { post } = props;

  return (
    <div className='container-finance'>
        <h1 className='TEXT-H1'>Another blog post</h1>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br/>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
            Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
            Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. <br/>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. 
            Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.<br/>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
    </div>
  );
}

export default Finances;