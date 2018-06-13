import topbar from './topbar.ejs';
import leftbar from './leftbar.ejs';
import main from './main.ejs';
import slides from './slides';
import preloader from './preloader.ejs';
import data from '../data';
import slideWrapper from './slideWrapper.ejs';
import pricedList from './pricedList.ejs';
import slideHeading from './slideHeading.ejs';

const customSlideData = slide => {
    console.log(slide.id);
    switch (slide.id) {
        case 'index':
            return {};
        case 'about':
            return {
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
                pricedListBowl: pricedList({
                    items: data.bowls,
                    title: 'Чаши'
                })
            };
        case 'menuTea':
            return {};
        case 'menuBar':
            return {};
        case 'menuPromo':
            return {};
        case 'entertainment':
            return {};
        default:
            return {};
    }
};

export default main({
    topbar: topbar(data),
    leftbar: leftbar(data),
    slides: data.slides
        .map(slide => {
            console.log(slide.id, slide);
            return slideWrapper({
                ...slide,
                slide: slides[slide.id]({
                    ...data,
                    ...customSlideData(slide)
                })
            });
        })
        .join(''),
    preloader: preloader(data)
});
