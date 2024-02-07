import { useState } from "react";
const arr = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [data, setData] = useState(arr);

  const handleDateSort = () => {
    // We are doing stable sort here
    // first sorting by views descending order
    // second by date descending order
    let sortedArr = [...data];
    sortedArr.sort((a, b) => {
      return b.views - a.views;
    });
    sortedArr.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    setData(sortedArr);
    // console.log("sorted by date");
  };

  const handleViewsSort = () => {
    // We are doing stable sort here
    // first sorting by views descending order
    // second by date descending order
    let sortedArr = [...data];
    sortedArr.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    sortedArr.sort((a, b) => {
      return b.views - a.views;
    });
    setData(sortedArr);
    // console.log("sorted by views");
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleDateSort}>Sort By Date</button>
      <button onClick={handleViewsSort}>Sort By Views</button>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.date + item.article}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
