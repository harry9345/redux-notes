import React from 'react';
import NewNote from './components/notes/NewNote';
import Notes from './components/notes/Notes';

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
