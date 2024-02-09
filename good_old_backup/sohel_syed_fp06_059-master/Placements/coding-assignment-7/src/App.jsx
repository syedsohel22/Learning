import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch(
      `https://gist.githubusercontent.com/anishbajpai014/d482191cb4fff429333c5ec64b38c197/raw/b11f56c3177a9ddc6649288c80a004e7df41e3b9/HiringTask.json`
    )
      .then((res) => res.text())
      .then((text) => {
        const cleanedText = text.slice(1);
        const jsonData = JSON.parse(cleanedText);

        setData(jsonData.data);

        console.log(jsonData.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div>
      <div className="card-stack">
        {data.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? "active" : ""}`}
          >
            {card.name}
          </div>
        ))}
        {data.length === 0 && <div className="empty">No more cards</div>}
      </div>
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === data.length - 1}
        >
          Next
        </button>
      </div>
      <div className="indicator">
        {currentIndex + 1} / {data.length}
      </div>
    </div>
  );
}

export default App;
