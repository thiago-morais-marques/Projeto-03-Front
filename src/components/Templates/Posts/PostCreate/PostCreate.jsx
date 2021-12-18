/* eslint-disable consistent-return */
import React, { useState } from 'react';
import * as yup from 'yup';
import {
  EditorState, convertFromRaw, convertToRaw, conver,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { stateToHTML } from 'draft-js-export-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import {
  Container, Button, Grid, Card, TextareaAutosize, Typography,
} from '@mui/material';
import { Form, Col } from 'react-bootstrap';
import { createOnePost } from '../../../../service/api';
import HeroImage from '../../../Misc/HeroImage';
import TemplatePage from '../../TemplatePage';
import MuiSnackBar from '../../../Misc/Snackbar';

const Input = styled('input')({
  display: 'none',
});

const newSchema = yup.object().shape({
  title: yup.string().required('Required field').min(1, 'Mimimum of one charracter').max(150, 'Maximum of 150 charracters'),
  description: yup.string().min(10, 'Mimimum of 10 charracter').max(100, 'Maximum of 100 charracters'),
  text: yup.string().required('Required field'),
  imageURL: yup.string().required('Required field'),
});

const htmlOptions = {
  blockRenderers: {
    'header-one': (block) => {
      return <Typography variant="h1">escape(block.getText()</Typography>;
    },
  },
};

const PostCreate = () => {
  const [attach, setAttach] = useState('');
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const token = localStorage.getItem('token');

  const {
    values, touched, errors, handleChange, handleBlur, handleSubmit, setErrors,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      text: '',
      imageURL: '',
    },
    validationSchema: newSchema,
    onSubmit: async (formData) => {
      try {
        await createOnePost({
          title: formData.title,
          description: formData.description,
          text: stateToHTML(editorState.getCurrentContent(), htmlOptions),
          imageURL: attach,
        }, token);
      } catch (error) {
        setErrors([{
          title: error.response.data.error,
        }]);
      }
    },
  });

  const handleReaderLoaded = (e) => {
    const binaryString = e.target.result;
    const toBase64 = window.btoa(binaryString);
    setAttach(toBase64);
    setOpen(true);
    setDisabled(true);
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const toolbarOptions = {
    options: ['inline', 'blockType', 'list', 'link', 'history'],
    inline: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['bold', 'underline', 'superscript'],
    },
    blockType: {
      inDropdown: true,
      options: ['Normal', 'H1', 'H2', 'H3', 'H4'],
    },
    list: {
      inDropdown: false,
      options: ['unordered', 'ordered'],
    },
    link: {
      inDropdown: false,
      defaultTargetOption: '_self',
      options: ['link', 'unlink'],
    },
    history: {
      inDropdown: false,
      options: ['undo', 'redo'],
    },
  };

  function myBlockRenderer(contentBlock) {
    const type = contentBlock.getType();
    if (type === 'header-one') {
      return {
        component: Typography,
        editable: false,
        props: {
          variant: 'h1',
        },
      };
    }
  }

  // JSON.stringify(editorState.getCurrentContent(), false, 2);

  return (
    <div>
      <HeroImage />
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <TemplatePage>
          <div>
            <Grid sx={{ alignItems: 'center', height: '100%' }}>
              <Card
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: 5,
                  my: 4,
                }}
              >
                <Grid
                  style={{
                    display: 'flex',
                    pb: 4,
                    flexDirection: 'column',
                    alignContent: 'center',
                  }}
                >
                  <Form.Group as={Col} md="12">
                    <Form.Label>
                      <h2>Título:</h2>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.title && !errors.title}
                      isInvalid={touched.title && errors.title}
                    />
                  </Form.Group>
                  <Grid sx={{ py: 4 }}>
                    <h4>Descrição:</h4>
                    <TextareaAutosize
                      maxRows={3}
                      placeholder="Máximo de 3 linhas"
                      style={{ width: '100%', height: '5rem', p: 4 }}
                    />
                  </Grid>
                </Grid>
                <h5>Sobre o que você gostaria de falar hoje?</h5>
                <div
                  style={{
                    marginBottom: '1rem',
                    border: '1px solid black',
                  }}
                >
                  <div>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={setEditorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      toolbar={toolbarOptions}
                      customBlockRenderFunc={myBlockRenderer}
                    />
                  </div>

                  <br />
                  <br />
                  <pre>{}</pre>
                  <pre>{}</pre>

                </div>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between', mx: 2 }}>
                  <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" disabled={disabled} onChange={handleChangeFile}>
                      Upload
                    </Button>
                    <MuiSnackBar type="success" msg="Foto anexada com sucesso!" open={open} setOpen={setOpen} />
                  </label>
                  <Button
                    type="submit"
                    variant="contained"
                  >
                    Publicar
                  </Button>
                </Grid>
              </Card>
            </Grid>
          </div>
        </TemplatePage>
      </Container>
    </div>
  );
};

export default PostCreate;
