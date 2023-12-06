import { getKeySafeStr } from './utils';

// uses localStorage
// there are three things:
// noteName, noteNameKey -> noteBody, noteBody
export const addNote = (name, body, setShowModal, refreshData) => {
  const localNoteTabs = JSON.parse(localStorage.getItem('local-notes-tabs')) ?? [];
  
  // basic exists check
  if (localNoteTabs.includes(name)) {
    alert('Note exists!');
    return;
  } else {
    localNoteTabs.push(name);
    localStorage.setItem('local-notes-tabs', JSON.stringify(localNoteTabs));

    const localNotesKeyMap = JSON.parse(localStorage.getItem('local-notes-key-map')) ?? {};
    const noteNameKey = getKeySafeStr(name);
    
    localNotesKeyMap[name] = noteNameKey;
    localStorage.setItem('local-notes-key-map', JSON.stringify(localNotesKeyMap));
    localStorage.setItem(noteNameKey, JSON.stringify(body)); // not checking for possibility of collisions (existing keys, but safe within domain context I suppose)

    setShowModal(false);
    refreshData();
  }
}

// return array of objects
export const getNotes = () => {
  const noteTabs = JSON.parse(localStorage.getItem('local-notes-tabs')) ?? []; // repeating pattern could make a util
  const noteNameDataKeyMap = JSON.parse(localStorage.getItem('local-notes-key-map')) ?? {};

  const noteData = [];

  if (noteTabs.length) {
    noteTabs.forEach(noteName => {
      const noteNameKey = getKeySafeStr(noteName); // duplicate compute

      if (noteNameKey in noteNameDataKeyMap) {
        noteData.push({
          name: noteName,
          key: noteNameKey,
          body: JSON.parse(localStorage.getItem(noteNameKey)) ?? '',
        });
      }
    });
  }

  // first run data
  if (!noteData.length) {
    return [{
      name: 'Example',
      key: 'example',
      data: 'sample body'
    }]; // this entry is not in localStorage
  }

  return noteData;
}

export const updateNote = (noteKey, noteData, refreshData) => {
  // lazy
  try {
    localStorage.setItem(noteKey, JSON.stringify(noteData));
    refreshData();
  } catch (error) {
    alert('Failed to update note');
    console.error(error);
  }
}

export const deleteNote = (deleteNoteName, refreshData) => {
  if (window.confirm(`Delete note: ${deleteNoteName}?`)) {
    try {
      const deleteNoteKey = getKeySafeStr(deleteNoteName);
      const noteTabs = JSON.parse(localStorage.getItem('local-notes-tabs')) ?? [];
      const noteNameDataKeyMap = JSON.parse(localStorage.getItem('local-notes-key-map')) ?? {};
  
      const updatedNoteTabs = noteTabs.filter(noteName => noteName !== deleteNoteName);
      delete noteNameDataKeyMap[deleteNoteKey];
  
      localStorage.setItem('local-note-tabs', JSON.stringify(updatedNoteTabs));
      localStorage.setItem('local-notes-key-map', JSON.stringify(noteNameDataKeyMap));
      localStorage.removeItem(deleteNoteKey);
      refreshData();
    } catch (error) {
      alert('Failed to delete note.');
      console.error(error);
    }
  }
}