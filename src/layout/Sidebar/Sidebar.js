import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <div className="sidebar">
            <ul>
                <li><Link to="/">Introduce</Link></li>
                <li className="pd-skill"><Link to="/skill">Skill</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li className="pd-left"><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;