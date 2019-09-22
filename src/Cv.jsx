import React, { Component } from "react"
import axios from "axios"
import EducationCard from "./EducationCard"
import WorkCard from "./WorkCard"

class Cv extends Component {
    constructor() {
        super();
        this.state = {
            work: [],
            educations: []
        };
    }
    componentDidMount() {
        this.getWorkList(),
        this.getEducations()
    }

    getWorkList() {
        axios.get('./src/data/work.json')
        .then(response => {
            this.setState({
                work: response.data
            })
        })
    }

    getEducations() {
        axios.get('./src/data/education.json')
        .then(response => {
            this.setState({
                educations: response.data
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

        const educations = this.state.educations
        let educationsList

        if (educations.lenght > 0) {
            educationsList = educations.map(education => {
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
                        <h1 className="ui header">My Previous Workexperience</h1>
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
                            {educationsList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Cv