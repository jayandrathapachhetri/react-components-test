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
      <div className="container text-center ">
        <h2 className='my-3'>Intern Attendance</h2> 
        <table className="table table-bordered table-striped">
          <thead className='table-dark'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Present Day</th>
              <th scope="col">Absent Day</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {internAttadance.map((intern) => (
              <tr key={intern.id}>
                <AttadanceList
                  id={intern.id}
                  name={intern.name}
                  present={intern.present_day}
                  absent={intern.absent_day}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Attadance;
