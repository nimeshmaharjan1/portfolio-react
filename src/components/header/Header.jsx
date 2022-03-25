import React from "react";
import "./Header.scss";
import CTA from "./CTA";
import heroImage from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillMount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <header>
        <div className="container header-container">
          <h5>Hello I'm</h5>
          <h1>Nimesh Maharjan</h1>
          <h5 className="text-light">Web Developer</h5>
          <h1 className="clock">{this.state.date.toLocaleTimeString()}</h1>
          <CTA />
          <HeaderSocials />
          <div className="hero-image">
            <img src={heroImage} alt="" />
          </div>
          <a href="" className="scroll-down">
            Scroll Down
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
