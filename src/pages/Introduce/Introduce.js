import React from 'react';

function Introduce(){
    return(
        <div className="about">
            <div className="title">About <span>Me</span></div>
            <div className="content1">
                <div className="introduce">
                    <p>Hello! I'm Ha Ngu Tan.</p>
                    <p> I’m 21 years old and live in Cam Lam, Khanh Hoa.</p>
                </div>
                <div className="education">
                    <div className="title-e">EDUCATION</div>
                    <div className="content">
                        <div className="ct-left">Information Science Engineering</div>
                        <div className="ct-right">
                            <p>9/2017 - 9/2021</p>
                        </div>
                    </div>
                    <div className="main">
                        <p>University Of Information Technology(<b style={{color:'black'}}>UIT</b>), National University HCMC.</p>
                        <p>Grade Point Average(GPA): <b style={{color:'black'}}>7.6</b></p>
                    </div>
                </div>
                <div className="education">
                    <div className="title-e">EXPERIENCE</div>
                    <div className="content mg-bt">
                        <div className="ct-left">Intern, Parttime PHP & Wordpress</div>
                        <div className="ct-right">
                            <p>6/2019 - 10/2019</p>
                        </div>
                    </div>
                    <div className="content ">
                        <div className="ct-left">Parttime IONIC</div>
                        <div className="ct-right">
                            <p>11/2019 - 3/2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;