// src/components/StoryList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('https://child-vocability.onrender.com/api/sciencefiction')
      .then(response => {
        debugger;
        console.log(response);
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="story-list">
      {stories.map((story, index) => (
        <div key={index} className="card">
          <h2>{story.Title}</h2>
          <p>{story.Description}</p>
          <p>{story._id}</p>
          <p>{story.Image}</p>
        </div>
      ))}
    </div>
  );
}

export default StoryList;
