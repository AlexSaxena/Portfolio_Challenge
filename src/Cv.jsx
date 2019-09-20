import React from "react";
import { UndrawHello } from 'react-undraw-illustrations';

const Cv = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawHello />
                </div>
                <div class="column">
                    <h1 className="ui header">My Cv</h1>
                    <p>My Experiences  </p>
                </div>
            </div>
        </div>
    )
}

export default Cv