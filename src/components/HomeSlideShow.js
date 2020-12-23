
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



function HomeSlideShow(props){
    const image_urls=props.image_urls;
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <div className="slide-content" style={{position:'relative'}}>
                  <div>
                  <h1>hire skill</h1>
                  </div>
                  <div style={{position:"absolute"}}>
                     <img src={image_urls[0]}/>
                  </div>
              </div>
          </div>
          <div className="each-slide">
              <div className="slide-content" style={{position:'relative'}}>
                  <div>
                  <h1>stay connect more people </h1>
                  </div>
                  <div style={{position:"absolute"}}>
                     <img src={image_urls[1]}/>
                  </div>
              </div>
          </div>
          <div className="each-slide">
              <div className="slide-content" style={{position:'relative'}}>
                  <div>
                  <h1>make your development effective</h1>
                  </div>
                  <div style={{position:"absolute"}}>
                     <img src={image_urls[2]}/>
                  </div>
              </div>
          </div>
        </Slide>
      </div>
    )
}

export default HomeSlideShow;