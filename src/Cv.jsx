import React, { Component } from "react"
import axios from "axios"
import EducationCard from "./EducationCard"
import WorkCard from "./WorkCard"

class Cv extends Component {
    constructor() {
        super();
        this.state = {
            work: [],
            education: []
        };
    }
    componentDidMount() {
        this.getWorkList(),
        this.getEducationList()
    }

    getWorkList() {
        axios.get('./src/data/work.json')
        .then(response => {
            this.setState({
                work: response.data
            })
        })
    }

    getEducationList() {
        axios.get('./src/data/education.json')
        .then(response => {
            this.setState({
                education: response.data
            })
        })
    }

    render() {
        const work = this.state.work
        let workList

        if (work.length > 0) {
            workList = work.map(work => {
                return (
                    <div key={work.id}>
                        <WorkCard work={work} />
                    </div>
                )
            })
        }

        const education = this.state.education
        let educationList

        if (education.lenght > 0) {
            educationList = education.map(education => {
                return (
                    <div key={education.id}>
                        <EducationCard education={education} />
                    </div>
                )
            })
        }

        return(
            <div className="ui main container">
                <div className="ui stackable two column grid">
                    <div className="column">
                        <h1 className="ui header">My Previous Work Experience</h1>
                        <div className="ui stackable four column grid">
                            <div id="column">
                                {workList}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                    <h1 className="ui header">My Education</h1>
                    <div className="ui stackable four column grid">
                    <div id="column">
                            {educationList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Cv