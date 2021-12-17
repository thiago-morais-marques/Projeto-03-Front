import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BottomNavigation, Container, Grid, Typography, Box } from "@mui/material";
import './PostComment.css';
// import TemplatePage from "../../TemplatePage";
import { Button, CssBaseline, IconButton, Input } from '@mui/material';

const PostComment = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
}
    return (
      <div className="comment-container">
          <Grid>
            <h5>Comentários</h5>
           <Box>
            <div style={{ border: "1px solid black"}}>
              <Editor style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}
                editorState={editorState}
                onEditorStateChange={setEditorState}
                />
              </div>
            </Box>
              <Box className="submit-container">
                <Button 
                  // sx={{border: "5px solid red", padding: "1rem" }}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  <h6>Publicar</h6>
                </Button>
              </Box>
          </Grid>
      </div>
    );
}

export default PostComment;