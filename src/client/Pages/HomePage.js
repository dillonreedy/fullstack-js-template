import React from "react";
import { connect } from "react-redux";
import LineChartWrapper from "../components/LineChartWrapper";
import { socket } from "../service/socket";
import { publish_points } from "../redux/charts/points";
import PrimaryButton from "../components/PrimaryButtonWrapper";

class HomePage extends React.Component {
  title = 'Home';

  chartPointsListener = (...args) => {
    const {publish_points} = this.props;
    const data = JSON.parse(args).data;
    publish_points(data);
  }

  componentDidMount() {
    socket.on("return points", this.chartPointsListener);

    socket.emit('load points');
  }

  componentWillUnmount() {
    socket.off('return points', this.chartPointsListener);
  }

  clickHandler = () => {
    socket.emit("add random point"); 
  }

  render() {
    return (
      <>
        <div
          className="hompage-layout"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="components-container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-around'
            }}
          >
            <div className="title-wrapper" style={{
              textAlign: "center"
            }}>
              <h1>Recharts</h1>
            </div>
            <LineChartWrapper pointsData={this.props.pointsData} />
            <PrimaryButton onClick={this.clickHandler}/>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { 
    pointsData: state.pointsReducer.pointsData 
  };
}

const mapDispatchToProps = {publish_points};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);