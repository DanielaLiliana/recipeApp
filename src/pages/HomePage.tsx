import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Footer from '../components/Footer/Footer';
import AllRecipes from '../components/AllRecipes/AllRecipes'; // Importăm componenta AllRecipes
import '../App.css';

const HomePage: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string>(''); // Starea pentru dificultate
  const [cuisine, setCuisine] = useState<string>(''); // Starea pentru tipul de bucătărie

  const handleDifficultyChange = (newDifficulty: string) => {
    if (difficulty === newDifficulty) {
      setDifficulty(''); // Deselectăm dificultatea
    } else {
      setDifficulty(newDifficulty); // Setăm noua dificultate
      setCuisine(''); // Resetăm filtrul de bucătărie
    }
  };

  const handleCuisineChange = (newCuisine: string) => {
    if (cuisine === newCuisine) {
      setCuisine(''); // Deselectăm bucătăria
    } else {
      setCuisine(newCuisine); // Setăm noua bucătărie
      setDifficulty(''); // Resetăm filtrul de dificultate
    }
  };

  return (
    <div>
      <Header />
      <h1>Simple Home-Cooked Meals for Every Day</h1>
      {/* Componentele pentru selecția filtrelor */}
      <ImageGallery 
        onDifficultyChange={handleDifficultyChange} 
        onCuisineChange={handleCuisineChange} 
      />

      {/* Componenta care afișează rețetele pe baza filtrelor */}
      <AllRecipes difficulty={difficulty} cuisine={cuisine} />

      <Footer />
    </div>
  );
};

export default HomePage;
