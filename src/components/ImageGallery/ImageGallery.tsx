import React from 'react';
import classes from './imageGallery.module.scss';

interface ImageGalleryProps {
  onDifficultyChange: (difficulty: string) => void;
  onCuisineChange: (cuisine: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ onDifficultyChange, onCuisineChange }) => {
  const scrollToSection = (type: string, value: string) => {
    const sectionId = `${value.toLowerCase()}-recipes`; // ID-ul secțiunii
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID "${sectionId}" not found.`);
    }

    if (type === 'difficulty') {
      onDifficultyChange(value);
    } else if (type === 'cuisine') {
      onCuisineChange(value);
    }
  };

  return (
    <div>
      {/* Secțiunea pentru selectarea dificultății */}
      <div className={classes.imageGallery}>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('difficulty', 'Easy')}
        >
          <img src="/easy.jpg" alt="Easy" />
          <span className={classes.label}>Easy</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('difficulty', 'Medium')}
        >
          <img src="/medium.jpg" alt="Medium" />
          <span className={classes.label}>Medium</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('difficulty', 'Hard')}
        >
          <img src="/hard.jpg" alt="Hard" />
          <span className={classes.label}>Hard</span>
        </div>
      </div>

      {/* Secțiunea pentru selectarea bucătăriei */}
      <div className={classes.additionalGallery}>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'Italian')}
        >
          <img src="/italian.jpg" alt="Italian" />
          <span className={classes.label}>Italian</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'Asian')}
        >
          <img src="/asian.jpg" alt="Asian" />
          <span className={classes.label}>Asian</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'American')}
        >
          <img src="/american.jpg" alt="American" />
          <span className={classes.label}>American</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'Japanese')}
        >
          <img src="/japanese.jpg" alt="Japanese" />
          <span className={classes.label}>Japanese</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'Korean')}
        >
          <img src="/korean.jpg" alt="Korean" />
          <span className={classes.label}>Korean</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'Greek')}
        >
          <img src="/greek.jpg" alt="Greek" />
          <span className={classes.label}>Greek</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'Indian')}
        >
          <img src="/indian.jpg" alt="Indian" />
          <span className={classes.label}>Indian</span>
        </div>
        <div
          className={classes.imageContainer}
          onClick={() => scrollToSection('cuisine', 'Thai')}
        >
          <img src="/thai.jpg" alt="Thai" />
          <span className={classes.label}>Thai</span>
        </div>
      </div>

      {/* Adaugă secțiunile țintă în pagină */}
      <section id="easy-recipes" className={classes.recipeSection}>
      </section>
      <section id="medium-recipes" className={classes.recipeSection}>
      </section>
      <section id="hard-recipes" className={classes.recipeSection}>
      </section>
      <section id="italian-recipes" className={classes.recipeSection}>
      </section>
      <section id="asian-recipes" className={classes.recipeSection}>
      </section>
      <section id="american-recipes" className={classes.recipeSection}>
      </section>
    </div>
  );
};

export default ImageGallery;
