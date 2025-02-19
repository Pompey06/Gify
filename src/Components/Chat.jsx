/* eslint-disable react/prop-types */
import { useState } from 'react';
import chat from '../assets/chat__bg.svg';
import icon from '../assets/icon.svg';
import line from '../assets/line.svg';
import loaderImage from '../assets/loader.png';
import again from '../assets/again.svg';
import download from '../assets/download.svg';
import mint from '../assets/mint.svg';
import check from '../assets/check.svg';
import upload from '../assets/upload.svg';
import animate from '../assets/animate.svg';

const Chat = ({setChatTitle, setChatTitleClass}) => {
  // Состояние может принимать значения "idle", "loading" и "result"
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loadingPhase, setLoadingPhase] = useState("idle");
  const [minted, setMinted] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
    }
  };

  const handleAnimateClick = () => {
    setLoadingPhase("loading");
    // Через 5 секунд переключаемся на состояние "result"
    setTimeout(() => {
      setLoadingPhase("result");
    }, 5000);
  };

  const handleDownload = () => {
    // Создаем временную ссылку для скачивания изображения (используем icon)
    const link = document.createElement('a');
    link.href = icon;
    link.download = 'icon.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loadingPhase === "loading") {
    return (
      <div className="chat chat--loading">
        <div className="chat__loading">
          <div className="chat__loading-column loading-column_left">
            <img src={loaderImage} alt="Loader" className="loader" />
          </div>
          <div className="chat__loading-column loading-column_right">
            <h2 className="loading-column_title">
              <span>Please</span> Wait
            </h2>
            <p className="loading-column_text">
              Video generation usually takes <span>up to 2 minutes.</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (loadingPhase === "result") {
    return (
      <div className="chat chat--loading result">
        <div className="chat__loading">
          <div className="chat__loading-column loading-column_left">
            <img src={icon} alt="Icon" className="icon" />
          </div>
          <div className="chat__loading-column loading-column_right">
            {minted ? (
              <>
                <h2 className="loading-column_title mb-10">NFT Title</h2>
                <h2 className="loading-column_title mb-10">Description</h2>
                <div className="loading-column_buttons">
                  <button
                    className="check-button _scale_hover button color__button"
                  >
                    <img src={check} alt="Check" /> Check
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="loading-column_title ">NFT Title</h2>
                <input type="text" className="loading-column_input" placeholder="NFT Title" />
                <h2 className="loading-column_title ">Description</h2>
                <input type="text" className="loading-column_input" placeholder="Description" />
                <div className="loading-column_buttons">
                  <button
                    className="mint _scale_hover button color__button"
                    
                    onClick={() => {setMinted(true); setChatTitle(<>NFT <span>Minted</span></>);
                     setChatTitleClass("chat__title_minted");
                    }}
                  >
                    <img src={mint} alt="Mint" /> Mint
                  </button>
                  <button
                    className="download _scale_hover button black__button"
                    onClick={handleDownload}
                     >
                    <img src={download} alt="Download" /> Download
                  </button>
                  <button
                    className="again _scale_hover button white__button"
                    onClick={() => {
                      setLoadingPhase("idle");
                      setMinted(false);
                      setUploadedImage(null);
                      setChatTitle("Try GIFY AI");
                      setChatTitleClass("");
                    }}
                  >
                    <img src={again} alt="Again" /> Again
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Состояние "idle" – стандартный интерфейс чата
  return (
    <div id="app" className={`chat ${loadingPhase !== "idle" ? 'chat--loading' : ''}`}>
      <img src={chat} alt="Chat background" className="chat__bg" />
      <div className="chat__window">
        <img
          src={uploadedImage || icon}
          alt="Chat Icon"
          className={`icon ${uploadedImage ? 'uploaded' : ''}`}
        />
      </div>
      <div className="chat__form">
        <input id="file" type="file" className="none" onChange={handleFileChange} />
          <label htmlFor="file" className="upload white__button button _scale_hover">
            <img src={upload} alt="" /> Upload
        </label>
        <img src={line} alt="Line" className="line" />
        <input className="chat__input" type="text" placeholder="Write your prompt" />
        <button className={`animate animate black__button button  ${!uploadedImage ? 'disabled' : '_scale_hover'}`} onClick={uploadedImage ? handleAnimateClick : null}>
            <img src={animate} alt="" /> Animate
          </button>
      </div>
    </div>
  );
};

export default Chat;
