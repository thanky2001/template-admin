import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';



class ProductStatus extends Component {
    options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            labels: {
                boxWidth: 100
            }
        },
        scales: {
            y: {
                min: 0,
                max: 200
            }
        },
    };
    data ={
        labels: this.props.labels,
        datasets: this.props.datasets
        }
    render() {
        return (
            <div className="col-lg-6 col-md-12 col-sm-12 col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">Product Status</h4>
                        <div className="config__chart"><Line data={this.data} options={this.options} /></div>
                    </div>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        labels: state.infomations.labelsProductStatus,
        datasets: state.infomations.datasetsProductStatus,
    }
}
export default connect(mapStateToProps, null)(ProductStatus);