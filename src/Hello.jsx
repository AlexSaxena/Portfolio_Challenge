import React from "react"
import { UndrawBusinessPlan } from 'react-undraw-illustrations';


const Hello = () => {
    return (
        <div className="ui main container">
            <div className="ui stackable two column grid">
                <div className="column">
                    {/* <UndrawBusinessPlan >*/}
                </div>
                <div className="column">
                    <h1 className="ui header"></h1>
                    <p> </p>
                </div>  
                <div id='profile'>
                    <img class="ui medium circular image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                    <h2 id="name">Alex Saxena</h2>
                </div>
            </div>
        </div>
    )
}

export default Hello