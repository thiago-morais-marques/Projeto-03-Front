import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  Portal, Button, Box, Divider, List, Avatar, ListItemText, Typography, ListItemAvatar, ListItem,
} from '@mui/material';
import './PostComment.css';

const PostComment = ({ post }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const container = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  return post.comments.length > 0 && (
    <div className="comment-container" style={{ display: 'flex' }}>
      <Button
        color="primary"
        variant="text"
        sx={{ alignSelf: 'flex-start', px: 2, fontSize: 15 }}
        onClick={handleClick}
      >
        Comentar
      </Button>
      {show ? (
        <Portal container={container.current}>
          <div>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              sx={{ color: 'black' }}
            />
          </div>
        </Portal>
      ) : null}
      <Box sx={{ p: 1, my: 1, border: '1px solid gray' }} ref={container} />
      <h5 style={{ color: 'black', marginTop: '1rem', marginBottom: '1rem' }}>Comentários</h5>
      <Divider mb={1} />
      <List sx={{ width: '100%', bgcolor: 'background.paper', flex: 'auto' }}>
        {post.comments.map((comment) => {
          const base64 = `data:image/png;base64,${comment.owner.profilePicture}`;
          return (
            <div key={comment._id} style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
              <ListItem alignItems="flex-start">
                {base64.length > 0
                  ? (
                    <ListItemAvatar>
                      <Avatar alt={comment.owner.name} src={base64} />
                    </ListItemAvatar>
                  )
                  : (
                    <ListItemAvatar>
                      <Avatar alt={comment.owner.name} src={''} />
                    </ListItemAvatar>
                  )}
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
};

export default PostComment;
