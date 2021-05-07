import React, { Component } from "react";
import { DistributiveEditor } from "./DistributiveEditor";
import { DistributiveTable } from "./DistributiveTable";

export class DistributiveDisplay extends Component {

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

    createCourses = () => {
        this.setState({ showEditor: true, selectedCourses: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourses: null })
    }

    saveCourses= (courses) => {
        this.props.saveCallback(courses);
        this.setState({ showEditor: false, selectedCourses: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <DistributiveEditor
                key={ this.state.selectedCourses.id || -1 }
                courses={ this.state.selectedCourses } 
                saveCallback={ this.saveCourses }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                    <DistributiveTable courses ={ this.props.courses }
                        editCallback={ this.startEditing }
                    />                     
            </div>        
        }
    }
}
