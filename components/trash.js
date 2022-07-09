import React, { Component } from "react";
import Slider from "react-slick";
import team from '../styles/team.module.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={team.t_cont}>
        <Slider {...settings}>
            <div className={team.team_content}>
                <div className={team.firstD}></div>
                <div className={team.team_imageC}>
                    <div className={team.team_image}></div>
                </div>
                <div className={team.team_D}>
                    <div className={team.team_DP}>
                        <div className={team.center}>
                            <div className={team.team_button}>
                                <h3>Jane</h3>
                                <h5>Web developer</h5>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiumod tempor incideient ut labbore et olore magna aliwua. Ouis
                            ipsum 
                        </p>
                    </div>
                </div>
            </div>   

            <div className={`${team.team_content}`}>
                <div className={team.firstD}></div>
                <div className={team.team_imageC}>
                    <div className={team.team_image}></div>
                </div>
                <div className={team.team_D}>
                    <div className={team.team_DP}>
                        <div className={team.center}>
                            <div className={team.team_button}>
                                <h3>Jane</h3>
                                <h5>Web developer</h5>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiumod tempor incideient ut labbore et olore magna aliwua. Ouis
                            ipsum 
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}