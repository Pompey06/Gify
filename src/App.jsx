import "./App.css";
import "aos/dist/aos.css";
import content from "./assets/content.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageSwiper from "./Components/Swiper/ImageSwiper";
import TitleButton from "./Components/TitleButton/TitleButton";
import ReviewSwiper from "./Components/Swiper/ReviewSwiper";
import "./Components/Swiper/Swiper.css";
import phase1 from "./assets/01.svg";
import phase2 from "./assets/02.svg";
import phase3 from "./assets/03.svg";
import phase4 from "./assets/04.svg";
import phase5 from "./assets/05.svg";
import footer__logo from "./assets/footer__logo.png";
//import roadmap from './assets/roadmap__bg.png'
import documents from "./assets/book.svg";
import footer__tg from "./assets/footer__tg.svg";
import footer__x from "./assets/footer__x.svg";
import faq from "./assets/faq.png";
import { useState } from "react";
import Spollers from "./Components/Spollers";
import RoadMapItem from "./Components/RoadMapItem";
import Chat from "./Components/Chat";
import Header from "./Components/Header";
import try_svg from "./assets/try.svg";
import AnimationWrap from "./Components/AnimationWrap";
function App() {
  //const [showModal, setShowModal] = useState(false);

  //const handleCopySuccess = () => {
  //  setShowModal(true);
  //  setTimeout(() => setShowModal(false), 2000);
  //};
  const [chatTitle, setChatTitle] = useState("Try GIFY AI");
  const [chatTitleClass, setChatTitleClass] = useState("");

  return (
    <>
      <div className="wrapper bg__wrap">
        <div className="content _container">
          <Header />
          <section className="first">
            <div>
              <div className="first__left">
                <div className="title__wrap">
                  <AnimationWrap noAnimate className="animation__top_t">
                    <div className="title__wrap_item title__wrap_item_1">
                      Gify AI
                    </div>
                  </AnimationWrap>
                  <div className="title__wrap_item title__wrap_item_2">
                    <AnimationWrap
                      delay={0.1}
                      noAnimate
                      className="title__wrap_item animation__left_t"
                    >
                      Your
                    </AnimationWrap>
                    <div className="first__left_text_wrap">
                      <AnimationWrap
                        delay={0.3}
                        noAnimate
                        className="animation__scale"
                      >
                        <p className="first__left_text hide-700">
                          for instant viral video creation and effortless NFT
                          minting in one click
                        </p>
                      </AnimationWrap>
                      <AnimationWrap
                        delay={0.3}
                        noAnimate
                        className="animation__right_t"
                      >
                        <div className="ai">AI-Powered</div>
                      </AnimationWrap>
                    </div>
                  </div>
                  <AnimationWrap
                    delay={0.6}
                    noAnimate
                    className="animation__bottom_t"
                  >
                    <div className="title__wrap_item">AI Agent</div>
                  </AnimationWrap>
                </div>
                <AnimationWrap
                  delay={0.8}
                  noAnimate
                  className="animation__top_t"
                >
                  <p className="first__left_text show-700">
                    for instant viral video creation and effortless NFT minting
                    in one click
                  </p>
                </AnimationWrap>

                <AnimationWrap
                  delay={1}
                  noAnimate
                  className="animation__bottom_t"
                >
                  <a href="#app" className="hide-700">
                    <button className="try _scale_hover">
                      Try GIFY AI <img src={try_svg} alt="" />{" "}
                    </button>
                  </a>
                </AnimationWrap>
              </div>
            </div>
            <AnimationWrap delay={0.5} noAnimate className="animation__right_t">
              <img src={content} alt="" className="main_content" />
            </AnimationWrap>
            <AnimationWrap delay={1} noAnimate className="animation__bottom_t">
              <a href="#app" className="show-700">
                <button className="try _scale_hover">
                  Try GIFY AI <img src={try_svg} alt="" />{" "}
                </button>
              </a>
            </AnimationWrap>
          </section>
          <div id="gallery" className="gallery_section">
            <TitleButton
              title="Gallery"
              title2="GIFY AI"
              buttonText="Gallery"
            />
          </div>
          <section className="gallery">
            <ImageSwiper />
          </section>
          <section className="test">
            <TitleButton
              title={chatTitle}
              buttonText="GIFY AI"
              titleClass={chatTitleClass}
            />
            <Chat
              setChatTitle={setChatTitle}
              setChatTitleClass={setChatTitleClass}
            />
          </section>
          <section id="roadmap" className="roadmap__section ">
            <TitleButton title="Roadmap" buttonText="Roadmap" />
            <div className="roadmap">
              <AnimationWrap>
                <RoadMapItem
                  title="Phase 1"
                  list={[
                    "Creating an MVP ",
                    "Whitepaper",
                    "Pre-Launch Marketing",
                    "Launching official channels",
                  ]}
                  icon={phase1}
                  type="left"
                />
              </AnimationWrap>
              <AnimationWrap delay={0.5}>
                <RoadMapItem
                  title="Phase 2"
                  list={[
                    "Launch on Pump Fun",
                    "Platform optimization ",
                    "Marketing Stage 1",
                  ]}
                  icon={phase2}
                  type="right"
                />
              </AnimationWrap>
              <AnimationWrap delay={0.5}>
                <RoadMapItem
                  title="Phase 3"
                  list={[
                    "Second Wave of Major Marketing",
                    "Partnerships with AI Devs",
                    "Go Global with the Platform",
                    "AI Agent in Real Businesses",
                  ]}
                  icon={phase3}
                  type="left"
                />
              </AnimationWrap>
              <AnimationWrap delay={0.5}>
                <RoadMapItem
                  title="Phase 4"
                  list={[
                    "Expand features",
                    "Collab with AI agents",
                    "Boost algorithms",
                    "Grow team & partners",
                  ]}
                  icon={phase4}
                  type="right"
                />
              </AnimationWrap>
              <AnimationWrap delay={0.5}>
                <RoadMapItem
                  title="Phase 5"
                  list={[
                    "Second Wave of Major Marketing",
                    "Partnerships with AI Devs",
                    "Go Global with the Platform",
                    "AI Agent in Real Businesses",
                  ]}
                  icon={phase5}
                  type="left"
                  isLast={true}
                />
              </AnimationWrap>
            </div>
          </section>
          <div id="feedback" className="feedback__title">
            <TitleButton
              title="Feedback"
              title2="on GIFY AI"
              buttonText="Feedback"
            />
          </div>
        </div>

        <section className="feedback">
          <ReviewSwiper />
        </section>

        <div className="_container">
          <section id="faq" className="faq">
            <div className="faq__left">
              <TitleButton
                title="Frequently Asked Questions"
                buttonText="FAQ"
              />
              <AnimationWrap
                delay={0.5}
                noAnimate
                className="animation__right_t"
              >
                <img src={faq} alt="" className="faq__bg" />
              </AnimationWrap>
            </div>
            <AnimationWrap
              delay={0.8}
              noAnimate
              className="faq__right animation__left_t"
            >
              <Spollers />
            </AnimationWrap>
          </section>
          <footer className="footer">
            <div className="footer__top">
              <AnimationWrap delay={0.2} noAnimate className="footer__left animation__left_t">
                <img src={footer__logo} alt="" className="footer__logo" />
                <div className="footer__right show-1100">
                  <div className="site__map">
                    <h4 className="site__map_title">Site Map</h4>
                    <a href="#" className="site__map_link _scale_hover">
                      Gallery
                    </a>
                    <a href="#" className="site__map_link _scale_hover">
                      App
                    </a>
                    <a href="#" className="site__map_link _scale_hover">
                      Roadmap
                    </a>
                    <a href="#" className="site__map_link _scale_hover">
                      Feedback
                    </a>
                    <a href="#" className="site__map_link _scale_hover">
                      FAQ
                    </a>
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
                      <img src={footer__x} alt="" />x
                    </a>
                  </div>
                </div>
                <p className="footer__text hide-700">[your AI agent]</p>
                <p className="footer__text show-700">
                  [your] <br />
                  [AI agent]
                </p>
              </AnimationWrap>
              <AnimationWrap delay={0.2} noAnimate className="footer__right hide-1100 animation__right_t">
                <div className="site__map">
                  <h4 className="site__map_title">Site Map</h4>
                  <a href="#gallery" className="site__map_link _scale_hover">
                    Gallery
                  </a>
                  <a href="#app" className="site__map_link _scale_hover">
                    App
                  </a>
                  <a href="#roadmap" className="site__map_link _scale_hover">
                    Roadmap
                  </a>
                  <a href="#feedback" className="site__map_link _scale_hover">
                    Feedback
                  </a>
                  <a href="#faq" className="site__map_link _scale_hover">
                    FAQ
                  </a>
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
                    <img src={footer__x} alt="" />x
                  </a>
                </div>
              </AnimationWrap>
            </div>
            <AnimationWrap delay={0.5} noAnimate className="footer__bottom animation__top_t">
              <p className="copyright">© GIFY AI, All Rights Reserved</p>
            </AnimationWrap>
          </footer>
        </div>
      </div>
      {/*<div className={`copied_modal ${showModal ? '_show' : ''}`}>
        copied to clipboard
      </div>*/}
    </>
  );
}

export default App;
