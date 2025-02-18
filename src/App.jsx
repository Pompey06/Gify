import './App.css'
//import { useState } from 'react';
//import Copyable from './Components/Copyable';
import x from './assets/x.svg'
import tg from './assets/tg.svg'
import screen from './assets/screen.svg'
import tools from './assets/tools.svg'
import logo from './assets/logo.svg'
import create from './assets/create.png'
import connect from './assets/connect.png'
import line from './assets/line.svg'
import dot from './assets/dot.svg'
import content from './assets/content.png'
import title from './assets/title.png'
import try_ from './assets/try.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageSwiper from './Components/Swiper/ImageSwiper';
import TitleButton from './Components/TitleButton/TitleButton';
   import ReviewSwiper from './Components/Swiper/ReviewSwiper';
   import './Components/Swiper/Swiper.css';
   import animate from './assets/animate.png'
   import upload from './assets/upload.png'
   import icon from './assets/icon.svg'
   import chat from './assets/chat__bg.svg'
   import phase1 from './assets/01.svg'
   import phase2 from './assets/02.svg'
   import phase3 from './assets/03.svg'
   import phase4 from './assets/04.svg'
   import phase5 from './assets/05.svg'
   import footer__logo from './assets/footer__logo.png'
   //import roadmap from './assets/roadmap__bg.png'
   import documents from './assets/book.svg'
   import footer__tg from './assets/footer__tg.svg'
   import footer__x from './assets/footer__x.svg'
   import faq from './assets/faq.png'
   
import Spollers from './Components/Spollers'
import RoadMapItem from './Components/RoadMapItem'

function App() {
   //const [showModal, setShowModal] = useState(false);

   //const handleCopySuccess = () => {
   //  setShowModal(true);
   //  setTimeout(() => setShowModal(false), 2000);
   //};

   return (
      <>
         <div className="wrapper bg__wrap">
         <div className="content _container">
            <header className="header">
               <div className="header__left">
                  <div className="logo">
                     <img src={logo} alt="" />
                  </div>
                  <img src={line} alt="" className="line" />
                  
                  <div className="networks">
                     <a href="#" className="_scale_hover">
                        <img src={tg} alt="" />
                     </a>
                     <a href="#" className="_scale_hover">
                        <img src={x} alt="" />
                     </a>
                     <a href="#" className="_scale_hover">
                        <img src={screen} alt="" />
                     </a>
                     <a href="#" className="_scale_hover">
                        <img src={tools} alt="" />
                     </a>
                  </div>
                  <img src={line} alt="" className="line" />
               </div>
               <nav className="menu">
                  <a href="#" className="menu__link _scale_hover">Gallery</a>
                  <img src={dot} alt="" className="dot" />
                  <a href="#" className="menu__link _scale_hover">App</a>
                  <img src={dot} alt="" className="dot" />
                  <a href="#" className="menu__link _scale_hover">Roadmap</a>
                  <img src={dot} alt="" className="dot" />
                  <a href="#" className="menu__link _scale_hover">Feedback</a>
                  <img src={dot} alt="" className="dot" />
                  <a href="#" className="menu__link _scale_hover">FAQ</a>
               </nav>
               <div className="header__right">
                  <img src={create} alt="" className="create _scale_hover" />
                  <img src={line} alt="" className="line" />
                  <img src={connect} alt="" className="connect _scale_hover" />
               </div>
            </header>
            <section className="first">
               <div className="first__left">
                  <img src={title} alt="" className="title" />
                  <img src={try_} alt="" className="try _scale_hover" />
               </div>
               <img src={content} alt="" className="main_content" />

            </section>
            <div className="gallery_section">
               <TitleButton
            title=""
            title2="GIFY AI"
            buttonText="Gallery"
            />
            </div>
            <section className="gallery">

            <ImageSwiper />
            </section>
            <section className="test">
            <TitleButton
            title="Try GIFY AI"
            buttonText="GIFY AI"
            />
            <div className="chat">
               <img src={chat} alt="" className="chat__bg" />
               <div className="chat__window">
                  <img src={icon} alt="" className="icon" />
               </div>
               <div className="chat__form">
                  <input id="file" type="file" className="none" />
                  <label htmlFor="file">
                  <img src={upload} alt="" className="upload _scale_hover" />
                  </label>
                  <img src={line} alt="" className="line" />
                  <input className="chat__input" type="text" placeholder='Write your prompt' />
                  <img src={animate} alt="" className="animate _scale_hover" />
               </div>
            </div>
            </section>
            <section className="roadmap__section">
               <TitleButton
            title="Roadmap"
            buttonText="Roadmap"
            />
            <div className="roadmap">
               {/*<img src={roadmap} alt="" className="roadmap__bg" />*/}
               <RoadMapItem
                 title="Phase 1"
                 list={['White Paper creation', 'Website launch', 'MVP development', 'Social media verification', 'Pre-launch marketing', 'Community building']}
                 icon={phase1}
                 type="left"
               />
               <RoadMapItem
                 title="Phase 2"
                 list={['PumpFun token launch', 'Post-launch marketing', 'Listings on CMC/CG', 'AI 3D optimization']}
                 icon={phase2}
                 type="right"
               />
               <RoadMapItem
                 title="Phase 3"
                 list={['Second Wave of Major Marketing', 'Partnerships with AI Devs', 'Go Global with the Platform', 'AI Agent in Real Businesses']}
                 icon={phase3}
                 type="left"
               />
               <RoadMapItem
                 title="Phase 4"
                 list={['Expand features', 'Collab with AI agents', 'Boost algorithms', 'Grow team & partners']}
                 icon={phase4}
                 type="right"
               />
               <RoadMapItem
                 title="Phase 5"
                 list={['Second Wave of Major Marketing', 'Partnerships with AI Devs', 'Go Global with the Platform', 'AI Agent in Real Businesses']}
                 icon={phase5}
                 type="left"
                 isLast={true}
               />
            </div>
            </section>
            <div className="feedback__title">
               <TitleButton
            title="Feedback"
            buttonText="Feedback"
            />
           </div>
         </div>
           
            <section className="feedback">
               <ReviewSwiper />
           </section>

           <div className="_container">
  <section className="faq">
    <div className="faq__left">
      <TitleButton
        title="Frequently Asked Questions"
        buttonText="FAQ"
      />
      <img src={faq} alt="" className="faq__bg" />
    </div>
    <div className="faq__right">
      <Spollers />
    </div>
  </section>
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__left">
        <img src={footer__logo} alt="" className="footer__logo" />
        <p className="footer__text">[your AI agent]</p>
      </div>
      <div className="footer__right">
        <div className="site__map">
          <h4 className="site__map_title">Site Map</h4>
          <a href="#" className="site__map_link _scale_hover">Gallery</a>
          <a href="#" className="site__map_link _scale_hover">App</a>
          <a href="#" className="site__map_link _scale_hover">Roadmap</a>
          <a href="#" className="site__map_link _scale_hover">Feedback</a>
          <a href="#" className="site__map_link _scale_hover">FAQ</a>
        </div>
        <div className="site__map resources">
          <h4 className="site__map_title">Resources</h4>
          <a href="#" className="site__map_link _scale_hover">
            <img src={documents} alt="" />
            Documents
          </a>
          <a href="#" className="site__map_link _scale_hover">
            <img src={footer__tg} alt="" />
            Telegram
          </a>
          <a href="#" className="site__map_link _scale_hover">
            <img src={footer__x} alt="" />
            x
          </a>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <p className="copyright">© GIFY AI, All Rights Reserved</p>
    </div>
  </footer>
</div>

      </div>
      {/*<div className={`copied_modal ${showModal ? '_show' : ''}`}>
        copied to clipboard
      </div>*/}
    </>
  )
}

export default App
