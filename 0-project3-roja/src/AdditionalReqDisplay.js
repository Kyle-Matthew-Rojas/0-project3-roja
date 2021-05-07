import React, { Component } from "react";
import { AdditionalReqTable } from "./AdditionalReqTable"
import { AdditionalReqEditor } from "./AdditionalReqEditor";

export class AdditionalReqDisplay extends Component {

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
            return <AdditionalReqEditor 
                key={ this.state.selectedCourses.id || -1 }
                courses={ this.state.selectedCourses } 
                saveCallback={ this.saveCourses }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <AdditionalReqTable courses={ this.props.courses }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />                                   
            </div>
        }
    }
}