import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Editor, EditorState } from 'draft-js';
import { styled } from '@mui/material/styles';
import {
  Container, Button, Grid, Card, TextareaAutosize,
} from '@mui/material';
import { Form, Col } from 'react-bootstrap';
import { createOnePost } from '../../../../service/api';
import HeroImage from '../../../Misc/HeroImage';
import TemplatePage from '../../TemplatePage';
import MuiSnackBar from '../../../Misc/Snackbar';

const Input = styled('input')({
  display: 'none',
});

const loginSchema = yup.object().shape({
  userName: yup.string().required('Required field').min(5, 'Mimimum of 5 charracters').max(15, 'Maximum of 15 charracters'),
  name: yup.string().required('Required field').min(3, 'Mimimum of 3 charracters').max(100, 'Maximum of 150 charracters'),
  email: yup.string().required('Required Field').email('Invalid format'),
  password: yup.string().required('Required Field').max(10, 'Maximum of 10 characters'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required Field'),
  profilePicture: yup.string(),
});

const PostCreate = () => {
  const [attach, setAttach] = useState('');
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleReaderLoaded = (e) => {
    const binaryString = e.target.result;
    const toBase64 = window.btoa(binaryString);
    setAttach(toBase64);
    setOpen(true);
    setDisabled(true);
  };

  const token = localStorage.getItem('token');

  const {
    values, touched, errors,
    handleChange, handleBlur, handleSubmit, setErrors,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      text: '',
      imageURL: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (formData) => {
      try {
        await createOnePost({
          title: formData.title,
          description: formData.description,
          text: formData.text,
          imageURL: attach,
        }, token);
      } catch (error) {
        setErrors([{
          title: error.response.data.error,
        }]);
      }
    },
  });

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <HeroImage />
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <TemplatePage>
          <form onSubmit={handleSubmit}>
            <Grid sx={{ alignItems: 'center', height: '100%' }}>
              <Card
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
                    padding: '2px',
                    minHeight: '400px',
                    marginTop: '20px',
                  }}
                >
                  <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                  />
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
                    className="submit"
                    type="submit"
                    variant="contained"
                  >
                    Publicar
                  </Button>
                </Grid>
              </Card>
            </Grid>
          </form>
        </TemplatePage>
      </Container>
    </div>
  );
};

export default PostCreate;
