import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BottomNavigation, Container, Grid, Typography, Box } from "@mui/material";
import './PostComment.css';

const PostComment = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
    return (
      <div className="comment-container">
          <Grid>
            <h5>Comentários</h5>
           <Box>
            <div style={{ border: "1px solid black"}}>
              <Editor style={{ border: "2px solid black", padding: '2px', minHeight: '400px' }}
                editorState={editorState}
                onEditorStateChange={setEditorState}
                />
              </div>
            </Box>
          </Grid>


      </div>
    );
}

export default PostComment;