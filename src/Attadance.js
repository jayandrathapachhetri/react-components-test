import React, { useState, useEffect } from 'react';
import AttadanceList from './AttadanceList';



function Attadance() {
  const [internAttadance, setinternAttadance] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        let url = "http://localhost:3000/internAttadance";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setinternAttadance(data);
      } catch (error) {
        console.error("Error fetching data:", error); 
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
      <div className="container my-3">
          {/* <div className="row"> */}
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Attadance</th>
              </tr>
          </thead>
        </table>
            {internAttadance.map((intern) => {
              return (
                <div className="col-md-4" key={intern.id}>
                  <AttadanceList
                    id={intern.id}
                    name={intern.name}
                    present={intern.present}
                    // category={intern.category}
                    // description={intern.description}
                    // status1={intern.status.present}
                    // status2={intern.status.abesnt}
                  />
                </div>
              );
            })}
          </div>
      {/* </div> */}
    </>
  );
}

export default Attadance;
