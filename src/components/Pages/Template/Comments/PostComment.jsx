import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BottomNavigation, Container, Grid, Typography, Box } from "@mui/material";
import './PostComment.css'

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
            <h2>Start editing to see some magic happen!</h2>
            <h1>React Editors</h1>
            <Box>
            <div tyle={{ border: "2px solid black"}}>
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