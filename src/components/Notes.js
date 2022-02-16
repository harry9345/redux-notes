// import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? 'important' : 'Not Important'}</strong>
    </li>
  );
};

const Notes = (props) => {
  // const dispatch = useDispatch();

  console.log('props : ', props);
  // const notes = useSelector(({ filter, notes }) => {
  //   console.log('filter in note:', filter);
  //   if (filter === 'ALL') {
  //     console.log('notes in note:', notes);

  //     return notes
  //   }
  //   console.log('notes not all:', notes);
  //   return filter === 'IMPORTANT'
  //     ? notes.filter((note) => note.important)
  //     : notes.filter((note) => !note.important)
  // });
  return (
    <ul>
      {props.notes.map((note) => (
        /* redux connect */
        // {notesToShow().map((note) => (
        <Note
          key={note.id}
          note={note}
          // handleClick={() => dispatch(toggleImportanceOf(note.id))}
          handleClick={() => props.toggleImportanceOf(note.id)}
        />
      ))}
    </ul>
  );
};

// export default Notes;

// redux connect
const mapStateToProps = (state) => {
  if (state.filter === 'ALL') {
    console.log('notes in notes:', state.notes);
    return {
      notes: state.notes,
    };
  }
  console.log('filter in note:', state.filter);
  return {
    notes:
      state.filter === 'IMPORTANT'
        ? state.notes.filter((note) => note.important)
        : state.notes.filter((note) => !note.important),
  };
};

const mapDispatchToProps = {
  toggleImportanceOf,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
