import React from 'react';
import Graph from './graph';
import "./style.css";

class MainComponent extends React.Component {

constructor(props) {
    super(props)

    this.state = {
        data: null,
        dropdownList: null,
        selectedValue: 'india'
    }

    this.handleChange = this.handleChange.bind(this);
}


componentDidMount() {
    this.getApiCall('india');
    this.getCountryList();
}

handleChange(e) {
    const value = e.target.value;

    this.setState({
        selectedValue: value,
    }, () => {
        this.getApiCall(value.toLowerCase());
    })

}


getApiCall(country) {
    let setCountry = country.replace(/%20/g, " ");
    fetch('https://api.covid19api.com/country/'+setCountry)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        this.setState({
            data: data,
        })
    });
}

getData(){
    return this.state.data
}

getCountryList() {
    fetch('https://api.covid19api.com/countries')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        this.setState({
            dropdownList: data,
        })
    });
}


render() {
    console.log('Main component render', this.state);

    const temperatureData = this.getData();
    const canvasHeight = 500
    const canvasWidth = 500
    const scale = 20

    return(
        <div>
            <h2>COVID 19 Tracker</h2>
            <div className='dropdown-container'>
                Select Country <br/>
                <select value={this.state.selectedValue} onChange={this.handleChange}>
                    {
                        this.state.dropdownList && this.state.dropdownList.map((i, x) => (
                            <option key={x} value={i.Slug}>{i.Country}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                {
                    this.state.data &&
                    <Graph
                    data = {temperatureData}
                    getData = {this.getData.bind(this)}
                    canvasHeight = {canvasHeight}
                    canvasWidth = {canvasWidth}
                    scale = {scale}
                    selected = {this.state.selectedValue}
                    />
                }
            </div>
        </div>
    )
}

}

export default MainComponent;
