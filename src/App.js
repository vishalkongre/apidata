import React, { useState, useEffect } from 'react';
import Card from './component/Card';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState('1');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestApi = `https://reqres.in/api/users?page=${page}`;
        const result = await fetch(requestApi);
        const resultJson = await result.json();
        // console.log(resultJson.data);
        setData(resultJson.data);
        // console.log(data);
      } catch (error) {}
    };
    fetchData();
  }, [page]);
  console.log(data);
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4">Api Data</h1>
          </div>
          <div className="row bg-white m-4 ">
            {data.map((item) => {
              return (
                <div className="col">
                  <Card
                    first_name={item.first_name}
                    last_name={item.last_name}
                    img={item.avatar}
                    email={item.email}
                  />
                </div>
              );

              // console.log(data);
            })}
            {/* <Card props={data} /> */}
            {/* {data.map((item) => (
              <h5>{item.email}</h5>
            ))} */}
            {/* <Card /> */}
          </div>
          <div className="d-flex flex-row-reverse">
            <nav aria-label="Page navigation ">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" onClick={() => setPage('1')}>
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" onClick={() => setPage('2')}>
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" onClick={() => setPage('3')}>
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
