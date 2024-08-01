import "./SpeakExplanation.css";

const SpeakExplanation = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((saying, index) => (
        <div className="d-flex align-items-center m-3">
          <div
            key={index}
            className="leaf-container d-flex"
          >
            <img src="/image/leaf.png" alt="잎" className="leaf-image" />
            <span className="leaf-text">{saying.word}</span>
          </div>
          <div className="m-2">
          <p>{saying.pronounceMethod}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakExplanation;