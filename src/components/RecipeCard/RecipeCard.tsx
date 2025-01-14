import React from "react";

interface RecipeCardProps {
  image: string;
  title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, title }) => {
  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3 style={{ padding: "10px", fontSize: "16px" }}>{title}</h3>
    </div>
  );
};

export default RecipeCard;
