import topbar from './topbar.ejs';
import leftbar from './leftbar.ejs';
import main from './main.ejs';
import slides from './slides';
import preloader from './preloader.ejs';
import data from '../data';
import slideWrapper from './slideWrapper.ejs';
import slideHeading from './slideHeading.ejs';

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
                    slideHeading: slideHeading(slide)
                })
            });
        })
        .join(''),
    preloader: preloader(data)
});
