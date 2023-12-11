import Buttons from "../../Buttons/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <h6>Recommended</h6>
      <div>
        <Buttons
          name="btnSmall"
          onClickHandler={handleClick}
          value=""
          title="All"
        />
        <Buttons
          name="btnSmall"
          onClickHandler={handleClick}
          value="Nike"
          title="Nike"
        />
        <Buttons
          name="btnSmall"
          onClickHandler={handleClick}
          value="Converse"
          title="Converse"
        />
        <Buttons
          name="btnSmall"
          onClickHandler={handleClick}
          value="Puma"
          title="Puma"
        />
        <Buttons
          name="btnSmall"
          onClickHandler={handleClick}
          value="ASOS DESIGN"
          title="ASOS"
        />
      </div>
    </>
  );
};

export default Recommended;
