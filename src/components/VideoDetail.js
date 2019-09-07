import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return 'loading';
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&enable_js=1`;
  return (
    <div className="ui embed">
      <iframe src={videoSrc} allow="autoplay" allowFullScreen />
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
