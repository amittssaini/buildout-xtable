import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const handleDate = () => {
    setData([...data].sort((a, b) => new Date(a.date) - new Date(b.date)));
    // setData(
    //   [...data].sort((a, b) => {
    //     const [aYear, aMonth, aDay] = a.date.split("-");
    //     const [bYear, bMonth, bDay] = b.date.split("-");

    //     const aDateValue = Number(aYear + aMonth + aDay);
    //     const bDateValue = Number(bYear + bMonth + bDay);

    //     return aDateValue - bDateValue;
    //   })
    // );
  };

  const handleViews = () => {
    setData([...data].sort((a, b) => a.views - b.views));
  };
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={() => handleDate()}>Sort By Date</button>
        <button onClick={() => handleViews()}>Sort By Views</button>
      </div>
      <table>
        <thead>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </thead>
        {data.map((item) => (
          <tbody>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;