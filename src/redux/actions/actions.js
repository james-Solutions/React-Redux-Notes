export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export function addNote(title, content, key) {
  return { type: ADD_NOTE, title: title, content: content, key: key };
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}