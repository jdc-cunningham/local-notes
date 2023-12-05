import './TabView.scss';
import SearchIcon from '../../../assets/icons/search-line-icon.svg';
import PlusIcon from '../../../assets/icons/plus-line-icon.svg';
import Tab from '../../header/tab/Tab';

const renderNoteTabs = (noteData) => (
  noteData.map((note, index) => (
    <Tab key={index} name={note.name} noteKey={note.key}/>
  ))
)

const TabView = (props) => {
  const { setShowModal, noteData } = props;

  return (
    <div className="TabView">
      <div className="TabView__tabs">
        {renderNoteTabs(noteData)}
        <button type="button" className="TabView__add" onClick={() => setShowModal(true)}>
          <img src={PlusIcon} alt="add note"/>
        </button>
      </div>
      <button type="button" className="TabView__search">
        <img src={SearchIcon} alt="search notes"/>
      </button>
    </div>
  );
}

export default TabView;