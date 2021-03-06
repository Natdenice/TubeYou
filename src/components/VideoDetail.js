/* eslint-disable react/prop-types */
import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Please Type a Keyword to search a Video</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&showinfo=0&enablejs=1&modestbranding=1`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video-player"
          src={videoSrc}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="info-box ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
