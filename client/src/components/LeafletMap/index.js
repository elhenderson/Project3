import React, { Component } from "react";
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { decode } from 'pluscodes'
import './style.css'

class LeafletMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // if location is not available, render no map
        if (! this.props.pluscode) {
            return (null);
        }

        const posDecoded = decode(this.props.pluscode);
        const position = [posDecoded.latitude, posDecoded.longitude];
        const zoom = 12; // TODO: automatic setting zoom based on pluscode's resolution
        return (
            <div >
                <Map center={position} zoom={zoom} style={{height: "300px"}}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            {this.props.title}
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

LeafletMap.propTypes = {
    title: Proptypes.string,
    pluscode: Proptypes.string,
}

const mapStateToProps = (state) => {
    return {
        title: state.post.onePost.title,
        pluscode: state.post.onePost.pluscode,
    }
}

export default connect(mapStateToProps)(LeafletMap);
