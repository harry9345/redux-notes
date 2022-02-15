const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data];
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id;
      const noteTochange = state.find((n) => n.id === id);
      const changeNote = {
        ...noteTochange,
        important: !noteTochange.important,
      };
      return state.map((note) => (note.id !== id ? note : changeNote));
    }

    default:
      return state;
  }
};
const generateId = () => {
  Math.floor(Math.random() * 10000);
};
export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: true,
      id: generateId(),
    },
  };
};
export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id },
  };
};
export default noteReducer;
