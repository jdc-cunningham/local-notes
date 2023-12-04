import './BodyVertical.scss';
import DeleteIcon from '../../../assets/icons/recycle-bin-line-icon.svg';

const BodyVertical = (props) => {
  return (
    <div className="BodyVertical">
      <div className="BodyVertical__note">
        <textarea/>
        <button type="button" className="BodyVertical__note-delete" title="delete note">
          <img src={DeleteIcon} alt="delet note"/>
        </button>
      </div>
    </div>
  );
}

export default BodyVertical;