import React from 'react';

function SavedPalettes({ palettes, setPalettes }) {
  const deletePalette = (index) => {
    const updatedPalettes = palettes.filter((_, i) => i !== index);
    setPalettes(updatedPalettes);
    localStorage.setItem('palettes', JSON.stringify(updatedPalettes));
  };

  return (
    <div className='saved-palettes'>
      <h2>Saved Palettes</h2>
      {palettes.map((palette, index) => (
        <div key={index} className="saved-palette">
          <h3>{palette.name}</h3>
          <div className="palette">
            {palette.colors.map((color, idx) => (
              <div key={idx} className="color-block" style={{ backgroundColor: color }}>
                {color}
              </div>
            ))}
          </div>
          <button onClick={() => deletePalette(index)} className='delete-button'>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default SavedPalettes;
