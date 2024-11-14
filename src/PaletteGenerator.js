import React, { useState } from 'react';

const generateRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

function PaletteGenerator({ onSave }) {
  const [palette, setPalette] = useState(Array(5).fill(generateRandomColor()));

  const generatePalette = () => {
    setPalette(palette.map((color) => generateRandomColor()));
  };

  const handleSave = () => {
    onSave({ name: 'Palette ' + (Math.random() * 1000).toFixed(0), colors: palette });
  };

  return (
    <div className='color-palette'>
      <button onClick={generatePalette} className='generate-palette'>Generate Palette</button>
      <div className="palette">
        {palette.map((color, index) => (
          <div key={index} className="color-block" style={{ backgroundColor: color }}>
            {color}
          </div>
        ))}
      </div>
      <button onClick={handleSave} className='save-palette'>Save Palette</button>
    </div>
  );
}

export default PaletteGenerator;
