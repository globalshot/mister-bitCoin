import React, { useEffect, useState } from 'react'
// import { BitcoinService } from '../services/bitcoin.service'
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];

export function MarketPrice() {

    // const marketData = BitcoinService.getMarketPrice()
    // console.log(marketData);

    const [chart, setChart] = useState([])
    const [chartIsReady, setChartIsReady] = useState(false)
    // var charts
    useEffect(()=>{
		displayChart()
	},[chartIsReady])

    async function displayChart() {//save info to local i guess in future if enough time
        var charts = chart;
        if (options.data[0].dataPoints.length) return console.log(options);
        await fetch('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
            let values = data.values
			for (var i = 0; i < values.length; i++) {
				dataPoints.push({
					x: new Date(values[i].x),
					y: values[i].y
				});
			}
		})
        .then(()=>{
            setChartIsReady(true)
        })
    }

    const options = {
        theme: "light2",
        title: {
            text: "market price"
        },
        data: [{
            type: "line",
            xValueFormatString: "DD MMM",//lol, it say at 1970, guess becuaes there no date? when mouse is on it
            yValueFormatString: "#,##0.00",
            dataPoints: dataPoints
        }]
    }
    if (options.data.dataPoints) return <div>loading chart</div>
    return (
    <div>
        <CanvasJSChart options = {options} 
        onRef={ref => (ref)}
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    )
}
