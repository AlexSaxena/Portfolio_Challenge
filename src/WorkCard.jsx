import React from "react"

const WorkCard = (props) => {
    let work = props.work
    return (
        <>
            <div className="ui card" id="card-div">
                <div className="image">
                    <img src={work.image} />
                </div>
                <div className="content">
                    <h3 className="ui header">{work.name}</h3>

                    <div className="description">
                        {work.description}
                    </div>
                </div>
            </div>        
        </>
    )
}

export default WorkCard 