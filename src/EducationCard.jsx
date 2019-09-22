import React from "react"

const EducationCard = (props) => {
    let education = props.education
    return (
        <>
            <div className="ui card" id="card-div">
                <div className="image">
                    <img src={education.image} />
                </div>
                <div className="content">
                    <h3 className="ui header">{education.name}</h3>

                    <div className="description">
                        {education.description}
                    </div>
                </div>
            </div>        
        </>
    )
}

export default EducationCard