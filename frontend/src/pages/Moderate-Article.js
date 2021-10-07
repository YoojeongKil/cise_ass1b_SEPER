import React from 'react';
import ModerationForm from '../components/ModerationForm';

const ModerateArticle = () => {
  return (
    <div>
      <h2>Moderate Article</h2>
          <p>This will be a form to allow moderators to accept or reject a submission.</p>
            <ModerationForm/>
    </div>
  ); 
};

export default ModerateArticle;
