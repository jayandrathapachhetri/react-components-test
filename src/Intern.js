// // import logo from './logo.svg';
// // import './App.css';
// import './style.css';
// import Info from "./Info";

// function Intern() {
//   return (
//     <div className="Container">
//       <h1 className="heading">Hello CodeSandbox</h1>

//       <div className="Container-box">
//         <div className="box">
//           {Info &&
//             Info.map((item) => (
//               <div key={item.id}>
//                 <img src={item.image} alt="" />
//                 <h3>Name : {item.name} </h3>
//                 <h3>Email: {item.email}</h3>
//                 <h3>Phone Number: {item.phone_no}</h3>
//                 <h3>Role: {item.position}</h3>
//                 <h3>Start of Date: {item.dateofstart}</h3>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Intern;

// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
// import './style.css';
// import Info from "./Info";

// function Intern() {
//   const[info, setInfo] = useState(Menu);
//   return (
//     <>
//     <h1 className=" mt-5 text-center main-heading">Intern Details</h1>
//     <hr />

//     <div className='menu-tabs container'>
//       <div className='menu-tab d-flex justify-content-around'>
//         <button className='btn btn-warning'>Frontend</button>
//         <button className='btn btn-warning'>Backend</button>
//         <button className='btn btn-warning'>QA</button>
//         <button className='btn btn-warning'>Flutter</button>
//         <button className='btn btn-warning'>All</button>

//       </div>
//     </div>

  
//     <div className="menu-items container-fluid mt-5">
//       <div className="row">
//         <div className="col-11 mx-auto">
//             <div className='row my-5'>

//                {
//                Info.map((items) => {
//                const{id, image, name, email, phone_no, position, dateofstart} = items;
             
//                 return(
//                   <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4' my-5>
//                      <div className='row Item-inside'>
//                        <div className='col-12 col-md-12 col-lg-4 img-div'>
//                         <img src="{image}" alt="name" className='img-fluid'/>
//                       </div>
//                         <div className='col-12 col-md-12 col-lg-8'>
//                           <div className='main-title pt-4 pb-3'>
//                           <h3>Name : {name} </h3>
//                         <h3>Email: {email}</h3>
//                        <h3>Phone Number:{phone_no} </h3>
//                        <h3>Role: {position} </h3>
//                       <h3>Start of Date: {dateofstart} </h3>
//                           </div>
//                         </div>
//                   </div>
//               </div>
//                 )
//               }

//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Intern;

import React, { useState } from 'react';
import './style.css';
import Info from './Info';

function Intern() {
  const [items, setItems] = useState(Info);

  const filterItem = (roleItem) => {
    const updatedItems = Info.filter((curElem)=>{
      return curElem.position === roleItem;
    });
    setItems(updatedItems);
  }

  return (
    <>
        <div className="container">
  <h1>Intern Details</h1>
  <hr />
  <div className="menu-tabs  ">
    <button className="btn" onClick={()=>filterItem('Frontend')}>Frontend</button>
    <button className="btn" onClick={()=>filterItem('Backend')}>Backend</button>
    <button className="btn" onClick={()=>filterItem('QA')}>QA</button>
    <button className="btn" onClick={()=>filterItem('Flutter')}>Flutter</button>
    <button className="btn" onClick={()=>setItems(Info)}>All</button>
  </div>
  <div className="box-container">
    {
        items.map((elem) => {
        const{image, name, email, college, phone_no, position, dateofstart} = elem;
        
        return(
    //       <div className="box">
    //   <img src={image} alt={name} />
    //   <ul className="Info">
    //     <li>Name: {name}</li>
    //     <li>Email: {email}</li>
    //     <li>Phone: {phone_no}</li>
    //     <li>College: {college}</li>
    //     <li>Role: {position}</li>
    //     <li>Joining Date: {dateofstart}</li>
    //     <li>Leaving Date: {dateofstart}</li>
    //   </ul>
    // </div>
    <div my-3>
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} height="100px" width="100px" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{position}...</h5>
        <p className="card-text">
        {position}
        </p>
        <a className="btn btn-sm btn-primary">
          Read More
        </a>
      </div>
    </div>
  </div>

  
        )
      })
    }
  </div>
</div>

    </>
  );
}

export default Intern;






