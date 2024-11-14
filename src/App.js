import React, { useState } from 'react';
import PaletteGenerator from './PaletteGenerator';
import SavedPalettes from './SavedPalettes';
import './styles.css';

function App() {
  const [savedPalettes, setSavedPalettes] = useState(
    JSON.parse(localStorage.getItem('palettes')) || []
  );

  const savePalette = (palette) => {
    const updatedPalettes = [...savedPalettes, palette];
    setSavedPalettes(updatedPalettes);
    localStorage.setItem('palettes', JSON.stringify(updatedPalettes));
  };

  return (
    <div className="App">
      <h1>Color Palette Generator</h1>
      <PaletteGenerator onSave={savePalette} />
      <SavedPalettes palettes={savedPalettes} setPalettes={setSavedPalettes} />
    </div>
  );
}

export default App;
