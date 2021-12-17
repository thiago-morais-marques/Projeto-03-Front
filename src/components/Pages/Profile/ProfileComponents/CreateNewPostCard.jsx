import React from 'react';
import {
  Card, Grid, Button, Icon,
} from '@mui/material';

const CreateNewPostCard = () => {
  return (
    <Card
      flex="auto"
      width="100%"
    >
      <Button
        variant="text"
        fullWidth
      >
        <Grid
          flex="auto"
          sx={{
            display: 'flex', justifyContent: 'center',
          }}
        >
          Criar Novo Post
          <Icon color="primary">add_circle</Icon>
        </Grid>
      </Button>
    </Card>
  );
};

export default CreateNewPostCard;
