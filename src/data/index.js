export default {
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
            order: 30
        },
        {
            id: 'menuTea',
            title: 'Чай',
            menuTitle: null,
            order: 31
        },
        {
            id: 'menuBar',
            title: 'Бар',
            menuTitle: null,
            order: 32
        },
        {
            id: 'menuPromo',
            title: 'Акции',
            menuTitle: null,
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
            order: 50
        },
        {
            id: 'contacts',
            title: 'Контакты',
            menuTitle: 'Контакты',
            order: 60
        }
    ],
    highlightes: [
        {
            icon: 'fgdfg.png',
            score: 99,
            title: 'Вкусов табака'
        },
        {
            icon: 'fgdfg.png',
            score: 85,
            title: 'Сортов чая'
        },
        {
            icon: 'fgdfg.png',
            score: 120,
            title: 'Идей для кальяна'
        },
        {
            icon: 'fgdfg.png',
            score: 250,
            title: 'книг'
        }
    ],
    promo: [
        {
            title: '2 за 1500',
            description: '2 кальяна за 1500'
        },
        {
            title: 'Тариф "Дневной"',
            description: 'с 14:00 до 17:00 калян за 500'
        },
        {
            title: 'Дым без границ',
            description: 'Безлимитный калян',
            cost: [
                {
                    price: '2500',
                    description: 'на глиняной чаше'
                },
                {
                    price: '3500',
                    description: 'на фруктовой чаше'
                }
            ]
        }
    ],
    tobacco: [
        {
            title: 'Al Fakher',
            src: 'asdasd.png',
            price: 900
        },
        {
            title: 'Adaya',
            src: 'asdasd.png',
            price: 1000
        },
        {
            title: 'Starbuzz',
            src: 'asdasd.png',
            price: 1100
        },
        {
            title: 'Darkside',
            src: 'asdasd.png',
            price: 1100
        },
        {
            title: 'Tangiers',
            src: 'asdasd.png',
            price: 1100
        },
        {
            title: 'World Original',
            src: 'asdasd.png',
            price: 1100
        }
    ],
    bowls: [
        {
            title: 'Апельсин',
            price: 500
        },
        {
            title: 'Яблоко',
            price: 500
        },
        {
            title: 'Грейпфрут',
            price: 500
        },
        {
            title: 'Гранат',
            price: 700
        },
        {
            title: 'Ананас',
            price: 700
        },
        {
            title: 'Свити',
            price: 600
        },
        {
            title: 'Арбуз',
            price: 800
        },
        {
            title: 'Дыня',
            price: 800
        }
    ],
    bowl_replacement: [
        {
            title: 'Замена глиняной чаши',
            price: 500
        },
        {
            title: 'Замена фруктовой чаши',
            price: 600
        }
    ]
};
