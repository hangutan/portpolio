import React from 'react';

function Skill(){
    return(
        <div className="skills">
            <div className="title">Skills</div>
            <div className="content1"></div>
            <div class="container">
                <div class="skills">
                    <span class="name">Html</span>
                    <div class="percent">
                        <div class="progress" style={{width:"90%"}}></div>
                    </div>
                    <span class="value">90%</span>
                </div>
                <div class="skills">
                    <span class="name">Css</span>
                    <div class="percent">
                        <div class="progress" style={{width:"70%"}}></div>
                    </div>
                    <span class="value">70%</span>
                </div>
                <div class="skills">
                    <span class="name">Javascript</span>
                    <div class="percent">
                        <div class="progress" style={{width:"60%"}}></div>
                    </div>
                    <span class="value">60%</span>
                </div>
                <div class="skills">
                    <span class="name">React js</span>
                    <div class="percent">
                        <div class="progress" style={{width:"65%"}}></div>
                    </div>
                    <span class="value">65%</span>
                </div>
            </div>
            <div className="basic">
                <i className="fa fa-hand-o-down"></i><span>Basic</span>
            </div>
            <div class="container">
                <div class="skills">
                    <span class="name1">IONIC, PHP & WORDPRESS, JAVA, ...</span>
                </div>
            </div>
        </div>
    )
}

export default Skill;