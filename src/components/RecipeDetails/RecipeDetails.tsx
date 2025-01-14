import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RecipeDetails.module.scss";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface Comment {
  text: string;
  rating: number;
}

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(0);

  useEffect(() => {
    // Fetch recipe details
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const data: Recipe = await response.json();
        setRecipe(data);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeDetails();

    // Load comments from Local Storage
    const savedComments = localStorage.getItem(`comments_${id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && newRating > 0) {
      const updatedComments = [...comments, { text: newComment, rating: newRating }];
      setComments(updatedComments);
      setNewComment("");
      setNewRating(0);

      // Save updated comments to Local Storage
      localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
    }
  };

  const calculateAverageRating = () => {
    if (comments.length === 0) return 0;
    const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
    return (totalRating / comments.length).toFixed(1);
  };

  if (isLoading) return <div>Loading recipe details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Recipe not found!</div>;

  return (
    <div className={styles.recipeDetails}>
      <h1 className={styles.title}>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className={styles.image} />
      <div className={styles.info}>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
        <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
      </div>
      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol className={styles.instructions}>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>

      {/* Section for comments */}
      <div className={styles.commentsSection}>
        <h2>
          Comments
          <span className={styles.averageRating}>
            (Average Rating: {calculateAverageRating()} ★)
          </span>
        </h2>
        <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className={styles.textarea}
            required
          />
          <div className={styles.starRating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={newRating >= star ? styles.filledStar : styles.emptyStar}
                onClick={() => setNewRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <ul className={styles.commentsList}>
          {comments.map((comment, index) => (
            <li key={index} className={styles.comment}>
              <p>{comment.text}</p>
              <span className={styles.commentRating}>Rating: {comment.rating} ★</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
