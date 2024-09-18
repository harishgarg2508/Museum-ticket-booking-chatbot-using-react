import React from 'react';

const languages = ['English', 'Spanish', 'French', 'German'];

const LanguageSelection = ({ triggerNextStep }) => {
  return (
    <div>
      <h3>Please select your preferred language:</h3>
      {languages.map((lang, index) => (
        <button key={index} onClick={() => triggerNextStep({ value: lang })}>
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelection;