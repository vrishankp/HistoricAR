import Webcam from "react-webcam";

const Camera = () => {
  return (
    <div className="container">
      <Webcam height={600} width={600} />
    </div>
  );
};

export default Camera;