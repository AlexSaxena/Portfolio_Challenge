import React from "react"

const EducationCard = (props) => {
    let education = props.education
    return (
        <>
            <div class="ui card" id="card-div">
                <div class="image">
                    <img src={education.image} />
                </div>
                <div class="content">
                    <h3 class="ui header">{education.name}</h3>

                    <div class="description">
                        {education.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationCard