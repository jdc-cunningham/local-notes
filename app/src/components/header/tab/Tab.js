import './Tab.scss';
import CloseIcon from '../../../assets/icons/close-line-icon.svg';

const Tab = (props) => {
  const { name, active, setActiveNoteTab } = props;

  return (
    <div className={`Tab ${active ? 'active' : ''}`} onClick={() => setActiveNoteTab(name)}>
      <div className="Tab__name">
        {name}
      </div>
      <button type="button" className="Tab__close" onClick={() => {}}>
        <img src={CloseIcon} alt="close note"/>
      </button>
    </div>
  );
}

export default Tab;