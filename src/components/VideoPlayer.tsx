import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Generated Video</h2>
      <div className="aspect-w-16 aspect-h-9">
        <video
          className="w-full h-full rounded-lg shadow-lg"
          controls
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;