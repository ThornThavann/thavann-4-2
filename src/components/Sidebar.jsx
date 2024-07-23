import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    
    
    <div id="sidebar">
      
      <nav>
        <ul>
          <li>
            <NavLink to="/crop">Crop</NavLink>
          </li>
          <li>
            <NavLink to="/croptype">Crop Type</NavLink>
          </li>
          
       
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;