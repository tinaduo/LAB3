import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from '../components/Story';

function App() {
  const [stories, setStories] = useState(news_feed.results);

  const removeStory = (index) => {
    const updatedStories = stories.filter((_, i) => i !== index);
    setStories(updatedStories);
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="stories-list">
        {stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            onRemove={() => removeStory(index)}
          />
        ))}
        {stories.length === 0 && <p className="error-msg">No more stories to display.</p>}
      </div>
    </div>
  );
}

export default App;
