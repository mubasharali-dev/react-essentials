import "../styles/index.css";

const Shimmer = () => {
  return (
    <div className="res-section">
      {Array(16)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
