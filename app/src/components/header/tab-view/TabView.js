import './TabView.scss';
import SearchIcon from '../../../assets/icons/search-line-icon.svg';
import PlusIcon from '../../../assets/icons/plus-line-icon.svg';
import Tab from '../../header/tab/Tab';

const TabView = (props) => {
  return (
    <div className="TabView">
      <div className="TabView__tabs">
        <Tab name="Example" rename="" delete="" />
        <button type="button">
          <img src={PlusIcon} alt="add note"/>
        </button>
      </div>
      <button type="button">
        <img src={SearchIcon} alt="search notes"/>
      </button>
    </div>
  );
}

export default TabView;