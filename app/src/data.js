import { keySafeStr } from './utils';

// uses localStorage
// there are three things:
// noteName, noteNameKey -> noteBody, noteBody
export const addNote = (name, body, callBack) => {
  const localNoteTabs = JSON.parse(localStorage.getItem('local-notes-tabs')) ?? [];
  
  // basic exists check
  if (localNoteTabs.includes(name)) {
    alert('Note exists!');
    return;
  } else {
    localNoteTabs.push(name);
    localStorage.setItem('local-notes-tabs', JSON.stringify(localNoteTabs));

    const localNotesKeyMap = JSON.parse(localStorage.getItem('local-notes-key-map')) ?? {};
    const noteNameKey = keySafeStr(name);
    
    localNotesKeyMap[name] = noteNameKey;
    localStorage.setItem('local-notes-key-map', JSON.stringify(localNotesKeyMap));
    localStorage.setItem(noteNameKey, JSON.stringify(body)); // not checking for possibility of collisions (existing keys, but safe within domain context I suppose)

    callBack();
  }
}