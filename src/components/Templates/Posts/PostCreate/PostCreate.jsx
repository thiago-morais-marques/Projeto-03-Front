/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable spaced-comment */
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// import './PostCreate.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { TextField, Grid, Container } from '@mui/material';



// const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
//   '& .MuiToggleButtonGroup-grouped': {
//     margin: theme.spacing(0.5),
//     border: 0,
//     '&.Mui-disabled': {
//       border: 0,
//     },
//     '&:not(:first-of-type)': {
//       borderRadius: theme.shape.borderRadius,
//     },
//     '&:first-of-type': {
//       borderRadius: theme.shape.borderRadius,
//     },
//   },
// }));

// function CustomPagePost() {
//   const [alignment, setAlignment] = React.useState('left');
//   const [formats, setFormats] = React.useState(() => ['italic']);

//   const handleFormat = (event, newFormats) => {
//     setFormats(newFormats);
//   };

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };
//   return (

//     <Container maxWidth="lg" sx={{border:"3px solid red", height: "10vh"}}>
//     <Grid container sx={{display:"flex", flexDirection:"column", alignItems:"center", border:"3px solid yellow", height: "50vh", maxWidth:"100%"}}>
//       <Grid sx={{flex: "auto"}} item>
//       <Grid>
//          <TextField label="Title" sx={{border:"3px solid purple", maxWidhth:"100%", height: "10vh"}} />
//       </Grid>
//       </Grid>
//         <Paper
//           elevation={0}
//           sx={{
//             display: 'flex',
//             border: (theme) => `1px solid ${theme.palette.divider}`,
//             flexWrap: 'wrap',
//             border:"3px solid blue",
//             height: "50px",
//             paddingBottom: "70px"
//           }}
//         >
//           <StyledToggleButtonGroup
//             size="small"
//             value={alignment}
//             exclusive
//             onChange={handleAlignment}
//             aria-label="text alignment"
//           >
//             <ToggleButton value="left" aria-label="left aligned">
//               <FormatAlignLeftIcon />
//             </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//               <FormatAlignCenterIcon />
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//               <FormatAlignRightIcon />
//             </ToggleButton>
//             <ToggleButton value="justify" aria-label="justified" disabled>
//               <FormatAlignJustifyIcon />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//           <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//           <StyledToggleButtonGroup
//             size="small"
//             value={formats}
//             onChange={handleFormat}
//             aria-label="text formatting"
//           >
//             <ToggleButton value="bold" aria-label="bold">
//               <FormatBoldIcon />
//             </ToggleButton>
//             <ToggleButton value="italic" aria-label="italic">
//               <FormatItalicIcon />
//             </ToggleButton>
//             <ToggleButton value="underlined" aria-label="underlined">
//               <FormatUnderlinedIcon />
//             </ToggleButton>
//             <ToggleButton value="color" aria-label="color" disabled>
//               <FormatColorFillIcon />
//               <ArrowDropDownIcon />
//             </ToggleButton>
//           </StyledToggleButtonGroup>
//         </Paper>
//         <TextareaAutosize
//         maxRows={4}
//         aria-label="maximum height"
//         placeholder="Maximum 4 rows"
//         defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//             ut labore et dolore magna aliqua."
//         style={{ width: "100%", flex: 1 }}
//       />
//       </Grid>
//     </Container>    
//   );
// }

// export default CustomPagePost;



// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { TextField, Grid, Container } from '@mui/material';
// import React, { useState } from 'react';


// const ControlledEditor = () => {
//   const [editor, setEditor] = useState('');
//   const onEditorStateChange = (e) => {
//     setEditor(
//       e.target.value,
//     );
//   };
//  console.log(editor)
//   return (
//       <Editor
//         value={e.target.value}
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
//         onChange={onEditorStateChange}
//       />
//     )
// }

// export default ControlledEditor;

//////////////////////////////////////////////////



