import './styles/index.less';
import FullPage from '../../fullpage/src/core';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;
import template from './templates';
import forEachNode from './helpers/forEachNode';
import mapNode from './helpers/mapNode';
import times from './helpers/times';

const { loader, location } = window;

if (isProduction) {
    console.log('Welcome to console!');
} else {
    console.log('Looks like we are in development mode!');
}

document.addEventListener('DOMContentLoaded', e => {
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = template;
    const sliderElement = document.getElementById('slider');
    const reel = document.getElementById('reel');
    const mapContainer = document.getElementById('mapContainer');
    const map = document.getElementById('map');
    class MySlider extends FullPage {
        sliderDidMount(props) {
            console.warn(props);
            mapContainer.appendChild(map);
            onSlide(props);
            setSlideByHash(slider);
            calculateReel(reel);

            reel.addEventListener('click', event => {
                const clickedReelLink = event.path.find(node =>
                    node.classList.contains('reel-link')
                );
                reelRecenterBy(reel, clickedReelLink);
                calculateReel(reel);
            });

            window.addEventListener(
                'hashchange',
                () => {
                    setSlideByHash(slider);
                    // setReelById(reel, location.hash.substring(1));
                },
                false
            );
            if (loader) {
                loader.style.opacity = 0;
                loader.style.transform = 'translateY(-100%)';
            }
        }
        sliderTransitionEnded({ slide, slides }) {
            location.hash = `#${slide.dataset.id}`;
        }
        sliderDidTrigger(props) {
            onSlide(props);
            const { slide } = props;
            const { id } = slide.dataset;
            setReelById(reel, id);

            if (slide.dataset.id.includes('menu')) {
                reel.style.opacity = 0;
            } else {
                reel.style.opacity = 1;
            }
        }
        sliderWillTrigger({ slide, slides }) {}
    }
    const slider = new MySlider(sliderElement, {
        startSlide: 0
    });
    window.mySlider = slider;
    slider.init();

    let swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        // effect: 'flip',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        }
    });
});

function setSlideByHash(slider) {
    forEachNode(slider.slides, (slide, slideIndex) => {
        if (location.hash.includes(slide.dataset.id)) {
            slider.setSlide(slideIndex);
        }
    });
}

function setReelById(reel, id) {
    forEachNode(reel.children, reelLink => {
        if (reelLink.hasAttribute('href')) {
            const reelLinkId = reelLink.getAttribute('href').substring(1);
            if (reelLinkId === id) {
                reelRecenterBy(reel, reelLink);
            }
        }
    });
}

function onSlide(props) {
    const { slide, slides } = props;
    const { id } = slide.dataset;
    const topBarLinks = document.getElementsByClassName('menu-topbar__link');
    const leftBarLinks = document.getElementsByClassName('menu-leftbar__link');
    const leftBar = document.getElementsByClassName('menu-leftbar')[0];
    // console.log(topBarLinks);
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

const newReelNode = () => {
    const emptyReel = document.createElement('div');
    emptyReel.classList.add('reel-link');
    return emptyReel;
};

function calculateReel(reel) {
    forEachNode(reel.children, (node, i) => {
        const shift = Math.abs(i - Math.floor(reel.children.length / 2));
        const scaleFactor = shift === 0 ? 1.5 : 1 / Math.sqrt(shift);
        node.style.opacity = scaleFactor;
        node.style.transform = `translateX(${-shift * shift / 2}px)`;
        node.style.height = `${3.5 * scaleFactor}rem`;
        const number = node.children.item(0);
        if (number !== null) {
            number.style.transform = `scale(${scaleFactor})`;
        }
    });
}
const reelRecenterBy = (reel, targetReelLink) => {
    const nodesToRemove = mapNode(reel.children)
        .filter(node => node.childElementCount === 0)
        .map(item => reel.removeChild(item));

    const reelLinks = mapNode(reel.children);

    const centeredIndex = reelLinks.indexOf(targetReelLink);
    console.log(centeredIndex);
    const index = centeredIndex + 1;
    const newEmptyItemsBefore = reelLinks.length - index * 2 + 1;
    const newEmptyItemsAfter =
        reelLinks.length - ((reelLinks.length - index) * 2 + 1);

    console.log({
        all: reelLinks.length,
        index,
        newEmptyItemsBefore,
        newEmptyItemsAfter
    });
    // const isEven = reelLinks % 2 === 0;
    if (newEmptyItemsBefore > 0) {
        times(newEmptyItemsBefore).forEach(() => {
            reel.prepend(newReelNode());
        });
    }

    if (newEmptyItemsAfter > 0) {
        times(newEmptyItemsAfter).forEach(() => {
            reel.append(newReelNode());
        });
    }
    calculateReel(reel);
};
