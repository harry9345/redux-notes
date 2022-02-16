import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? 'important' : 'Not Important'}</strong>
    </li>
  );
};

const Notes = () => {
  const dispatch = useDispatch();

  const notes = useSelector(({ filter, notes }) => {
    console.log('filter in note:', filter);
    if (filter === 'ALL') {
      console.log('notes in note:', notes);

      return notes;
    }
    console.log('notes not all:', notes);
    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;
