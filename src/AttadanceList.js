// // import React, { useState } from "react";
// // // import AttadanceInfo from './AttadanceInfo'
 
// // function AttadanceList({ id, name, status}) {
// //   const [count, setCount] =useState(0);

// //   const handleSave = () => {
// //     // Save the count value to localStorage
// //     localStorage.setItem("count", count);
// //     console.log("Count value saved:", count);
// //   };


  

// //   // const handleIncrement = () => {
// //   //   setCount(count + 1);
// //   // };

  
// //   return (
    
// //     <>
// //     {/* <AttadanceInfo count1={count} name1={name} /> */}
// //       <div className="container ">
// //         <table className="table">
// //           <thead>
// //             <tr>
// //               <th scope="col">{id}</th>
// //               <th scope="col">{name}</th>
// //               <th scope="col">{count}</th>
// //               <br />
// //         <button type="button" class="btn btn-sm btn-primary" onClick={() => setCount(count + 1)}>Present</button>
// //         <button type="button" class="btn btn-sm btn-primary" onClick={() => setCount(count)}>Absent</button>
// //         <button type="button" class="btn btn-sm btn-primary" onClick={handleSave}>Save</button>
// //             </tr>
// //           </thead>
// //         </table>
// //         </div>
// //     </>
// //   );
// // }

// // export default AttadanceList;


// import React, { useState } from "react";

// function AttadanceList({ id, name }) {
//   const [count, setCount] = useState(0);

//   const handleSave = () => {
//     // Get the existing data from localStorage
//     const existingData = JSON.parse(localStorage.getItem("attadanceData")) || {};

//     // Update the existing data with the current intern's count
//     const updatedData = {
//       ...existingData,
//       [id]: {
//         id: id,
//         name: name,
//         count: count,
//       },
//     };

//     // Save the updated data back to localStorage
//     localStorage.setItem("attadanceData", JSON.stringify(updatedData));
//     console.log("Data saved for intern:", id, updatedData);
//   };

//   return (
//     <>
//       <div className="container ">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">{id}</th>
//               <th scope="col">{name}</th>
//               <th scope="col">{count}</th>
//               <br />
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={() => setCount(count + 1)}
//               >
//                 Present
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={() => setCount(count)}
//               >
//                 Absent
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//             </tr>
//           </thead>
//         </table>
//       </div>
//     </>
//   );
// }

// export default AttadanceList;
// import React, { useState } from "react";
// // import AttadanceInfo from './AttadanceInfo'
 
// function AttadanceList({ id, name, status}) {
//   const [count, setCount] =useState(0);

//   const handleSave = () => {
//     // Save the count value to localStorage
//     localStorage.setItem("count", count);
//     console.log("Count value saved:", count);
//   };


  

//   // const handleIncrement = () => {
//   //   setCount(count + 1);
//   // };

  
//   return (
    
//     <>
//     {/* <AttadanceInfo count1={count} name1={name} /> */}
//       <div className="container ">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">{id}</th>
//               <th scope="col">{name}</th>
//               <th scope="col">{count}</th>
//               <br />
//         <button type="button" class="btn btn-sm btn-primary" onClick={() => setCount(count + 1)}>Present</button>
//         <button type="button" class="btn btn-sm btn-primary" onClick={() => setCount(count)}>Absent</button>
//         <button type="button" class="btn btn-sm btn-primary" onClick={handleSave}>Save</button>
//             </tr>
//           </thead>
//         </table>
//         </div>
//     </>
//   );
// }

// export default AttadanceList;


// import React, { useState, useEffect } from "react";

// function AttadanceList({ id, name, present }) {
//   const [count, setCount] = useState(present);

//   useEffect(() => {
//     fetch("http://localhost:3000/internAttadance")
//       .then((response) => response.json())
//       .then((data) => {
//         setCount(isNaN(data.present) ? 0 : data.present);
//       })
//       .catch((error) => console.log(error));
//   }, []);

  // const handleSave = (e) => {
  //   e.preventDefault();

  //   const updatedCount = count;

  //   fetch(`http://localhost:3000/internAttadance/${id} ${name}`, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ id, name, present: updatedCount }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCount(data.present);
  //       alert("Saved successfully.");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  // const handleSave = (e) => {
  //   e.preventDefault();
  
  //   fetch(`http://localhost:3000/internAttadance/${id}`, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ present: count }),
  //   })
  //     .then((res) => {
  //       alert("Saved successfully.");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  
//   const handleSave = (e) => {
//     e.preventDefault();
  
//     fetch(`http://localhost:3000/internAttadance/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         // Preserve the existing data for the intern
//         const updatedData = {
//           ...data,
//           present: count,
//         };
  
//         // Send a PUT request with the updated data
//         fetch(`http://localhost:3000/internAttadance/${id}`, {
//           method: "PUT",
//           headers: { "content-type": "application/json" },
//           body: JSON.stringify(updatedData),
//         })
//           .then((res) => {
//             alert("Saved successfully.");
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
//       })
//       .catch((error) => console.log(error));
//   };
  

//   return (
//     <>
//       <div className="container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">{id}</th>
//               <th scope="col">{name}</th>
//               <th scope="col">{count}</th>
//               <br />
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={() => setCount(count + 1)}
//               >
//                 Present
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={() => setCount(count)}
//               >
//                 Absent
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//             </tr>
//           </thead>
//         </table>
//       </div>
//     </>
//   );
// }

// export default AttadanceList;

// import React, { useState, useEffect } from "react";

// function AttadanceList({ id, name, present }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch(`http://localhost:3000/internAttadance/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         // Set the count to the initial present value from the JSON file
//         setCount(isNaN(data.present) ? 0 : data.present);
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   const handleSave = (e) => {
//     e.preventDefault();

//     fetch(`http://localhost:3000/internAttadance/${id}`, {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({ present: count }),
//     })
//       .then((res) => {
//         alert("Saved successfully.");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   return (
//     <>
//       <div className="container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">{id}</th>
//               <th scope="col">{name}</th>
//               <th scope="col">{count}</th>
//               <br />
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={() => setCount(count + 1)}
//               >
//                 Present
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={() => setCount(count - 1)}
//               >
//                 Absent
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-sm btn-primary"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//             </tr>
//           </thead>
//         </table>
//       </div>
//     </>
//   );
// }

// export default AttadanceList;
import React, { useState, useEffect } from "react";

function AttadanceList({ id, name, present }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/internAttadance/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCount(isNaN(data.present) ? 0 : data.present);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/internAttadance/${id}`, {
      method: "PATCH", // Use PATCH instead of PUT to update only specific fields
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ present: count }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the count with the newly saved value
        setCount(data.present);
        alert("Saved successfully.");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{id}</th>
              <th scope="col">{name}</th>
              <th scope="col">{count}</th>
              <br />
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => setCount(count + 1)}
              >
                Present
              </button>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => setCount(count - 1)}
              >
                Absent
              </button>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={handleSave}
              >
                Save
              </button>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default AttadanceList;
