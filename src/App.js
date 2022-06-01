import * as React from 'react'
import { useState, useEffect } from 'react';
import Post from './component/post';

export default function App() {
  const [result, setResult] = useState([])
  function push() {
    fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=100`)
    .then(response => response.json())
    .then(result => setResult(result))
  }
  useEffect(push, [])
  console.log(result)
  return (
      <div>
        {result.map(i => <Post id={i}/>)}
      </div>
  );
}