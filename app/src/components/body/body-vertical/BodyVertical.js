import './BodyVertical.scss';
import DeleteIcon from '../../../assets/icons/recycle-bin-line-icon.svg';

const renderNoteBodies = (noteData, updateNote, refreshData, activeNoteTab) => (
  noteData.map((note, index) => (
    <div key={index} className={`BodyVertical__note ${note.name === activeNoteTab ? 'active' : ''}`}>
      <textarea value={note.body} onChange={(e) => updateNote(note.key, e.target.value, refreshData)}/>
      <button type="button" className="BodyVertical__note-delete" title="delete note">
        <img src={DeleteIcon} alt="delete note"/>
      </button>
    </div>
  ))
)

const BodyVertical = (props) => {
  const { noteData, updateNote, refreshData, activeNoteTab } = props;

  return (
    <div className="BodyVertical">
      {renderNoteBodies(noteData, updateNote, refreshData, activeNoteTab)}
    </div>
  );
}

export default BodyVertical;