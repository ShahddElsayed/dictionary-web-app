import React from "react";
import { ReactComponent as PlayIcon } from "../images/icon-play.svg";

const WordDetails = ({ wordData }) => {
  if (!wordData) return null;

  const wordDataArray = Array.isArray(wordData) ? wordData : [wordData];

  const findFirstAudioPhonetic = (phonetics) => {
    return phonetics.find((phonetic) => phonetic.audio);
  };

  const firstEntry = wordDataArray[0];
  const firstAudioPhonetic = findFirstAudioPhonetic(firstEntry.phonetics);
  const sourceUrl = `https://en.wiktionary.org/wiki/${firstEntry.word}`;

  return (
    <div className="word-details">
      <div className="word-header">
        <div className="phonetics-container">
          <h1 className="word">{firstEntry.word}</h1>
          <p className="phonetics">{firstEntry.phonetics[0]?.text}</p>
        </div>
        {firstAudioPhonetic?.audio && (
          <button
            className="play-button"
            onClick={() => new Audio(firstAudioPhonetic.audio).play()}
          >
            <PlayIcon className="play-icon" />
          </button>
        )}
      </div>

      {wordDataArray.map((entry, entryIndex) => (
        <div key={entryIndex} className="meanings">
          {entry.meanings.map((meaning, meaningIndex) => (
            <div key={meaningIndex} className="meaning-section">
              <div className="meaning-header">
                <h2 className="part-of-speech">{meaning.partOfSpeech}</h2>
                <div className="separator-line"></div>
              </div>
              <p className="meaning-label">Meaning</p>
              <ul className="meaning-list">
                {meaning.definitions.map((definition, defIndex) => (
                  <li key={defIndex}>
                    {definition.definition}
                    {definition.example && (
                      <p className="example-sentence">"{definition.example}"</p>
                    )}
                  </li>
                ))}
              </ul>
              {meaning.synonyms?.length > 0 && (
                <div className="synonyms">
                  <strong className="synonyms-label">Synonyms</strong>{" "}
                  {meaning.synonyms.map((synonym, synIndex) => (
                    <span key={synIndex} className="synonym">
                      {synonym}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      <div className="separator-bottom"></div>
      <div className="source">
        <strong>Source</strong>{" "}
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          {sourceUrl}
        </a>
      </div>
    </div>
  );
};

export default WordDetails;
