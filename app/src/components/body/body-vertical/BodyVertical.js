import './BodyVertical.scss';
import DeleteIcon from '../../../assets/icons/recycle-bin-line-icon.svg';

const renderNoteBodies = (noteData, updateNote, refreshData) => (
  noteData.map((note, index) => (
    <div key={index} className="BodyVertical__note">
      <textarea value={note.body} onChange={(e) => updateNote(note.key, e.target.value, refreshData)}/>
      <button type="button" className="BodyVertical__note-delete" title="delete note">
        <img src={DeleteIcon} alt="delete note"/>
      </button>
    </div>
  ))
)

const BodyVertical = (props) => {
  const { noteData, updateNote, refreshData } = props;

  return (
    <div className="BodyVertical">
      {renderNoteBodies(noteData, updateNote, refreshData)}
    </div>
  );
}

export default BodyVertical;