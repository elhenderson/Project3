import React, { Component } from "react";
import EditForm from './EditForm'


class EditOne extends Component {
    render() {
        return (
            <div className="">
                {/* Inside the routed component who will find the id in the props mostly with: this.props.match.params.id */}
                <EditForm onepostid={this.props.match.params.id} />
            </div>
        );
    }
}

export default EditOne;