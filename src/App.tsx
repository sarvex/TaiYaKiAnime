import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {useMediaQuery} from 'react-responsive';
import styled from 'styled-components';
import mock1 from './Assets/screenshot_main.png';

import trackerMock from './Assets/screenshot_tracker.png';
import updateStatusMock from './Assets/screenshot_update_status.png';
import queueMock from './Assets/screenshot_queue.png';
import spoilerMock from './Assets/screenshot_spoiler.png';

import background1 from './Assets/Background/background1.jpg';
import background2 from './Assets/Background/background_2.png';
import background3 from './Assets/Background/background_3.jpg';
import { FiGlobe, FiRss, FiBookOpen } from "react-icons/fi";
import {useSpring, animated} from 'react-spring';

function App() {

  const [enter, setEnter] = useState<boolean>(false);
  const props = useSpring({
    config: {duration: 1450},
    to: {opacity: 1, transform: 'scale(1)'},
    from: {opacity: 0, transform: 'scale(0.85)'}
  });

  useEffect(() => {
    setEnter(true);
  }, [])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)'
  // });

  const mock1Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTimeout(() => {
      //mock1Ref.current!.scrollIntoView({behavior: 'smooth'})
    }, 500)
  }, []);

  const View = styled.header`
  display: flex;
  flex: 1;
  background: #31055b;
  min-height: auto;
  flex-direction: row;
  `;
  
  const ViewMobile = styled.header`
  display: flex;
  flex: 1;
  background: #31055b;
  flex-direction: column;
  position: relative;
  `;

  const Button = styled.button`
  border-radius: 6pt;
  background-color: #48bf84;
  color: white;
  min-height: 45pt;
  width: 40%;
  font-size: 19pt;
  font-weight: 600;
  border: none;
  margin-top: 12pt;
  &:hover{
    background-color: green;
  }
 `;

  const ButtonMobile = styled.button`
  background-color: #48bf84;
  color: white;
  font-size: 19pt;
  font-weight: 600;
  border: none;
 `;


  const ScreenShotImage = styled.img`
  height: 125vh;
  align-self: center;
  `;

  const ScreenShotImageMobile = styled.img`
  align-self: center;
  `;

  const TextView = styled.div`
  width: 50%;
  align-self: center;
  justify-content: center;
  padding: 5rem;
  display: flex;
  flex-direction: column
  `;

  const BoldText = styled.span`
  font-size: 45pt;
  font-family: Poppins;
  font-weight: bold;
  color: white;
  text-align: left;
  white-space: pre-wrap;
  `; 
  
  const BoldTextMobile = styled.span`
  font-size: 25pt;
  font-family: Poppins;
  font-weight: bold;
  color: white;
  white-space: pre-wrap;
  `; 

  const RegularText = styled.span`
  font-size: 17pt;
  font-family: Open Sans;
  font-weight: 600;
  color: white;
  text-align: left;
  `;

