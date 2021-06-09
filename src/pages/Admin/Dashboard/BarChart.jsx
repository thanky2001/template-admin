import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";


class BarChart extends Component {
    data =
        {
            labels: this.props.labels ,
            datasets: this.props.datasets
        }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card-box">
                        <Bar data={this.data}/>
                    </div>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        labels: state.infomations.labelsBar,
        datasets: state.infomations.datasetsBar,
    }
}
export default connect(mapStateToProps, null)(BarChart);
