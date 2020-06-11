import React, { Component } from "react";
import { Bar, pie, Line, Doughnut } from "react-chartjs-2"
import HomeIcon from '@material-ui/icons/Home';
import './dashboardChat.less'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import Divider from '@material-ui/core/Divider';
import mobiledata from './dashboardChat.json'


class DashboardChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieData: {
        labels: ['', ''],
        datasets: [
          {
            label: '',
            backgroundColor: [
              'black',
              'grey'
            ],

            data: [60, 40]
          }
        ]
      },
      blackchartdata: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            backgroundColor: 'black',

            data: [10, 8, 15, 20, 25, 30, 35, 15, 10, 8, 12, 15, 10, 15, 20, 15, 30, 25, 30, 24]
          }
        ]
      },
      curveData: {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "",
            backgroundColor: 'rgb(128,128,128)',
            // borderColor: 'rgb(128,128,128)',
            broderWidth: 0,
            data: [0, 5, 36, 7, 89, 40, 26],
            // lineTension: 0
          },
          {
            label: "",
            backgroundColor: 'rgb(255,239,213)',
            // borderColor: 'rgb(255,239,213)',
            broderWidth: 0,
            data: [10, 50, 20, 80, 30, 25, 95],
            // lineTension: 0
          },
          {
            label: "",
            backgroundColor: 'rgb(255,192,203)',
            // borderColor: 'rgb(255,192,203)',
            broderWidth: 0,
            data: [0, 15, 84, 12, 105, 80, 50],
            // lineTension: 0
          },

        ]
      },
      myData: {
        labels: ["", "", "", "", "", "", "", "", ""],
        datasets: [{
          label: "",
          backgroundColor: 'rgb(0,0,0,0.2)',
          borderColor: 'rgb(63,81,181,0.7)',
          broderWidth: 0,
          data: [0, 2, 0, 3, 2, 5, 2, 3, 0],
          lineTension: 0
        }]

      },
      myData1: {
        labels: ["", "", "", "", "", "", "", "", "", ""],
        datasets: [{
          label: "",
          backgroundColor: 'rgb(0,0,0,0.2)',
          borderColor: 'rgb(63,81,181,0.7)',
          broderWidth: 0,
          data: [4, 5, 2, 8, 4, 8, 7, 4, 8, 5],
          lineTension: 0
        }]

      },
      myData2: {
        labels: ["", "", "", "", "", "", "", "", "", ",", ""],
        datasets: [{
          label: "",
          backgroundColor: 'rgb(0,0,0,0.2)',
          borderColor: 'rgb(63,81,181,0.7)',
          broderWidth: 0,
          data: [1, 5, 9, 3, 5, 7, 8, 5, 2, 3, 5, 7],
          lineTension: 0
        }]

      },
      chartData: {
        labels: [
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
        ],
        datasets: [{
          label: 'Tablet',
          data: [10, 0.5, 25, 22, 20, 20, 18, 9, 22, 22, 15],
          backgroundColor: 'rgb(111, 103, 218)'
        }, {
          label: 'Laptop',
          data: [0, 6, 4, 6, 8, 10, 12, 14, 16, 20, 22],
          backgroundColor: 'rgb(255,215,0)'
        }, {
          label: 'Mobile',
          data: [25, 8, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          backgroundColor: 'rgb(136, 136, 136)'
        }]
      }
    };
  }

  render() {
    return (
      <div className="firstcontainerchart">

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
                <div className="RowWiswD">
                  <div className="rowD">
                    <div className="boxD">

                    </div>
                    <div className="colD">
                      <div>Sales Report</div>
                      <div className="amountD">$4,136</div>
                    </div>
                  </div>
                  <div className="rowD">
                    <div className="boxD">

                    </div>
                    <div className="colD">
                      <div>Annual Revenue</div>
                      <div className="amountD">$6,418</div>
                    </div>
                  </div>

                  <div className="rowD">
                    <div className="boxD">

                    </div>
                    <div className="colD">
                      <div>Total Profit</div>
                      <div className="amountD">$3.915</div>
                    </div>
                  </div>
                </div>


                <div className="bobychart">
                  <div className="chart" style={{
                    width: "1009px", marginTop: "70px"
                  }}>
                    <Bar
                      height={100}
                      data={this.state.chartData}
                      options={{
                        scales: {
                          xAxes: [{
                            stacked: true,
                            barPercentage: 0.4
                          }],
                          yAxes: [{
                            stacked: true
                          }]
                        }
                      }}
                    />

                  </div>
                </div>
              </div>
            </div>

          </div>





          <div className="rowFlexchart11">

            <div className="rowFlex1chart22" style={{ marginLeft: "0px" }}>


              <div className="colchart" >




                <div className="bobychart">
                  <div className="rowTopchart">

                    <div className="productstyle" >
                      Order
                    </div>
                    <div className="reportstyle">Received</div>
                  </div>
                  <div className="amountStyle">
                    47,052
                  </div>
                  <div className="rowTopchart12">
                    <div>
                      24%Average
                    </div>
                    <div>
                      <TrendingUpIcon />
                    </div>
                  </div>
                  <div className="chart" style={{
                    width: "200px", height: "40px"
                  }}>
                    <Line
                      width={320}
                      height={40}
                      data={this.state.myData}
                      options={{
                        // responsive:false,
                        // maintainAspectRatio:false,
                        elements: {
                          point: {
                            radius: 0
                          }
                        },
                        legend: {
                          labels: {
                            boxWidth: 0,
                          },
                          display: false
                        },
                        responsive: false,
                        // bezierCurve : false,
                        scales: {
                          xAxes: [{
                            ticks: {
                              display: false
                            },
                            gridLines: {
                              display: false
                            }
                          }],
                          yAxes: [{
                            ticks: {
                              display: false
                            },
                            gridLines: {
                              display: false
                            }
                          }],

                        }
                      }}
                    />

                  </div>
                </div>

              </div>
            </div>
            <div className="rowFlex1chart22">


              <div className="colchart" >




                <div className="bobychart">
                  <div className="rowTopchart">

                    <div className="productstyle" >
                      Total
      </div>
                    <div className="reportstyle">Sales</div>
                  </div>
                  <div className="amountStyle">
                    152
    </div>
                  <div className="rowTopchart12">
                    <div>
                      15%Average
      </div>
                    <div>
                      <TrendingDownIcon />
                    </div>
                  </div>
                  <div className="chart" style={{
                    width: "200px", height: "40px"
                  }}>
                    <Line
                      width={320}
                      height={40}
                      data={this.state.myData1}
                      options={{
                        // responsive:false,
                        // maintainAspectRatio:false,
                        elements: {
                          point: {
                            radius: 0
                          }
                        },
                        legend: {
                          labels: {
                            boxWidth: 0,
                          },
                          display: false
                        },
                        responsive: false,
                        // bezierCurve : false,
                        scales: {
                          xAxes: [{
                            ticks: {
                              display: false
                            },
                            gridLines: {
                              display: false
                            }
                          }],
                          yAxes: [{
                            ticks: {
                              display: false
                            },
                            gridLines: {
                              display: false
                            }
                          }],

                        }
                      }}
                    />

                  </div>
                </div>

              </div>
            </div>
            <div className="rowFlex1chart22">


              <div className="colchart" >




                <div className="bobychart">
                  <div className="rowTopchart">

                    <div className="productstyle" >
                      Revenue
      </div>
                    {/* <div className="reportstyle">Received</div> */}
                  </div>
                  <div className="amountStyle">
                    1612
    </div>
                  <div className="rowTopchart12">
                    <div>
                      24%Average
      </div>
                    <div>
                      <TrendingUpIcon />
                    </div>
                  </div>
                  <div className="chart" style={{
                    width: "200px", height: "40px"
                  }}>
                    <Line
                      width={320}
                      height={40}
                      data={this.state.myData2}
                      options={{
                        // responsive:false,
                        // maintainAspectRatio:false,
                        elements: {
                          point: {
                            radius: 0
                          }
                        },
                        legend: {
                          labels: {
                            boxWidth: 0,
                          },
                          display: false
                        },
                        responsive: false,
                        // bezierCurve : false,
                        scales: {
                          xAxes: [{
                            ticks: {
                              display: false
                            },
                            gridLines: {
                              display: false
                            }
                          }],
                          yAxes: [{
                            ticks: {
                              display: false
                            },
                            gridLines: {
                              display: false
                            }
                          }],

                        }
                      }}
                    />

                  </div>
                </div>

              </div>
            </div>








          </div>



          <div className="rowFlexchart11" >

            <div className="rowFlex1chart23">


              <div className="colchart" >

                <div className="bobychart">
                  <div className="insidechartbody">

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
                    <div className="rowTopchart">

                      <div className="productstyle" >
                        Note
                     </div>
                      <div className="reportstyle">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
                    </div>

                    <div className="chart" style={{
                      width: "649px", height: "342px", marginTop: "70px"
                    }}>
                      <Line
                        width={649}
                        height={342}
                        data={this.state.curveData}
                        options={{
                          // responsive:false,
                          // maintainAspectRatio:false,
                          elements: {
                            arc: {
                              broderWidth: 0
                            },
                            point: {
                              radius: 0
                            }
                          },
                          legend: {
                            labels: {
                              boxWidth: 0,
                            },
                            display: false
                          },
                          scales: {
                            xAxes: [{
                              // ticks: {
                              //   display: false
                              // },
                              gridLines: {
                                display: false
                              }
                            }],


                          }
                          // responsive: false,
                          // bezierCurve : false,



                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>
            </div>





            <div className="rowFlex1chart23">


              <div className="colchart" >

                <div className="bobychart">

                  <div className="circlechart">
                    <div className="rowTopchart1" >
                      <div className="rowTopchart">

                        <div className="productstyle" >
                          Total
                        </div>
                        <div className="reportstyle">Revenue</div>
                      </div>

                      <div className="rowTopchart11">
                        <MoreHorizIcon style={{ color: "#888" }} />
                        <CloseIcon style={{ color: "#888" }} />
                      </div>
                    </div>

                    <div className="satification">
                      {/* satification */}
                      <div className="amountStyle">Total Sales</div>
                      <div>24,1345</div>

                      <div className="chart" style={{
                        marginTop: "20px"
                      }}>

                        <Doughnut
                          data={this.state.pieData}
                          options={{
                            cutoutPercentage: 85,
                            legend: {
                              labels: {
                                boxWidth: 0,
                              },
                              display: false,
                              position: 'right'
                            }
                          }}
                        />

                      </div>
                      <div className="amountStyle">Satification</div>
                      <div className="rowTopchart12">
                        <div>
                          47%Average
                     </div>
                        <div>
                          <TrendingUpIcon />
                        </div>
                      </div>

                      <div className="chart" style={{
                        marginTop: "20px", justifyContent: "center", display: "flex"
                      }}>
                        <Bar
                          // width={320}
                          height={50}
                          data={this.state.blackchartdata}
                          options={{
                            legend: {
                              labels: {
                                boxWidth: 0,
                              },
                              display: false
                            },
                            scales: {
                              xAxes: [{
                                barPercentage: 0.08,
                                ticks: {
                                  display: false
                                },
                                gridLines: {
                                  display: false
                                }
                              }],
                              yAxes: [{
                                ticks: {
                                  display: false
                                },
                                gridLines: {
                                  display: false
                                }
                              }],

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


          <div className="rowFlexchart11" >

            <div className="rowFlex1chart">


              <div className="colchart" >

                <div className="bobychart">
                  <div style={{width:"1009px"}}>
                        <div className="rowTopchart1" >
                          <div className="rowTopchart">

                            <div className="productstyle" >
                              Recent
                            </div>
                            <div className="reportstyle">Order</div>
                          </div>

                          <div className="rowTopchart11">
                            <MoreHorizIcon style={{ color: "#888" }} />
                            <CloseIcon style={{ color: "#888" }} />
                          </div>
                        </div>

                        <table style={{width:"1000px"}}>
                          <thead>
                            <tr>
                              <th align="Left" style={{width:"60px",height:"47px"}}>#</th>
                              <th  align="Left" style={{width:"98px",height:"47px"}}>Name</th>
                              <th align="Left" style={{width:"163px",height:"47px"}}>Item</th>
                              <th align="Left" style={{width:"449px",height:"47px"}}>Address</th>
                              <th align="Left" style={{width:"113px",height:"47px"}}>Quality</th>
                              <th align="Left" style={{width:"126px",height:"47px"}}>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                          {/* {this.state.data.map((data, index) => {
                          return */}
                          {mobiledata.PhoneDetails.map(data => {
                            return(
                            <tr key={data.id}>
                              <td style={{width:"60px",height:"47px"}}>
                                <div style={{width:"40px",height:"33px",backgroundColor:"rgb(204,204,204"}}>

                                </div>
                              </td>
                              <td style={{width:"98px",height:"47px"}}>{data.Name}</td>
                              <td style={{width:"163px",height:"47px"}}>{data.Item}</td>
                              <td style={{width:"449px",height:"47px"}}>{data.Address}</td>
                              <td style={{width:"113px",height:"47px"}}>{data.Quality}</td>
                              <td style={{width:"126px",height:"47px"}}>
                              <div>
                                <span>{data.Status}</span>
                              </div>
                              </td>
                            </tr>
                          )})}
                          </tbody>
                        </table>
                  </div>

                </div>
              </div>
            </div>
          </div>



          {/* <div style={{backgroundColor:"red",display:"flex",flexDirection:"row",width:"82%",marginTop:"10px"}}>
                dlsknfkdv
              </div> */}
        </div>

      </div>

    )
  }

}
export default DashboardChat;