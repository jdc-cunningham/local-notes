import './TabView.scss';
import SearchIcon from '../../../assets/icons/search-line-icon.svg';
import PlusIcon from '../../../assets/icons/plus-line-icon.svg';
import Tab from '../../header/tab/Tab';

const renderNoteTabs = (noteData, activeNoteTab, setActiveNoteTab, deleteNote, refreshData) => (
  noteData.map((note, index) => (
    <Tab
      key={index}
      name={note.name}
      noteKey={note.key}
      active={note.name === activeNoteTab}
      setActiveNoteTab={setActiveNoteTab}
      deleteNote={deleteNote}
      refreshData={refreshData}
    />
  ))
)

const TabView = (props) => {
  const { setShowModal, noteData, activeNoteTab, setActiveNoteTab, deleteNote, refreshData } = props;

  return (
    <div className="TabView">
      <div className="TabView__tabs">
        {renderNoteTabs(noteData, activeNoteTab, setActiveNoteTab, deleteNote, refreshData)}
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