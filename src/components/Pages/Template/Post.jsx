/* eslint-disable eol-last */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import { Container, Box } from '@mui/material';
import './Post.css';
import Header from '../../Misc/Header';
import Footer from '../../Misc/Footer';
import img from '../../Misc/images/background.jpg';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import { Form, Col, Button } from 'react-bootstrap';
// // import ValidationFormLogin from './ValidationFormLogin';
import PostComment from '../Pages/Template/Comments/PostComment';

// const loginSchema = yup.object().shape({
//   email: yup.string().required('Required Field').email('Must have email format'),
//   password: yup.string().required('Required Field').max(150, 'Maximum of 150 characters'),
// });



const Post = () => {
  return (
      <Container>
        <Container maxWidth="lg">
        <Header />
          </Container>
              <Container maxWidth="md">
                  <h1 className='title'>TESTE IRONBLOGGER</h1>
                    <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    mb:4,
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    }}/>
                    {/* <div className='img-container'> */}
                    <Box sx={{
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      display: "flex",
                    }}>
                  <img className="post-img" src={img} alt="post" />
                  {/* </div> */}
                      <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.</p>
                  </Box>
            </Container>
            <Container maxWidth="lg">
          <Footer />
        </Container>
      </Container>
  )
};

export default Post;