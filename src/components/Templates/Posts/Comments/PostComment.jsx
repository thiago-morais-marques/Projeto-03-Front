import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button, Divider, List, Avatar,
  ListItemText, Typography, ListItemAvatar, ListItem,
} from '@mui/material';
import { createOneComment } from '../../../../service/api';
import '../../../../assets/styles/PostComment.css';

const newSchema = yup.object().shape({
  text: yup.string().required('Required field'),
});

const PostComment = ({ post, updatedComments }) => {
  const token = localStorage.getItem('token');

  const { id } = useParams();

  const {
    values, handleChange, handleSubmit, setErrors,
  } = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: newSchema,
    onSubmit: async (formData) => {
      try {
        await createOneComment(id, formData, token);
        await updatedComments();
      } catch (error) {
        setErrors([{
          text: error.response.data.error,
        }]);
      }
    },
  });

  return post.comments.length > 0 && (
    <div className="comment-container" style={{ display: 'flex' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          flex: 1, width: '100%', height: '5rem', marginBottom: '3rem',
        }}
      >
        <div
          style={{
            display: 'flex', flex: 2, width: '100%', height: '5rem',
          }}
        >
          <textarea
            style={{
              flex: 1, border: '1px solid #ced4da', height: '5rem', resize: 'none',
            }}
            name="text"
            value={values.text}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Button
            type="submit"
            color="primary"
            variant="text"
            sx={{ alignSelf: 'flex-start', px: 2, fontSize: 15 }}
          >
            Comentar
          </Button>
        </div>
      </form>
      <h5 style={{ color: 'black', marginTop: '1rem', marginBottom: '1rem' }}>Comentários</h5>
      <Divider mb={1} />
      <List sx={{ width: '100%', bgcolor: 'background.paper', flex: 'auto' }}>
        {post.comments.map((comment) => {
          return (
            <div key={comment._id} style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={comment.owner.name} src="" />
                </ListItemAvatar>
                <ListItemText
                  sx={{ flex: 2 }}
                  secondary={(
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.owner.name}
                      </Typography>
                      {comment.text}
                    </>
                  )}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        })}
      </List>
    </div>
  );
};

PostComment.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  updatedComments: PropTypes.func.isRequired,
};

export default PostComment;
