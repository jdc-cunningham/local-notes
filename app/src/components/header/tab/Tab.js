import './Tab.scss';
import CloseIcon from '../../../assets/icons/close-line-icon.svg';

const Tab = (props) => {
  const { name } = props;

  return (
    <div className="Tab">
      <div className="Tab__name">
        {name}
      </div>
      <button type="button" className="Tab__close">
        <img src={CloseIcon} alt="close note"/>
      </button>
    </div>
  );
}

export default Tab;