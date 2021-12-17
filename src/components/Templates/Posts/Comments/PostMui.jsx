/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/function-component-definition */
// import React, { useEffect, useState } from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import { useParams } from 'react-router-dom';

// export default function AlignItemsList() {
//   const [post, setPost] = useState([]);
//   const { postId } = useParams();
//   useEffect(async () => {
//     const userResponse = await getOnePost(postId);
//     setPost(userResponse);
//   }, []);

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {post.comments.map((comment) => {
//         return (
//             <div>
//                 <ListItem alignItems="flex-start">
//                         <ListItemAvatar>
//                             <Avatar alt="Remy Sharp" src={comment.owner.profilePicture} />
//                         </ListItemAvatar>
//                         <ListItemText
//                             primary="Brunch this weekend?"
//                             secondary={(
//                                 <>
//                                     <Typography
//                                         sx={{ display: 'inline' }}
//                                         component="span"
//                                         variant="body2"
//                                         color="text.primary"
//                                     >
//                                         {comment.owner.name}
//                                     </Typography>
//                                     {comment.text}
//                                 </>
//                             )} />
                            
//                     </ListItem>
                    
//                     <Divider variant="inset" component="li" />
//             </div>
//         )
//       })}
      
//       </List>
//   );
// }

/////////////////////////////////////////////////


import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function AlignItemsList() {
  return (

    <div className= "comments-container">
        <Container  style={{ marginBottom: '1rem' }}>
          <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
      </Container>
    </div>
  );
}
