import {Box} from '@mui/material';
import React from 'react';
import Post from './Post';

const Feed = () => {
  const posts = [1, 2, 3, 4, 5];
  return (
    <Box flex={4} p={2}>
      {posts.map(post => (
        <Post key={post} />
      ))}
    </Box>
  );
};
export default Feed;
