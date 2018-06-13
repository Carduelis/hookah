// about
import highlightes from './highlightes';
// menuHookah
import tobacco from './tobacco';
import bowls from './bowls';
import bowl_replacement from './bowl_replacement';
// menuTea
import tea from './tea';
// menuBar
import bar from './bar';
// menuPromo
import promo from './promo';

import entertainment from './entertainment';

export default {
    highlightes,
    tobacco,
    bowls,
    bowl_replacement,
    tea,
    bar,
    promo,
    entertainment,
    slides: [
        {
            id: 'index',
            title: 'Главная',
            menuTitle: 'Главная',
            order: 10
        },
        {
            id: 'about',
            title: 'О нас',
            order: 20,
            description: `Каждый 6-й кальян. Мы знаем толк в кальянах и чае.<br>
                Это наша страсть. И мы хотим поделиться<br>
                этой любовью с Вами.`
        },
        // {
        //     id: 'menu',
        //     title: 'Меню',
        //     order: 30
        // },
        {
            id: 'menuHookah',
            title: 'Кальяны',
            menuTitle: 'Меню',
            leftBar: true,
            order: 30
        },
        {
            id: 'menuTea',
            title: 'Чай',
            menuTitle: null,
            leftBar: true,
            order: 31
        },
        {
            id: 'menuBar',
            title: 'Бар',
            menuTitle: null,
            leftBar: true,
            order: 32
        },
        {
            id: 'menuPromo',
            title: 'Акции',
            menuTitle: null,
            leftBar: true,
            order: 33
        },
        {
            id: 'gallery',
            title: 'Галерея',
            menuTitle: 'Галерея',
            order: 40
        },
        {
            id: 'entertainment',
            title: 'Развлечения',
            menuTitle: 'Развлечения',
            description: `Каждый 6-й кальян. Мы знаем толк в кальянах и чае.<br>
                Это наша страсть. И мы хотим поделиться<br>
                этой любовью с Вами.`,
            order: 50
        },
        {
            id: 'contacts',
            title: 'Контакты',
            menuTitle: 'Контакты',
            order: 60
        }
    ]
};
