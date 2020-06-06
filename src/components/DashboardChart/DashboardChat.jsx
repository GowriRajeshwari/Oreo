import React, { Component } from "react";
import { Bar, pie, Line } from "react-chartjs-2"
import HomeIcon from '@material-ui/icons/Home';
import './dashboardChat.less'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';

class DashboardChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
        ],
        datasets: [
          {
            label: 'Population',
            data: [
              10.50, 30.50, 30.25, 20.10, 30.90, 30.50, 40, 30.50, 40.88, 40.80, 30, 0
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'

            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="firstcontainerchart">
        <div className="rowchart">
          <div className="productSizechart">
            <div className="productNamechart">
              <div className="productColorchart">Product</div>
              <small className="productWelcomechart">Welcome to Oreo</small>
            </div>
            <div className="pathchart">
              <div className="homeIcon1chart">
                <div>
                  <HomeIcon className="iconHomeColorchart" style={{ fontSize: "18px" }} />
                </div>
                <div className="oreo1chart">
                  <div className="wordStyle1chart">Oreo</div>
                  <div className="wordStylechart">/</div>
                  <div className="wordStyle1chart">eCommerce</div>
                  <div className="wordStylechart">/</div>
                  <div className="wordStylechart">Product</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containerFluidchart">
          <div className="rowFlexchart">
            <div className="rowFlex1chart">
              <div className="colchart" >
                <div className="rowTopchart1" >
                  <div className="rowTopchart">

                    <div className="productstyle" >
                      Product
                  </div>
                    <div className="reportstyle">Report</div>
                  </div>
                  <div className="rowTopchart11">
                    <MoreHorizIcon style={{ color: "#888" }} />
                    <CloseIcon style={{ color: "#888" }} />
                  </div>
                </div>
                <div></div>


                <div className="bobychart">
                  <div className="chart" style={{
                    width: "1009px", height: "300px", marginTop: "70px"
                  }}>
                    <Bar
                      data={this.state.chartData}
                      options={{
                        scales: {
                          xAxes: [{
                            barPercentage: 0.4
                          }]
                        }
                      }}
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }

}
export default DashboardChat;