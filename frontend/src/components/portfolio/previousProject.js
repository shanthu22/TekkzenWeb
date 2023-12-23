import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const PreviousProject = (props) => {
  console.log(props.PreviousProjectData);
  const fetchedPreviousProjects = props.PreviousProjectData;
  return (
    <div>
      {fetchedPreviousProjects.map((item, key) => (
        <Card sx={{ margin: "30px 0px 30px 0px " }}>
          <CardActionArea>
            <CardMedia
              style={{ overflowY: "auto" }}
              component='img'
              height='300'
              image={item.image}
              alt='Lankan Health'
              sx={{}}
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {item.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};
export default PreviousProject;
