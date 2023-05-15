/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../../pages/assets/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Chart1 extends Component {
	render() {
		const options = {
			theme: "light2",
			title: {
				text: "Comparison of Exchange Rates - 2023"
			},
			subtitles: [{
				text: "GBP & USD to INR"
			}],
			axisY: {
				prefix: "₹"
			},
			toolTip: {
				shared: true
			},
			data: [
			{
				type: "area",
				name: "GBP",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "₹#,##0.##",
				dataPoints: [
					{ x: new Date("2017- 01- 01"), y: 84.927},
					{ x: new Date("2017- 02- 01"), y: 82.609},
					{ x: new Date("2017- 03- 01"), y: 81.428},
					{ x: new Date("2017- 04- 01"), y: 83.259},
					{ x: new Date("2017- 05- 01"), y: 83.153},
					{ x: new Date("2017- 06- 01"), y: 84.180},
					{ x: new Date("2017- 07- 01"), y: 84.840},
					{ x: new Date("2017- 08- 01"), y: 82.671},
					{ x: new Date("2017- 09- 01"), y: 87.496},
					{ x: new Date("2017- 10- 01"), y: 86.007},
					{ x: new Date("2017- 11- 01"), y: 87.233},
					{ x: new Date("2017- 12- 01"), y: 86.276}
				]
			},
			{
				type: "area",
				name: "USD",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "₹#,##0.##",
				dataPoints: [
					{ x: new Date("2017- 01- 01"), y: 67.515},
					{ x: new Date("2017- 02- 01"), y: 66.725},
					{ x: new Date("2017- 03- 01"), y: 64.86},
					{ x: new Date("2017- 04- 01"), y: 64.29},
					{ x: new Date("2017- 05- 01"), y: 64.51},
					{ x: new Date("2017- 06- 01"), y: 64.62},
					{ x: new Date("2017- 07- 01"), y: 64.2},
					{ x: new Date("2017- 08- 01"), y: 63.935},
					{ x: new Date("2017- 09- 01"), y: 65.31},
					{ x: new Date("2017- 10- 01"), y: 64.75},
					{ x: new Date("2017- 11- 01"), y: 64.49},
					{ x: new Date("2017- 12- 01"), y: 63.84}
				]
			}
			]
		}
		return (
			<div>
				<CanvasJSChart options = {options}
						/* onRef={ref => this.chart = ref} */
				/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}
