import "./styles.css";

const SeviceButtons = ({ image, title }) => {
  return (
    <button className="sevice-btn">
      <span className="sevice-btn__img">
        <img src={image} />
      </span>
      <span className="sevice-btn__title">{title}</span>
    </button>
  );
};

export default SeviceButtons;
