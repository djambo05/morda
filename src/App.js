import * as React from 'react'
import { useState, useEffect } from 'react';
import Post from './component/post';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Fab } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [result, setResult] = useState([])
  function push() {
    setLoading(true)
    fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100`)
    .then(response => response.json())
    .then(result => {
      setResult(result)
      setLoading(false)
    })
  }
  useEffect(push, [])
  console.log(result)
  return (
      <div>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Hacker News
          </Typography>
          <Box sx={{ m: 1, position: 'relative', marginLeft: "auto" }}>
        <Fab
          aria-label="save"
          color="primary"
          onClick={push}
        >
          <RefreshIcon/>
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: 'green',
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
            
          />
        )}
      </Box>
        </Toolbar>
      </AppBar>
    </Box>

    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {result.map(i => <Post id={i}/>)}
    </List>
      </div>
  );
}