import React, { Component } from "react";
import { AcademicFoundationRow } from "./AcademicFoundationRow";

export class AcademicFoundationTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Academic Foundation
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Semester</th>
                        <th>Prefix</th>
                        <th>Number</th>
                        <th>Grade</th>
                        <th>Editing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.courses.map(p => 
                            <AcademicFoundationRow AFCourses={ p } 
                                key={ p.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}
