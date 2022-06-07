import React, {useEffect, useState} from "react";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";
import { Box } from "@mui/system";

export default function Post (props) {
    const [result, setResult] = useState({})
    useEffect(() => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`)
            .then(response => response.json())
            .then(result => setResult(result))
    }, [])
    const myDate = new Date(result.time * 1000)
    return(
    <div>
        
      <ListItem alignItems="center" sx={{marginLeft: "auto", marginRight: "auto", maxWidth: "500px"}}>
        <ListItemText
          primary={result.title}
          secondary={
            <React.Fragment>
              <Box sx={{ display: 'flex', gap: 3 }}>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                
              >
                {myDate.toLocaleDateString('ru')}
              </Typography>
              <Link target="_blank" href={result.url}>Link</Link>
              </Box>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" />
    </div>
    );
}