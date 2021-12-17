import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export default function AlignItemsList() {
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  useEffect(async () => {
    const userResponse = await getOnePost(postId);
    setPost(userResponse);
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {post.comments.map((comment) => {
        return (
            <div>
                <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={comment.owner.profilePicture} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
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
                            )} />
                            
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />
            </div>
        )
      })}
      
      </List>
  );
}
