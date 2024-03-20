import { css } from 'sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

const generateWaveCSS = () => {
  const cssContent = `
    @keyframes waveAnimation {
      0% { transform: translateX(0) translateY(0); }
      50% { transform: translateX(-25%) translateY(-5%); }
      100% { transform: translateX(0) translateY(0); }
    }

    .wave {
      animation: waveAnimation 10s ease-in-out infinite;
      background: linear-gradient(to top, #0077b6, #90e0ef);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  `;

  return postcss([autoprefixer])
    .process(cssContent, { from: undefined })
    .then(result => result.css);
};

const addWaveToElement = async (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  const waveAnimationCSS = await generateWaveCSS();
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = waveAnimationCSS;
  document.head.appendChild(styleSheet);

  const waveDiv = document.createElement('div');
  waveDiv.className = 'wave';
  element.appendChild(waveDiv);
};

export { addWaveToElement };
