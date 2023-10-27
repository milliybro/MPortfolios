import { Fragment } from "react";
import "./style.scss";

const HomePage = () => {
  return (
    <Fragment>
      <div style={{
        marginTop: '50px'
      }}>
  <div className="intro">
    <h1>A Web Developer</h1>
    <p>I am a web developer and I love to create websites.</p>
    <button>Learn More</button>
  </div>
  <div className="achievements">
    <div className="work">
      <i className="fas fa-atom"></i>
      <p className="work-heading">Projects</p>
      <p className="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
    </div>
    <div className="work">
      <i className="fas fa-skiing"></i>
      <p className="work-heading">Skills</p>
      <p className="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
    </div>
    <div className="work">
      <i className="fas fa-ethernet"></i>
      <p className="work-heading">Network</p>
      <p className="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
    </div>
  </div>
  <div className="about-me">
    <div className="about-me-text">
      <h2>About Me</h2>
      <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
    </div>
    <img src="https://media.licdn.com/dms/image/D4D03AQEqrWuRDdj0sQ/profile-displayphoto-shrink_800_800/0/1694850129494?e=2147483647&v=beta&t=v11IRGhk2HFNL76unrG8lXokNmTAfW_o_-LY_K4y90E" alt="me"/>
  </div>
</div>
    </Fragment>
  );
};

export default HomePage;
