import React from 'react';
import video from '../../assets/video/project1.mp4';

function Projects(){
    return(
        <div className="project">
            <div className="title">New <span>Projects</span></div>
            <div className="content1"></div>
            <div className="row1">
                <div className="video">
                    <video controls>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
                <div className="mota">Video mô tả project Quản lí khóa học bằng React</div>
                <div className="link">Link Github project reactjs trên : 
                    <a href="https://github.com/hangutan/qlkh1"> xem tại đây</a>
                </div>
                <div className="link">Link github Portpolio :</div>
                <div className="link">Link github chính :
                    <a href="https://github.com/hangutan"> xem tại đây</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;