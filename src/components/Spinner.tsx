import SpinnerGIF from "../assets/img/Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerGIF}
        className=" block mx-auto mt-20"
        style={{ width: "150px" }}
      />
    </>
  );
};

export default Spinner;
