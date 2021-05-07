import React, { Component } from "react";
import { AcademicFoundationTable } from "./AcademicFoundationTable"
import { AcademicFoundationEditor } from "./AcademicFoundationEditor";

export class AcademicFoundationDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourses: null
        }
    }

    startEditing = (courses) => {
        this.setState({ showEditor: true, selectedCourses: courses })
    }

    createcourses = () => {
        this.setState({ showEditor: true, selectedCourses: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourses: null })
    }

    saveCourses = (courses) => {
        this.props.saveCallback(courses);
        this.setState({ showEditor: false, selectedCourses: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <AcademicFoundationEditor 
                key={ this.state.selectedCourses.id || -1 }
                courses={ this.state.selectedCourses } 
                saveCallback={ this.saveCourses }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <AcademicFoundationTable courses={ this.props.courses }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />                                   
            </div>
        }
    }
}
