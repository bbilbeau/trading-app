import React, {Component} from "react";
import { connect } from "react-redux";
import ReactHighcharts from "react-highcharts"
import Highcharts from 'highcharts';

class PriceChart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ReactHighcharts highcharts={Highcharts} config={this.props.chartOptions} />
        </div>;
    }
}

function mapStateToProps(state) {
    if (typeof(state.stockState.stockPriceToday !== 'undefined'))
    return { 
        chartOptions: buildChartConfig(state.stockState.symbol, state.stockState.stockPriceToday)
    }
}

function buildChartConfig(symbol, stockPrice) {
    return {
        title: {
            text: symbol
        },
        xAxis: {
            categories: stockPrice.map(sp => {
                var d = new Date(sp.date);
                return pad(d.getHours()) + ':' + pad(d.getMinutes()) ;
            })
          },
        yAxis: {
            title: {
                text: null
            }
        },
        series: [
        {
            name: symbol, 
            data: stockPrice.map(sp => sp.price)
        }],
        lang: {
            noData: "No stock selected"
        }
    }
}

function pad(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}

export default connect(mapStateToProps)(PriceChart)