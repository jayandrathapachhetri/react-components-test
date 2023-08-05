import React, { useState, useEffect } from "react";

function AttadanceList({ id, name, present_day, absent_day }) {
  const [pcount, setPCount] = useState(0);
  const [acount, setACount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/internAttadance/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPCount(isNaN(data.present_day) ? 0 : data.present_day);
        setACount(isNaN(data.absent_day) ? 0 : data.absent_day);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/internAttadance/${id}`, {
      method: "PATCH", // Use PATCH instead of PUT to update only specific fields
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ present_day: pcount, absent_day : acount }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the count with the newly saved value
        setPCount(data.present_day);
        setACount(data.absent_day)
        alert("Saved successfully.");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{pcount}</td>
      <td>{acount}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary mx-1"
          onClick={() => setPCount(pcount + 1)}
        >
          Present
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary mx-1"
          onClick={() => setACount(acount + 1)}
        >
          Absent
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary mx-1"
          onClick={handleSave}
        >
          Save
        </button>
      </td>
    </>
  );
}

export default AttadanceList;
