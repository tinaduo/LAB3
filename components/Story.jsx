import React from 'react';

const Story = ({ story, onRemove }) => {
    const { image_url, link, creator, description, title } = story;

    return (
        <div className="story">
            <img
                src={image_url ? image_url : 'https://placehold.co/600x400?text=Story+Cover'}
                alt="story cover image"
                className="story-image"
            />
            <div className="story-content">
                <a className='story-title' href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                <h3 className="story-creator">By {creator ? creator : 'Unknown Author'}</h3>
                <p className='story-description'>{description}</p>
            </div>
            <button onClick={onRemove}>&#10006;</button>
        </div>
    );
};

export default Story;
