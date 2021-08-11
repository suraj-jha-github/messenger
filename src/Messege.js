import React,{forwardRef} from "react";
import "./Messege.css";
import { Card, CardContent, Typography } from "@material-ui/core";

const Messege=forwardRef(({messege,username},ref)=> {
    const isUser=username===messege.username;
    return (
      <div ref={ref} className={`messege ${isUser && 'messege__user'}`}>
      <Card className={isUser ? "messege__userCard" : "messege__guestCard"} >
      <CardContent>
        <Typography color="white" variant="h5" component="h2">
          
            {!isUser && `${messege.username || "Unknown User"}:`} {messege.messege}
          
        </Typography>
      </CardContent>
    </Card>
   </div>
  );
})

export default Messege;
