import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
function Header(){
    const [selected,setSelected] = useState(true);
    return(
        <section className="sec1">
            <ul>
                <li>
                    <NavLink 
                        to="/"
                        onClick={()=>setSelected(true)}
                        activeStyle={selected ? {fontWeight: "bold",color: "#FF0000"} : ''} 
                    >
                        <i className="fa fa-user"></i>
                        <div>About</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/skills"
                        onClick={()=>setSelected(false)}
                        activeStyle={{fontWeight: "bold",color: "#FF0000"}} 
                    >
                        <i className="fa fa-recycle"></i>
                        <div>Skills</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/projects"
                        onClick={()=>setSelected(false)}
                        activeStyle={{fontWeight: "bold",color: "#FF0000"}} 
                    >
                        <i className="fa fa-tasks"></i>
                        <div>Projects</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact"
                        onClick={()=>setSelected(false)}
                        activeStyle={{fontWeight: "bold",color: "#FF0000"}}
                    >
                        <i className="fa fa-phone"></i>
                        <div>Contact</div>
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Header;