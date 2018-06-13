import topbar from './topbar.ejs';
import leftbar from './leftbar.ejs';
import main from './main.ejs';
import slidesTemplates from './slides';
import preloader from './preloader.ejs';
import data from '../data';
import slideWrapper from './slideWrapper.ejs';
import pricedList from './pricedList.ejs';
import slideHeading from './slideHeading.ejs';

const {
    tea,
    bar,
    bowls,
    promo,
    highlightes,
    entertainment,
    bowl_replacement,
    tobacco,
    slides
} = data;

const customSlideData = slide => {
    console.log(slide.id);
    switch (slide.id) {
        case 'index':
            return {};
        case 'about':
            return {
                highlightes,
                slideHeading: slideHeading(slide)
            };
        case 'contacts':
            return {};
        case 'gallery':
            return {};
        case 'menu':
            return {};
        case 'menuHookah':
            return {
                bowl_replacement,
                tobacco,
                pricedListBowl: pricedList(bowls)
            };
        case 'menuTea':
            return {
                pricedListTea1: pricedList(tea.slice(0, 6)),
                pricedListTea2: pricedList(tea.slice(6, 12)),
                pricedListTea3: pricedList(tea.slice(12, 18))
            };
        case 'menuBar':
            return {
                pricedListBar1: pricedList(bar.slice(0, 6)),
                pricedListBar2: pricedList(bar.slice(6, 12)),
                pricedListBar3: pricedList(bar.slice(12, 18))
            };
        case 'menuPromo':
            return { promo };
        case 'entertainment':
            return {
                entertainment,
                slideHeading: slideHeading(slide)
            };
        default:
            return {};
    }
};

export default main({
    topbar: topbar(slides),
    leftbar: leftbar({
        items: slides.filter(item => item.leftBar)
    }),
    slides: slides
        .map(slide => {
            console.log(slide.id, slide);
            return slideWrapper({
                ...slide,
                slide: slidesTemplates[slide.id](customSlideData(slide))
            });
        })
        .join(''),
    preloader: preloader()
});
