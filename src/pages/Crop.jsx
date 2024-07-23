import { useEffect, useState } from 'react';
import API_BASE_URL from '../config';
import "../styles/crop.css";


function Crop() {
  const [crops, setCrops] = useState([]);
  
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}crops`);
        const data = await response.json();
        setCrops(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCrops();
  }, []);

  return (
    <>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name ID</th>
      <th>Crop Type</th>
    </tr>
  </thead>
  <tbody>
    {crops.map((crop, index) => (
            <tr key={crop.id}>
              {/* <td>{index + 1}</td/> */}
              <td>{crop.id}</td>
              <td>{crop.name}</td>
              <td>{crop.crop_type.name}</td>
             
             
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Crop;

// import React, { useState, useEffect } from 'react';
// import API_BASE_URL from '../config';
// import DropDownactive from '../components/drowp';

// function useCrops() {
//   const [crops, setCrops] = useState([]);

//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}crops`);
//         const data = await response.json();
//         setCrops(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCrops();
//   }, []);

//   return crops;
// }

// function Crop() {
//   const [statusFilter, setStatusFilter] = useState('All');
//   const crops = useCrops();

//   const handleFilterChange = (event) => {
//     setStatusFilter(event.target.value);
//   };

//   const filteredCrops = statusFilter === 'All'
//     ? crops
//     : crops.filter(crop => crop.status.toLowerCase() === statusFilter.toLowerCase());

// //   return (
// //     <>
// //       <div className="dropactive">
// //         <DropDownactive onChange={handleFilterChange} />
// //       </div>

// //       <table>
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Size</th>
// //             <th>Latitude</th>
          
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredCrops.map((crop, index) => (
// //             <tr key={crop.id}>
// //               <td>{crop.id}</td>
// //               <td>{crop.name}</td>
// //               <td>{crop.crop_type.name}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </>
// //   );
// // }

// // export default Crop;
// import React, { useState, useEffect } from "react";
// import { getCrop, getCroptypes } from "../api/province";

// const Dropdown = () => {
//   const [crops, setCrops] = useState([]);
//   const [croptypes, setCroptypes] = useState([]);
//   const [selectedCrop, setSelectedCrop] = useState("");

//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const cropsData = await getCrop();
//         console.log("crops fetched: ", cropsData);
//         setCrops(cropsData);
//       } catch (error) {
//         console.error("Error fetching crops:", error);
//       }
//     };

//     fetchCrops();
//   }, []);

//   const handleChange = async (event) => {
//     const cropId = event.target.value;
//     setSelectedCrop(cropId);
//     try {
//       const croptypesData = await getCroptypes(cropId);
//       console.log("croptypes fetched: ", croptypesData);
//       setcroptypes(croptypesData);
//     } catch (error) {
//       console.error("Error fetching croptypes:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="dropdown-container">
//         <select onChange={handleChange} value={selectedcrop}>
//           <option value="">All crops</option>
//           {crops.map((crop) => (
//             <option key={crop.id} value={crop.id}>{crop.name}</option>
//           ))}
//         </select>

//         <select>
//           <option value="">All croptypes</option>
//           {croptypes.map((croptype) => (
//             <option key={croptype.id} value={croptype.id}>{croptype.name}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

