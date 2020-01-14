import { useState, useEffect } from "react"

const UseInitialState = (API) => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error(err))
  }, [])
  return videos
}

export default UseInitialState
