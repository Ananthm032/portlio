import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../Styles/Project.css"
export default function ActionAreaCard() {
  return (
    <div>
     <h1>MyPersonal Project</h1><b/>
   
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://dev.to/codingnepal/todo-list-app-using-html-css-javascript-5e7p"
          alt="Todo App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Todo App Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedule
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://sharedigitalcard.com/"
          alt="Digital Card "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Digital Card Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A digital card, virtual card or cloud card is an online hosted, digital virtual representation of any plastic card or a generic identification method in IdM (Identity Management). and the least important tasks at the bottom. It is helpful in planning our daily sch
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </div>
     );
}