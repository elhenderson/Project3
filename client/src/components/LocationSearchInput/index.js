import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import "./style.css"

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: null, latitude: null, longitude: null }
    }

    handleChange = (address) => {
        this.setState({ address })
    }

    // When the user selects an autocomplete suggestion...
    handleSelect = (address) => {
        // Pull in the setFormLocation function from the parent ReportForm
        const setFormLocation = this.props.setFormLocation

        console.log("selected address: " + address);
        this.setState({
            address: address
        });

        geocodeByAddress(address)
            .then(res => getLatLng(res[0]))
            .then(({ lat, lng }) => {
                this.setState({
                    latitude: lat,
                    longitude: lng,
                });
                console.log("locsearchinput state:")
                console.log(this.state);
                setFormLocation(this.state);
            })
            .catch(error => {
                this.setState({ isGeocoding: false });
                console.log('error', error); // eslint-disable-line no-console
            });
            // .then(function (results) {
            //     console.log("geocodeByAddress result:");
            //     console.log(results);
            //     // Set the location in the parent ReportFrom
            //     setFormLocation(results[0].formatted_address)
            // })
            // .catch(error => console.error('Error', error))
    }

    render() {
        const renderInput = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
            // <div className="autocomplete-root">
            <>
                <input className="form-control" {...getInputProps()} />
                <label >Location</label>
                <div className="autocomplete-dropdown-container">
                    {suggestions.map(suggestion => (
                        // Add a style of "suggestion" to the suggested locations
                        <div {...getSuggestionItemProps(suggestion)} className="suggestion">
                            <span>{suggestion.description}</span>
                        </div>
                    ))}
                </div>
            </>
        );

        // Limit the suggestions to show only cities in the US
        const searchOptions = {
            // types: ['(cities)'],
            componentRestrictions: { country: "us" }
        }

        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                // Pass the search options prop
                searchOptions={searchOptions}
            >
                {renderInput}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput
