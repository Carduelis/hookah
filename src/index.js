import './styles/index.less';
import FullPage from '../../fullpage/src/core';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;
import template from './templates';

if (isProduction) {
    console.log('Welcome to console!');
} else {
    console.log('Looks like we are in development mode!');
}

document.addEventListener('DOMContentLoaded', e => {
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = template;
    const sliderElement = document.getElementById('slider');
    class MySlider extends FullPage {}
    const slider = new MySlider(sliderElement);
    slider.init();
});
