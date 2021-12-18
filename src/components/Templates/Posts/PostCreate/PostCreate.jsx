import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { styled } from '@mui/material/styles';
import {
  Container, Button, Grid, Card, MuiSnackBar,
} from '@mui/material';
import { Form, Col } from 'react-bootstrap';
import HeroImage from '../../../Misc/HeroImage';
import TemplatePage from '../../TemplatePage';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../../assets/styles/PostCreate.css';

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

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const handleReaderLoaded = (e) => {
    const binaryString = e.target.result;
    const toBase64 = window.btoa(binaryString);
    setAttach(toBase64);
    setOpen(true);
    setDisabled(true);
  };

  const {
    values, touched, errors,
    handleChange, handleBlur, handleSubmit,
    setValues, setErrors,
  } = useFormik({
    initialValues: {
      userName: '',
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (formData) => {
      try {
        await editUser({
          name: formData.name,
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
          profilePicture: attach,
        }, token);
        localStorage.removeItem('token');
        const tokenResponse = await login(formData.email, formData.password);
        localStorage.setItem('token', tokenResponse.token);
        handleClose();
        document.location.reload(true);
      } catch (error) {
        setErrors([{
          email: error.response.data.error,
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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <HeroImage />
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <TemplatePage>
          <Grid sx={{ alignItems: 'center', height: '100%' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', p: 5, my: 4 }}>
              <Grid style={{ display: 'flex', alignContent: 'center' }}>
                <Form.Group className="title-container" as={Col} md="12" controlId="login-form">
                  <Form.Label>
                    <h2>Título:</h2>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={value}
                    onChange={handleChange}
                  />
                </Form.Group>
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
                  onEditorStateChange={setEditorState}
                />
              </div>
              <Grid className="button-container" sx={{ justifyContent: 'space-between' }}>
                <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file" multiple type="file" />
                  <Button variant="contained" component="span" disabled={disabled}>
                    Upload
                  </Button>
                  <MuiSnackBar type="success" msg="Foto anexada com sucesso!" open={open} setOpen={setOpen} />
                </label>
                <Button
                  className="submit"
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Publicar
                </Button>
              </Grid>
            </Card>
          </Grid>
        </TemplatePage>
      </Container>
    </div>
  );
};

export default PostCreate;
