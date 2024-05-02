import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { name: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // TODO: implement handleCompletedToggle
  const handleCompletedToggle = (index) => {
    // setItems();
    return
  };

  return (
    <div>
      <h1>My List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add an item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCompletedToggle(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
