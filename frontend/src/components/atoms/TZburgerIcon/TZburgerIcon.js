import "./TZburgerIcon.css";
const TZburgerIcon = ({ HandleOnClick }) => {
  const HandleClick = (e) => {
    console.log("Burger Icon Clicked");
    HandleOnClick();
  };
  return (
    <div>
      <label class='bar' for='check'>
        <input
          type='checkbox'
          id='check'
          onClick={(e) => HandleClick(e)}></input>

        <span class='top'></span>
        <span class='middle'></span>
        <span class='bottom'></span>
      </label>
    </div>
  );
};

export default TZburgerIcon;
