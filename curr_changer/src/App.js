import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return <div className="App"></div>;
}

export default App;
