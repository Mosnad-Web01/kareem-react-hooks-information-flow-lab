import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === 'all') {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;