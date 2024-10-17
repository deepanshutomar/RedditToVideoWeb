import React, { useState } from 'react';
import axios from 'axios';
import { Play } from 'lucide-react';

interface RedditFormProps {
  onVideoGenerated: (url: string) => void;
}

const RedditForm: React.FC<RedditFormProps> = ({ onVideoGenerated }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // This is a mock API call. In a real application, you would call your backend service.
      const response = await axios.post('/api/generate-video', { url });
      onVideoGenerated(response.data.videoUrl);
    } catch (err) {
      setError('Failed to generate video. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reddit-url">
          Reddit Post URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reddit-url"
          type="url"
          placeholder="https://www.reddit.com/r/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            'Generating...'
          ) : (
            <>
              <Play className="mr-2" size={18} />
              Generate Video
            </>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </form>
  );
};

export default RedditForm;