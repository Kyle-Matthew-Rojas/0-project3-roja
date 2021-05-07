import React, { Component } from 'react';
import { Selector } from './Selector';
import { AcademicFoundationDisplay } from './AcademicFoundationDisplay';
import { DistributiveDisplay } from './DistributiveDisplay';
import { AdditionalReqDisplay } from './AdditionalReqDisplay';

export default class AllThreeOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AFCourse: [
                { id: 1, description: "First Year Experience",  semester: " ", prefix: "FYE", number: " ", grade: " "},
                { id: 2, description: "English Composition I",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 3, description: "English Composition II",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 4, description: "Mathematics",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 5, description: "Interdisciplinary",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 6, description: "Diverse Communities",  semester: " ", prefix: " ", number: " ", grade: " "}
            ],
            Dcourses: [
                { id: 1, description: "Science I",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 2, description: "Science II",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 3, description: "Behavior & Social Science I",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 4, description: "Behavior & Social Science II",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 5, description: "Hummanity I",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 6, description: "Hummanity II",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 7, description: "Art",  semester: " ", prefix: " ", number: " ", grade: " "}
            ],
            AddCourses: [
                { id: 1, description: "Writing Emphasis I",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 2, description: "Writing Emphasis II",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 3, description: "Writing Emphasis III",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 4, description: "Speaking Emphasis I",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 5, description: "Speaking Emphasis II",  semester: " ", prefix: " ", number: " ", grade: " "},
                { id: 6, description: "Speaking Emphasis III",  semester: " ", prefix: " ", number: " ", grade: " "}
            ]
        }
        this.idCounter = 100;
    }

    saveData = (collection, item) => {
        if (item.id === " ") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
        } 
    }

    render() {
        return <div>
            <Selector>
                <AcademicFoundationDisplay 
                    name="Academic Foundation"
                    courses={ this.state.AFCourse }
                    saveCallback={ p => this.saveData("AFCourse", p) }
                />
                <DistributiveDisplay
                    name="Distributive Requirement"
                    courses={ this.state.Dcourses }
                    saveCallback={ s => this.saveData("Dcourses", s) }
                />
                <AdditionalReqDisplay
                    name="Additional Requirements"
                    courses={ this.state.AddCourses }
                    saveCallback={ a => this.saveData("AddCourses", a) }
                />
            </Selector>
        </div>
    }
}
