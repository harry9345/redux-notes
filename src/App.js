import { useEffect } from 'react';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';
import { initilizeNotes } from './reducers/noteReducer';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initilizeNotes());
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
