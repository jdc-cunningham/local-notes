import './BodyVertical.scss';
import DeleteIcon from '../../../assets/icons/recycle-bin-line-icon.svg';

const renderNoteBodies = (noteData, updateNote, refreshData, activeNoteTab, gridView, deleteNote) => (
  noteData.map((note, index) => (
    <div key={index} className={`BodyVertical__note ${(note.name === activeNoteTab || gridView) ? 'active' : ''}`} title={note.name}>
      <textarea value={note.data} onChange={(e) => updateNote(note.key, e.target.value, refreshData)}/>
      <button type="button" className="BodyVertical__note-delete" title="delete note" onClick={() => deleteNote(note.name, refreshData)}>
        <img src={DeleteIcon} alt="delete note"/>
      </button>
    </div>
  ))
)

const BodyVertical = (props) => {
  const { noteData, updateNote, refreshData, activeNoteTab, gridView, deleteNote } = props;

  return (
    <div className={`BodyVertical ${gridView ? 'grid' : ''}`}>
      {renderNoteBodies(noteData, updateNote, refreshData, activeNoteTab, gridView, deleteNote)}
    </div>
  );
}

export default BodyVertical;