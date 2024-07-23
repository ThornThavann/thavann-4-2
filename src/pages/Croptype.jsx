
import API_BASE_URL from '../config';
import { useEffect, useState } from 'react';
import "../styles/crop.css";
function Croptype() {
  const [crops, setCrops] = useState([]);
  
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}crop-types`);
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
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop, index) => (
            <tr key={crop.id}>
              {/* <td>{index + 1}</td/> */}
              <td>{crop.id}</td>
              <td>{crop.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Croptype;

