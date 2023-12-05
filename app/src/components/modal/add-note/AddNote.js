import React, { useState } from 'react';

import './AddNote.scss';

import CloseIcon from '../../../assets/icons/close-line-icon.svg';

const AddNote = (props) => {
  const { setShowModal, addNote, refreshData } = props;

  const [noteName, setNoteName] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const closeModal = () => {
    setNoteName('');
    setNoteBody('');
    setShowModal(false);
  }

  return (
    <div className="AddNote">
      <div className="AddNote__container">
        <h2>Add Note</h2>
        <input type="text" placeholder="note name" value={noteName} onChange={(e) => setNoteName(e.target.value)}/>
        <textarea placeholder="note content" value={noteBody} onChange={(e) => setNoteBody(e.target.value)}/>
        <button type="button" onClick={() => addNote(noteName, noteBody, setShowModal, refreshData)}>Save</button>
        <button type="button" onClick={() => closeModal()} className="AddNote__container-close" title="close modal">
          <img src={CloseIcon} alt="close modal"/>
        </button>
      </div>
    </div>
  );
}

export default AddNote;