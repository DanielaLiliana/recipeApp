import React from 'react';
import classes from './about.module.scss';

const About: React.FC = () => {
  return (
    <div className={classes.aboutContainer}>
      <h1>About Us</h1>
      <div className={classes.imageContainer}>
        <img src="pizza.jpg" alt="Cooking" className={classes.aboutImage} />
      </div>
      <p>
        Welcome to <strong>DeliciousRecipes.com</strong> – the place where the passion for cooking meets the joy of sharing traditional and modern recipes from around the world. Our site is dedicated to food lovers, those who want to learn how to prepare delicious dishes in the comfort of their own kitchen.
      </p>

      <h2>Our Mission</h2>
      <p>
        At <strong>DeliciousRecipes.com</strong>, we aim to inspire every individual to express their creativity in the kitchen, to experiment, and to try new recipes. Whether you're a beginner or an expert, you'll find recipes here for every taste and skill level.
      </p>

      <div className={classes.imageContainer}>
        <img src="dessert.jpg" alt="Chef in Kitchen" className={classes.aboutImage} />
      </div>

      <h2>Who We Are</h2>
      <p>
        The website was created by <strong>Daniela Coroiu</strong>, a passionate cook with over 10 years of experience in the culinary industry. Daniela started sharing her recipes on her personal blog and decided to build a global community of food lovers. After studying cooking in various corners of the world, Daniela wanted to provide a platform where anyone can discover easy-to-follow recipes inspired by diverse cultures.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any suggestions, questions, or want to collaborate with us, feel free to contact us at
        <a href="mailto:contact@deliciousrecipes.com">contact@deliciousrecipes.com</a>.
      </p>
    </div>
  );
};

export default About;
