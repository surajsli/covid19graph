import React from 'react';
import * as d3 from 'd3';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';


class Graph extends React.PureComponent {

constructor(props){
    super(props);

    this.state = {
        data: props.data,
        width: 0,
        height: 0,
    }

    this.myRef = React.createRef();
    this.onMouseOver = this.onMouseOver.bind(this);

}

// componentDidMount() {
//     console.log('Graph componentDidMount', this.props);
//     const {canvasHeight, canvasWidth, scale, data} = this.props; 

//     this.setState({
//         canvasHeight: this.props.canvasHeight,
//         canvasWidth: this.props.canvasWidth,
//         scale: this.props.scale,
//         data: this.props.data,
//     })

// }

componentWillReceiveProps(nextProps) {
    console.log('Graph componentWillReceiveProps', this.props.selected, nextProps.selected);
    this.setState({
        data: nextProps.data,
    })
}


onMouseOut() {

}

onMouseOver() {

}

// drawBarChart() {

// let canvasWidth = this.state.canvasWidth;
// let canvasHeight = this.state.canvasHeight;
// let scale = this.state.scale;
// let data = this.state.data;

// let margin = {top: 20, right: 30, bottom: 40, left: 90},
//     width = this.state.width - margin.left - margin.right,
//     height = this.state.height - margin.top - margin.bottom;

//     const currentRef = this.myRef.current;
//     // const canvasHeight = 800
//     // const canvasWidth = 800
//     // const scale = 20
    
//     const svgCanvas = d3.select(currentRef)
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform",
//     "translate(" + margin.left + "," + margin.top + ")");

//     // Add X axis
//     let x = d3.scaleLinear()
//             .domain([0, 100])
//             .range([ 0, width]);
//             svgCanvas.append("g")
//             .attr("transform", "translate(0," + height + ")")
//             .attr('class','axis x')
//             .call(d3.axisBottom(x))
//             .selectAll("text")
//             .attr("transform", "translate(-10,0)rotate(-45)")
//             .style("text-anchor", "end");

//     // Add Y axis
//     let y = d3.scaleBand()
//             .range([ 0, height ])
//             .domain(this.state.data.map((d) =>  d[this.state.yAxisAttribute]))
//             .padding(.1);
//             svgCanvas.append("g")
//             .attr('class','axis y')
//             .call(d3.axisLeft(y))
//             .selectAll("text")
//             .attr("dy", null)

//     // Add Bars
//     svgCanvas.selectAll("myRect")
//         .data(this.state.data)
//         .enter()
//         .append("rect")
//         .on('mouseover', function(){
//             d3.select(this).style('opacity', 0.5)
//         })
//         .on('mouseout', function(){
//             d3.select(this).style('opacity', 1)
//         })
//         .attr("x", x(0) )
//         .attr("y", (d) => y(d[this.state.yAxisAttribute]))
//         .attr("width", 0)
//         .attr("height", y.bandwidth() - 10 )
//         .attr("fill", "#DF337D")
//         .transition(d3.transition().duration(1000))
//         .attr("width", (d) => x(d[this.state.xAxisAttribute]))

    
// }


render() {
    console.log('Graph component render', this.state);
    return(
        // <div ref={this.myRef}></div>
        <div className="graph-container">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={this.state.data}    margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Confirmed" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Active" fill="#8884d8" />
                <Bar dataKey="Deaths" fill="#82ca9d" />
                </BarChart>
                </ResponsiveContainer>
        </div>
    )
}


}

export default Graph;