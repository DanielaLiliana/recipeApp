import React from "react";
import styles from "./recipeCard.module.scss";

interface RecipeCardProps {
  image: string;
  title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};

export default RecipeCard;
