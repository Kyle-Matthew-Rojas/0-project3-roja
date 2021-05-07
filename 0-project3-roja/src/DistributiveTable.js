import React, { Component } from "react";
import { DistributiveRow } from "./DistributiveRow";

export class DistributiveTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                   <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Distributive Requirement
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
                        this.props.courses.map(s => 
                            <DistributiveRow DSCourses={ s } 
                                key={ s.id }
                                editCallback={ this.props.editCallback }
                            />)
                    }
                </tbody>
            </table>        
    }
}
