import React, { Component } from "react";
import OnePost from '../components/OnePost'


class ExploreOne extends Component {
    render() {
        return (
            <div className="">
                {/* Inside the routed component who will find the id in the props mostly with: this.props.match.params.id */}
                <OnePost onepostid={this.props.match.params.id} />
            </div>
        );
    }
}

export default ExploreOne;