// import React, { useEffect, useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, TextInput } from "draft-js";
// import {
//   Card,
//   Heading,
//   studioTheme,
//   ThemeProvider
// } from '@sanity/ui';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// // import { TextField, Grid, FormField, Container } from '@mui/material';


// export default function PostCreate () {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
    
//   );
//   useEffect(() => {
//     console.log(editorState);
//   }, [editorState]);
//   const [value, setValue] = useState('')
//   return (
//     <div>
//       {/* <Card padding={4}>
//         <TextInput
//           fontSize={[2, 2, 3, 4]}
//           onChange={(event) =>
//             setValue(event.currentTarget.value)
//           }
//           padding={[3, 3, 4]}
//           placeholder="TextInput"
//           value={value}
//         />
//       </Card> */}

//       <h1>React Editors</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
//         <Editor
//           editorState={editorState}
//           onEditorStateChange={setEditorState}
//         />
//       </div>
//     </div>
//   )
// } 


///////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import Footer from "../../../Misc/Footer";
import { BottomNavigation, Container, Grid, Typography } from "@mui/material";
// import Header from "../../../Misc/Header";
import { Box } from "@mui/system";
import { Form, Col } from 'react-bootstrap';
import './PostCreate.css'
import { useSearchParams } from "react-router-dom";
import { Button, CssBaseline, IconButton, Input } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TemplatePage from "../../TemplatePage";
import MainPost from "../../../Pages/Home/homeComponents/MainPost";
import CardPost from "../../../Misc/CardPost";
import { getAllPosts } from "../../../../service/api";
import MuiSnackBar from "../../../Misc/Snackbar";


const PostCreated = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty());
    useEffect(() => {
}, [editorState]);

const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
}

const [posts, setPosts] = useState([]);

useEffect(async () => {
  const postsResponse = await getAllPosts();
  setPosts(postsResponse);  
}, []);

const mainPostIndex = Math.floor(Math.random() * setPosts.length);

const [attach, setAttach] = useState('');
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // const {handleChange} = useFormik({
  //   initialValues: {
  //     text: '',
  //   },
  //   validationSchema: loginSchema,
  //   onSubmit: async (formData) => {
  //     try {
  //       await register({name: formData.text});
  //     } catch (error) {
  //       setErrors([{
  //         text: error.response.data.error,
  //       }]);
  //     }
  //   },
  // });

  return (
    <Container maxWidth="lg" sx={{height: '100%'}}>      
      <TemplatePage>
        <Grid sx={{alignItems: 'center', height: '100%'}}>
          <div>
            <Grid style={{ display: 'flex', alignContent: 'center' }}>
              <Form.Group className="title-container" as={Col} md="12" controlId="login-form">
                <Form.Label>
                  <h2>Título:</h2>
                  </Form.Label>
                  <Form.Control
                  type="text"
                  value={value}
                  onChange={handleChange}/>
                {/* <Form.Control.Feedback></Form.Control.Feedback> */}
              </Form.Group>
            </Grid>
            <p>Sobre o que você gostaria de falar hoje?</p>
          <div style={{ marginBottom: '1rem', border: "1px solid black", padding: '2px', minHeight: '400px', marginTop: '10px'}}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState} />
              </div>
            </div>
          <div className="align-container" >
            <Grid className="button-container">
            <Grid
              item
                xs={15}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
              <Button 
                  className="submit-containt"
                  type="submit"
                  fullWidth
                  variant="contained"
                // sx={{ mt: 1, mb: 1 }}
                >
                  Publicar
              </Button>
              <div className="cam-container">                        
                <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      name="profilePicture"
                      // onChange={handleChangeFile}
                      disabled={disabled}
                    />
                  <IconButton className="cam-icon" color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
                <MuiSnackBar type="success" msg="Foto anexada com sucesso!" open={open} setOpen={setOpen} />
                </div>
              </Grid>            
            </Grid>
         </div>
        </Grid>
      </TemplatePage>
  </Container>
  );
}
export default PostCreated;
