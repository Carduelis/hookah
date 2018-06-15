import './styles/index.less';
import FullPage from '../../fullpage/src/core';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;
import template from './templates';
import forEachNode from './helpers/forEachNode';
if (isProduction) {
    console.log('Welcome to console!');
} else {
    console.log('Looks like we are in development mode!');
}

document.addEventListener('DOMContentLoaded', e => {
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = template;
    const sliderElement = document.getElementById('slider');
    class MySlider extends FullPage {
        sliderDidMount(props) {
            console.warn(props);
            onSlide(props);
        }
        sliderTransitionEnded({ slide, slides }) {}
        sliderDidTrigger(props) {
            console.warn(props);
            onSlide(props);
        }
        sliderWillTrigger({ slide, slides }) {}
    }
    const slider = new MySlider(sliderElement, {
        startSlide: 0
    });
    slider.init();
});

function onSlide(props) {
    const { slide, slides } = props;
    const { id } = slide.dataset;
    const topBarLinks = document.getElementsByClassName('menu-topbar__link');
    const leftBarLinks = document.getElementsByClassName('menu-leftbar__link');
    const leftBar = document.getElementsByClassName('menu-leftbar').item(0);
    console.log(topBarLinks);
    forEachNode(topBarLinks, link => {
        if (link.getAttribute('href').includes(id)) {
            link.dataset.state = 'active';
        } else {
            delete link.dataset.state;
        }
        if (link.dataset.parentId && id.includes(link.dataset.parentId)) {
            link.dataset.state = 'active';
        }
    });

    if (id.includes('menu')) {
        leftBar.dataset.state = 'active';
        leftBar.dataset.slide = id;
    } else {
        delete leftBar.dataset.state;
        delete leftBar.dataset.slide;
    }

    forEachNode(leftBarLinks, link => {
        if (link.getAttribute('href').includes(id)) {
            link.dataset.state = 'active';
        } else {
            delete link.dataset.state;
        }
    });
}
