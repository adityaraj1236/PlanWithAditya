import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh bg-black text-blue-300">
          <h2>No Tours Left</h2>
          <button className="btn-white rounded-xl" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App bg-black text-blue-200">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
