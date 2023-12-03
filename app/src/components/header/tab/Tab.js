import './Tab.scss';
import CloseIcon from '../../../assets/icons/close-line-icon.svg';

const Tab = (props) => {
  const { name } = props;

  return (
    <div className="Tab">
      <div clasName="Tab__name">
        {name}
      </div>
      <button type="button">
        <img src={CloseIcon} alt="delete note"/>
      </button>
    </div>
  );
}

export default Tab;