const RegularTextMobile = styled.span`
  font-size: 15pt;
  font-family: Open Sans;
  font-weight: bolder;
  color: white;
  `;

  const _onClickDownload = () => {
   window.open('https://github.com/Michael24884/TaiYaKiAnime/') 
  }

  const Block = (index: number, title: string, description: string,) => {
    return (
      <div className="Block">
        {index === 0 ? <FiGlobe size={60} color={'white'} />: index === 1 ? <FiRss size={60} color={'white'} /> : <FiBookOpen size={60} color={'white'} />}
        <BoldText style={{textAlign: 'center', fontSize: 30, marginTop: 8}}>{title}</BoldText>
        <RegularText style={{marginTop: 8, textAlign: 'center', fontSize: 21 }}>{description}</RegularText>
      </div>
    )
  };

  const DesktopRender = () => {
    return (
      <div className="App" >
        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: 825, backgroundColor: 'pink' }}>
          <View style={{flexDirection: 'row'}}>
          <TextView>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            
            <BoldText><BoldText style={{color: '#d129af'}}>Taiyaki</BoldText> an anime app of the century</BoldText>
            </div>
            <RegularText style={{marginTop: 12, width: '75%'}}>Watch your anime and track them all on your favorite tracker. And More</RegularText>
            <RegularText  style={{marginTop: 12, color: 'orange'}}>Free. No Ads. Forever.</RegularText>
            <Button onClick={_onClickDownload} >View on Github</Button>
            <RegularText style={{fontSize: 16, textAlign: 'center', width: '40%', marginTop: 5}}>Or scroll down to see more</RegularText>
          </TextView>
          <animated.img ref={mock1Ref} style={props}  src={mock1} alt={'mock1'} className="Image-View" />
          </View>
        </View>
  
         
  
        <View style={{overflow: 'hidden'}}>
           <img
          className="Background-Image"
          src={background1} alt="background_1"/>
          <div style={{position: 'absolute', flexDirection: 'row', display: 'flex'}}>
          <ScreenShotImage src={trackerMock} alt={'Multi Tracker'} />
          <TextView>
            <BoldText style={{fontSize: 40}}>Keep track of all the anime you've seen</BoldText>
            <RegularText style={{color: 'orange', marginTop: 8, marginBottom: 8}}>Taiyaki supports MyAnimeList, Anilist, SIMKL, and more to come.</RegularText>
            <RegularText>No need to worry about updating after every episode. Taiyaki does all the work for you.</RegularText>
          </TextView>
          <ScreenShotImage src={updateStatusMock} alt={'Updating Status'} />
          </div>
        </View>
  
  
        <View style={{overflow: "hidden", marginTop: 50}}>
          <img src={background2} alt={'background_2'} className="Background-Image" />
        <div style={{position: 'absolute', flexDirection: 'row', display: 'flex'}}>
          <TextView style={{width: '40%'}}>
            <BoldText style={{fontSize: 40}}>Watch it all at once</BoldText>
            <RegularText style={{color: 'orange', marginTop: 8, marginBottom: 8}}>Queue support to binge watch all your favorite anime</RegularText>
            <RegularText>With queue you don't need to keep going out of the player. Episodes play right after another, true binge watching.</RegularText>
          </TextView>
          <ScreenShotImage style={{marginLeft: 50}} src={queueMock} alt={'Queue'} />
          </div>
        </View>
  
  
        <View style={{overflow: "hidden", marginTop: 50}}>
          <img src={background3} className="Background-Image" alt={'background_3'} />
         
          <div style={{position: 'absolute', flexDirection: 'row', display: 'flex', flex: 1, justifyContent: 'center'}}>
          <ScreenShotImage style={{marginLeft: 50}} src={spoilerMock} alt={'Anti-Spoiler'} />
          <TextView style={{width: '40%'}}>
            <BoldText style={{fontSize: 40, textAlign: 'right'}}>Data powered episodes</BoldText>
            <RegularText style={{color: 'orange', marginTop: 8, textAlign: 'right', marginBottom: 8}}>Powered by SIMKL</RegularText>
            <RegularText style={{textAlign: 'right'}}>With data from SIMKL, each episode has synopsis so you can get an idea. With the ability to blur out spoilers for unwatched episodes, you won't have to worry about accidental reveals.</RegularText>
          </TextView>
          </div>
        </View>
  
      <View style={{height: 250, marginTop: 10, marginBottom: 18, flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly'}}>
        {Block(0, 'Community Driven', 'Taiyaki is inspired by the community and is adaptive to any suggestions')}
        {Block(1, 'Multiple Sources', 'Sources are web scraped allowing flexibility in choices and multi-language support')}
        {Block(2, 'Open Source', 'This project is open sourced and available to the public')}
      </View>
  
      </div>
    )
  }

  // const _MobileImageBackground = (): JSX.Element => {
  //   return (
  //     <ViewMobile>
  //       <img src={background1} alt={'background_1'} className="Background-Image" />
  //     </ViewMobile>
  //   )
  // }

  const MobileRender = () => {
    return <ViewMobile className="App-Mobile">
      <BoldTextMobile style={{marginTop: 25}} className="Text-Mobile"><BoldTextMobile style={{color: '#d129af'}}>Taiyaki</BoldTextMobile> an anime app of the century</BoldTextMobile>
      <ScreenShotImageMobile src={mock1} className="Image-Mobile" />
      <RegularTextMobile className="Text-Mobile">Watch your anime and track them all on your favorite tracker. And More</RegularTextMobile>
     
      <div style={{flexDirection: 'column', display: 'flex'}}>
      <ButtonMobile onClick={_onClickDownload} className="Button-Mobile">View on Github</ButtonMobile>
      <RegularTextMobile className="ScrollDown-Text" style={{fontSize: 14, fontWeight: 'bold'}}>Or scroll down to see more</RegularTextMobile>
      </div>

      <ViewMobile className="View-Mobile-Extra">
        <img src={background1} alt={'background_1'} className="Background-Image" />
       
        <div className="div-mobile">
          <ScreenShotImageMobile  src={trackerMock} className="Image-Mobile" />
          <BoldTextMobile className="Text-Mobile">Keep track of all the anime you've seen</BoldTextMobile>
          <ScreenShotImageMobile  src={updateStatusMock} className="Image-Mobile" />
          <RegularTextMobile className="Text-Mobile" style={{color: 'orange'}}>Taiyaki supports MyAnimeList, Anilist, SIMKL, and more to come.</RegularTextMobile>

          <RegularTextMobile className="Text-Mobile">No need to worry about updating after every episode. Taiyaki does all the work for you.</RegularTextMobile>
        </div>
      </ViewMobile>
      
      
      <ViewMobile className="View-Mobile">
        <img src={background2} alt={'background_2'} className="Background-Image" />

        <div className="div-mobile">
          <ScreenShotImageMobile  src={queueMock} className="Image-Mobile" />
          <BoldTextMobile className="Text-Mobile">Watch it all at once</BoldTextMobile>
          <RegularTextMobile className="Text-Mobile" style={{color: 'orange'}}>Queue support to binge watch all your favorite anime</RegularTextMobile>
          <RegularTextMobile className="Text-Mobile">With queue you don't need to keep going out of the player. Episodes play right after another, true binge watching.</RegularTextMobile>
        </div>

      </ViewMobile>
     
      <ViewMobile className="View-Mobile">
        <img src={background3} alt={'background_2'} className="Background-Image" />

        <div className="div-mobile">
          <ScreenShotImageMobile  src={spoilerMock} className="Image-Mobile" />
          <BoldTextMobile className="Text-Mobile">Data powered episodes</BoldTextMobile>
          <RegularTextMobile className="Text-Mobile" style={{color: 'orange'}}>Powered by SIMKL</RegularTextMobile>
          <RegularTextMobile className="Text-Mobile">With data from SIMKL, each episode has synopsis so you can get an idea. With the ability to blur out spoilers for unwatched episodes, you won't have to worry about accidental reveals.</RegularTextMobile>
        </div>

      </ViewMobile>

      <ViewMobile className="View-Mobile">
      {Block(0, 'Community Driven', 'Taiyaki is inspired by the community and is adaptive to any suggestions')}
        {Block(1, 'Multiple Sources', 'Sources are web scraped allowing flexibility in choices and multi-language support')}
        {Block(2, 'Open Source', 'This project is open sourced and available to the public')}
      </ViewMobile>

      


    </ViewMobile>
  };

  return isDesktopOrLaptop ? DesktopRender() : MobileRender();

 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  //);
}

export default App;
