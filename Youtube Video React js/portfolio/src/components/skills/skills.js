import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <div>
            <secction id="skills">
                <span className="skillTitle">What I Do</span>
                <span className="skillDisc">I Am a skilled and passionate web designer with experience  visually appealing and user freindly website I Am a skilled and passionate web designer with experience  visually appealing and user freindly website I Am a skilled and passionate web designer with experience  visually appealing and user freindly website</span>
                <div className="skillBars">

                    <div className="skillBar">
                        <img src={UIDesign} alt="UIDesign" className="skillBarimg" />
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>This is a demo text, you can write your own content here.</p>
                        </div>

                    </div>

                    <div className="skillBar">
                        <img src={WebDesign} alt="WebDesign" className="skillBarimg" />
                        <div className="skillBarText">
                            <h2>Web site Design</h2>
                            <p>This is a demo text, you can write your own content here.</p>
                        </div>

                    </div>

                    <div className="skillBar">
                        <img src={AppDesign} alt="AppDesign" className="skillBarimg" />
                        <div className="skillBarText">
                            <h2>App Design</h2>
                            <p>This is a demo text, you can write your own content here.</p>
                        </div>

                    </div>


                </div>

            </secction>
        </div>
    )
}

export default Skills
