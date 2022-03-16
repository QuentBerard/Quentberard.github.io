import * as React from "react";
import {useEffect,useState} from "react";
import StoriesApi from "../../apis/storiesapi";
import axios from 'axios';


const baseURL = "http://localhost:2043/";

export default function App() {
  const [story, setStory] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setStory(response.data);
    });
    
  }, []);
  if (!story) return null;
  return (
    <div>
      <h1>Title</h1>
      <p>{story}</p>
    </div>
  );
}