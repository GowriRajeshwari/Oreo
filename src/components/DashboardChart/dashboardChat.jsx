import React, { Component } from "react";
import { Bar, pie, Line, Doughnut } from "react-chartjs-2";
import HomeIcon from "@material-ui/icons/Home";
import "./dashboardChat.less";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CloseIcon from "@material-ui/icons/Close";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import Divider from "@material-ui/core/Divider";
import mobiledata from "./dashboardChat.json";
import ReactStars from "react-rating-stars-component";
import GoogleMapReact from "google-map-react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const useStyles = (theme) => ({
  width: {
    width: "300px",
  },
  height: {
    height: "40px",
  },
});
class DashboardChat extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  constructor(props) {
    super(props);
    this.state = {
      pieData: {
        labels: ["", ""],
        datasets: [
          {
            label: "",
            backgroundColor: ["black", "grey"],

            data: [60, 40],
          },
        ],
      },
      blackchartdata: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        datasets: [
          {
            label: "",
            backgroundColor: "black",

            data: [
              10,
              8,
              15,
              20,
              25,
              30,
              35,
              15,
              10,
              8,
              12,
              15,
              10,
              15,
              20,
              15,
              30,
              25,
              30,
              24,
            ],
          },
        ],
      },
      curveData: {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "",
            backgroundColor: "rgb(128,128,128)",
            broderWidth: 0,
            data: [0, 5, 36, 7, 89, 40, 26],
          },
          {
            label: "",
            backgroundColor: "rgb(255,239,213)",
            broderWidth: 0,
            data: [10, 50, 20, 80, 30, 25, 95],
          },
          {
            label: "",
            backgroundColor: "rgb(255,192,203)",
            broderWidth: 0,
            data: [0, 15, 84, 12, 105, 80, 50],
          },
        ],
      },
      myData: {
        labels: ["", "", "", "", "", "", "", "", ""],
        datasets: [
          {
            label: "",
            backgroundColor: "rgb(0,0,0,0.2)",
            borderColor: "rgb(63,81,181,0.7)",
            broderWidth: 0,
            data: [0, 2, 0, 3, 2, 5, 2, 3, 0],
            lineTension: 0,
          },
        ],
      },
      myData1: {
        labels: ["", "", "", "", "", "", "", "", "", ""],
        datasets: [
          {
            label: "",
            backgroundColor: "rgb(0,0,0,0.2)",
            borderColor: "rgb(63,81,181,0.7)",
            broderWidth: 0,
            data: [4, 5, 2, 8, 4, 8, 7, 4, 8, 5],
            lineTension: 0,
          },
        ],
      },
      myData2: {
        labels: ["", "", "", "", "", "", "", "", "", ",", ""],
        datasets: [
          {
            label: "",
            backgroundColor: "rgb(0,0,0,0.2)",
            borderColor: "rgb(63,81,181,0.7)",
            broderWidth: 0,
            data: [1, 5, 9, 3, 5, 7, 8, 5, 2, 3, 5, 7],
            lineTension: 0,
          },
        ],
      },
      chartData: {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Tablet",
            data: [10, 0.5, 25, 22, 20, 20, 18, 9, 22, 22, 15],
            backgroundColor: "rgb(111, 103, 218)",
          },
          {
            label: "Laptop",
            data: [0, 6, 4, 6, 8, 10, 12, 14, 16, 20, 22],
            backgroundColor: "rgb(255,215,0)",
          },
          {
            label: "Mobile",
            data: [25, 8, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            backgroundColor: "rgb(136, 136, 136)",
          },
        ],
      },
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="firstcontainerchart">
        <div className="containerFluidchart">
          <div className="rowFlexchart">
            <div className="rowFlex1chart">
              <div className="colchart">
                <div className="rowTopchart1">
                  <div className="rowTopchart">
                    <div className="productstyle">Product</div>
                    <div className="reportstyle">Report</div>
                  </div>

                  <div className="rowTopchart11">
                    <MoreHorizIcon className="colorStyle" />
                    <CloseIcon className="colorStyle" />
                  </div>
                </div>
                <div className="RowWiswD">
                  <div className="rowD">
                    <div className="boxD"></div>
                    <div className="colD">
                      <div>Sales Report</div>
                      <div className="amountD">$4,136</div>
                    </div>
                  </div>
                  <div className="rowD">
                    <div className="boxD"></div>
                    <div className="colD">
                      <div>Annual Revenue</div>
                      <div className="amountD">$6,418</div>
                    </div>
                  </div>

                  <div className="rowD">
                    <div className="boxD"></div>
                    <div className="colD">
                      <div>Total Profit</div>
                      <div className="amountD">$3.915</div>
                    </div>
                  </div>
                </div>

                <div className="bobychart">
                  <div className="chart1">
                    <Bar
                      data={this.state.chartData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          xAxes: [
                            {
                              stacked: true,
                              barPercentage: 0.4,
                            },
                          ],
                          yAxes: [
                            {
                              stacked: true,
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowFlexchart11">
            <div className="rowFlex1chart225">
              <div className="colchart">
                <div className="bobychartLine">
                  <div className="rowTopchart">
                    <div className="productstyle">Order</div>
                    <div className="reportstyle">Received</div>
                  </div>
                  <div className="amountStyle">47,052</div>
                  <div className="rowTopchart12">
                    <div>24%Average</div>
                    <div>
                      <TrendingUpIcon />
                    </div>
                  </div>
                  <div className="chartStyle">
                    <Line
                      width={300}
                      height={40}
                      data={this.state.myData}
                      options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        elements: {
                          point: {
                            radius: 0,
                          },
                        },
                        legend: {
                          labels: {
                            boxWidth: 0,
                          },
                          display: false,
                        },
                        responsive: false,
                        scales: {
                          xAxes: [
                            {
                              ticks: {
                                display: false,
                              },
                              gridLines: {
                                display: false,
                              },
                            },
                          ],
                          yAxes: [
                            {
                              display: true,
                              ticks: {
                                display: false,
                              },
                              gridLines: {
                                display: false,
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rowFlex1chart22">
              <div className="colchart">
                <div className="bobychartLine">
                  <div className="rowTopchart">
                    <div className="productstyle">Total</div>
                    <div className="reportstyle">Sales</div>
                  </div>
                  <div className="amountStyle">152</div>
                  <div className="rowTopchart12">
                    <div>15%Average</div>
                    <div>
                      <TrendingDownIcon />
                    </div>
                  </div>
                  <div className="chart2Style">
                    <Line
                      width={300}
                      height={40}
                      data={this.state.myData1}
                      options={{
                        elements: {
                          point: {
                            radius: 0,
                          },
                        },
                        legend: {
                          labels: {
                            boxWidth: 0,
                          },
                          display: false,
                        },
                        responsive: false,
                        scales: {
                          xAxes: [
                            {
                              ticks: {
                                display: false,
                              },
                              gridLines: {
                                display: false,
                              },
                            },
                          ],
                          yAxes: [
                            {
                              ticks: {
                                display: false,
                              },
                              gridLines: {
                                display: false,
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rowFlex1chart22">
              <div className="colchart">
                <div className="bobychartLine">
                  <div className="rowTopchart">
                    <div className="productstyle">Revenue</div>
                  </div>
                  <div className="amountStyle">1612</div>
                  <div className="rowTopchart12">
                    <div>24%Average</div>
                    <div>
                      <TrendingUpIcon />
                    </div>
                  </div>
                  <div className="chart2Style">
                    <Line
                      width={300}
                      height={40}
                      data={this.state.myData2}
                      options={{
                        elements: {
                          point: {
                            radius: 0,
                          },
                        },
                        legend: {
                          labels: {
                            boxWidth: 0,
                          },
                          display: false,
                        },
                        responsive: false,
                        scales: {
                          xAxes: [
                            {
                              ticks: {
                                display: false,
                              },
                              gridLines: {
                                display: false,
                              },
                            },
                          ],
                          yAxes: [
                            {
                              ticks: {
                                display: false,
                              },
                              gridLines: {
                                display: false,
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowFlexchart11">
            <div className="rowFlex1chart235">
              <div className="colchart">
                <div className="bobychart">
                  <div className="insidechartbody">
                    <div className="rowTopchart1">
                      <div className="rowTopchart">
                        <div className="productstyle">Product</div>
                        <div className="reportstyle">Report</div>
                      </div>

                      <div className="rowTopchart11">
                        <MoreHorizIcon className="colorStyle" />
                        <CloseIcon className="colorStyle" />
                      </div>
                    </div>
                    <div className="rowTopchart">
                      <div className="productstyle">Note</div>
                      <div className="reportstyle">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </div>
                    </div>

                    <div className="chartCurvedata">
                      <Line
                        data={this.state.curveData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          elements: {
                            arc: {
                              broderWidth: 0,
                            },
                            point: {
                              radius: 0,
                            },
                          },
                          legend: {
                            labels: {
                              boxWidth: 0,
                            },
                            display: false,
                          },
                          scales: {
                            xAxes: [
                              {
                                gridLines: {
                                  display: false,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rowFlex1chart23">
              <div className="colchart">
                <div className="bobychart">
                  <div className="circlechart">
                    <div className="rowTopchart1">
                      <div className="rowTopchart">
                        <div className="productstyle">Total</div>
                        <div className="reportstyle">Revenue</div>
                      </div>

                      <div className="rowTopchart11">
                        <MoreHorizIcon className="colorStyle" />
                        <CloseIcon className="colorStyle" />
                      </div>
                    </div>

                    <div className="satification">
                      <div className="amountStyle">Total Sales</div>
                      <div>24,1345</div>

                      <div className="chart marginStyle">
                        <Doughnut
                          data={this.state.pieData}
                          options={{
                            cutoutPercentage: 85,
                            legend: {
                              labels: {
                                boxWidth: 0,
                              },
                              display: false,
                              position: "right",
                            },
                          }}
                        />
                      </div>
                      <div className="amountStyle">Satification</div>
                      <div className="rowTopchart12">
                        <div>47%Average</div>
                        <div>
                          <TrendingUpIcon />
                        </div>
                      </div>

                      <div className="chart blackBar">
                        <Bar
                          height={50}
                          data={this.state.blackchartdata}
                          options={{
                            legend: {
                              labels: {
                                boxWidth: 0,
                              },
                              display: false,
                            },
                            scales: {
                              xAxes: [
                                {
                                  barPercentage: 0.08,
                                  ticks: {
                                    display: false,
                                  },
                                  gridLines: {
                                    display: false,
                                  },
                                },
                              ],
                              yAxes: [
                                {
                                  ticks: {
                                    display: false,
                                  },
                                  gridLines: {
                                    display: false,
                                  },
                                },
                              ],
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowFlexchart11">
            <div className="rowFlex1chart235">
              <div className="colchart">
                <div className="bobychart">
                  <div className="insidechartbody">
                    <div className="rowTopchart1">
                      <div className="rowTopchart">
                        <div className="productstyle">Top</div>
                        <div className="reportstyle">Selling Country</div>
                      </div>
                    </div>

                    <div className="mapSize">
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "AIzaSyAacZ7xKGlwpnYdo5ZTmThj2jkuMzjHoqE",
                        }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text="My Marker"
                        />
                      </GoogleMapReact>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rowFlex1chart23">
              <div className="bobychart">
                <div className="rowTopchart123">
                  <div className="tableContainer">
                    <table>
                      <thead>
                        <tr>
                          <th align="Left" className="tableHeading">
                            Contrary
                          </th>
                          <th align="Left" className="tableHeading">
                            2016
                          </th>
                          <th align="Left" className="tableHeading">
                            2017
                          </th>
                          <th align="Left" className="tableHeading">
                            Change
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mobiledata.MapDetails.map((data) => {
                          return (
                            <tr key={data.id}>
                              <td className="tableHeading">{data.contrary}</td>
                              <td className="tableHeading">{data.year1}</td>
                              <td className="tableHeading">{data.year2}</td>
                              <td className="tableHeading">{data.change}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowFlexchart11">
            <div className="rowFlex1chart">
              <div className="colchart">
                <div className="bobychart">
                  <div className="widthvalue">
                    <div className="rowTopchart1">
                      <div className="rowTopchart">
                        <div className="productstyle">Recent</div>
                        <div className="reportstyle">Order</div>
                      </div>

                      <div className="rowTopchart11">
                        <MoreHorizIcon className="colorStyle" />
                        <CloseIcon className="colorStyle" />
                      </div>
                    </div>

                    <table>
                      <thead>
                        <tr>
                          <th align="Left" className="hashStyle">
                            #
                          </th>
                          <th align="Left" className="nameStyle">
                            Name
                          </th>
                          <th align="Left" className="itemStyle">
                            Item
                          </th>
                          <th align="Left" className="addressStyle">
                            Address
                          </th>
                          <th align="Left" className="qualityStyle">
                            Quality
                          </th>
                          <th align="Left" className="statusStyle">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mobiledata.PhoneDetails.map((data) => {
                          return (
                            <tr key={data.id}>
                              <td className="hashStyle">
                                <div className="greyBoxStyle"></div>
                              </td>
                              <td className="nameStyle">{data.Name}</td>
                              <td className="itemStyle">{data.Item}</td>
                              <td className="addressStyle">{data.Address}</td>
                              <td className="qualityStyle">{data.Quality}</td>
                              <td className="statusStyle">
                                <div>
                                  {data.Status === "DONE" ? (
                                    <span classNme="greenStyle">
                                      {data.Status}
                                    </span>
                                  ) : data.Status === "PENDING" ? (
                                    <span className="orangeStyle">
                                      {data.Status}
                                    </span>
                                  ) : (
                                    <span className="greyStyle">
                                      {data.Status}
                                    </span>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rowFlexchart11">
            <div className="rowFlex1chart235">
              <div className="colchart">
                <div className="bobychart">
                  <div className="insidechartbody">
                    <div className="rowTopchart1">
                      <div className="rowTopchart">
                        <div className="productstyle">New</div>
                        <div className="reportstyle">Customer Rating</div>
                      </div>

                      <div className="rowTopchart11">
                        <MoreHorizIcon className="colorStyle" />
                        <CloseIcon className="colorStyle" />
                      </div>
                    </div>

                    {mobiledata.profileDetails.map((data) => {
                      return (
                        <div className="rowTopchart11 marginStyle">
                          <div>
                            <img src={data.img} className="cardImgsize" />
                          </div>
                          <div className="reviewCointer">
                            <div>{data.Name}</div>
                            <div className="textproperty">{data.Reply}</div>
                            <div className="rowImage1">
                              <div className="rowImage">
                                <div>{data.Item}</div>
                                <div className="rating">
                                  <ReactStars
                                    size={15}
                                    name="rate1"
                                    count={5}
                                    value={data.rating}
                                  />
                                </div>
                              </div>
                              <div>{data.Date}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="rowFlex1chart23">
              <div className="bobychart">
                <div className="rowTopchart123">
                  <div className="gradient">
                    <img
                      src="../../assets/avatarProfile.jpg"
                      className="profile"
                    />
                  </div>
                  <div className="iconImagerow">
                    <img
                      src="../../assets/facebook2.png"
                      className="facebookiconImg"
                    />
                    <img
                      src="../../assets/twitter2.png"
                      className="twittericonImg"
                    />
                    <img
                      src="../../assets/instagram2.png"
                      className="instaiconImg"
                    />
                  </div>
                  <div className="centerpara marginStyle">
                    <div>795 Folsom Ave, Suite 600 San</div>
                  </div>
                  <div className="centerpara">
                    <div>Francisco, CADGE 94107</div>
                  </div>
                  <Divider />
                  <div className="lastrow">
                    <div className="columnflex">
                      <h2>98</h2>
                      <h4>Item Buy</h4>
                    </div>
                    <div className="columnflex">
                      <h2>78</h2>
                      <h4>Mobile</h4>
                    </div>
                    <div className="columnflex">
                      <h2>2,046$</h2>
                      <h4>Spent</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(DashboardChat);
