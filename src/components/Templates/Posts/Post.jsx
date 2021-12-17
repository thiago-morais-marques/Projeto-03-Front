/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect, useParams } from 'react';
// import { Container, Box } from '@mui/material';
import './Post.css';
import img from '../../Misc/images/background.jpg';
import PostComment from './Comments/PostComment';
import TemplatePage from "../TemplatePage";
import { Button, CssBaseline, Grid, Box, Typography, Container, Link } from '@mui/material';
import { Form, Col } from 'react-bootstrap';
import AlignItemsList from './Comments/PostMui'

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { getOnePost } from '../../../service/api';
// import Header from '../../Misc/Header';
// import Footer from '../../Misc/Footer';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import { Form, Col, Button } from 'react-bootstrap';
// // import ValidationFormLogin from './ValidationFormLogin';
// const loginSchema = yup.object().shape({
//   email: yup.string().required('Required Field').email('Must have email format'),
//   password: yup.string().required('Required Field').max(150, 'Maximum of 150 characters'),
// });

const Post = () => {
    // const [post, setPost] = useState([]);
    // const { postId } = useParams();
    // useEffect(async () => {
    //   const userResponse = await getOnePost(postId);
    //   setPost(userResponse);
    // }, []);

  return (
      <Container>
         <TemplatePage>
            <Container maxWidth="md">
                <h1 className='title'>Título</h1>
                  <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    mb:4,
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}/>
                  <div className='img-container'>
                      
                      <Box sx={{
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          display: "flex",
                      }}>
                      <img className="post-img" src={img} alt="post" />

                      <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mi purus.
                      </p>
                    </Box>
                  </div>
              <PostComment />
            <AlignItemsList />
            <AlignItemsList />
          </Container>
      </TemplatePage>




  </Container>
  )
};

export default Post;