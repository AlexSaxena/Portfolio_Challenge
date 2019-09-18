import React from "react"
import { UndrawBusinessPlan } from 'react-undraw-illustrations';

const Hello = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawBusinessPlan />
                </div>
                <div class="column">
                    <h1 className="ui header">My Portfolio</h1>
                    <p> </p>
                </div>
            </div>
        </div>
    )
}

export default Hello