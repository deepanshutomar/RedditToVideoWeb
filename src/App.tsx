import React, { useState } from 'react';
import { BookOpen, Video } from 'lucide-react';
import RedditForm from './components/RedditForm';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleVideoGenerated = (url: string) => {
    setVideoUrl(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center">
          <BookOpen className="mr-2" size={32} />
          Reddit Story to Video
          <Video className="ml-2" size={32} />
        </h1>
        <p className="text-gray-600 mt-2">Turn Reddit stories into engaging videos!</p>
      </header>
      <main className="w-full max-w-2xl">
        <RedditForm onVideoGenerated={handleVideoGenerated} />
        {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
      </main>
    </div>
  );
}

export default App;