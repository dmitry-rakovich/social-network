import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [
            {
                text: `
                Nike BILL — робот для чистки и ремонта кроссовок
                Больше срок службы обуви — меньше мусора.
                Компания Nike показала робота BILL, который умеет чистить и ремонтировать кроссовки. Главная цель — продлить срок службы кроссовок и уменьшить количество отходов, воздейтвующих на окружающую среду.
                BILL создаёт трёхмерную модель обуви, которую будет чистить, и указывает все этапы работы. В среднем на одну пару уходит 40–45 минут.
                Если на верхней части обуви есть протёртости, то можно выбрать заплатки, которые робот будет использовать для ремонта. Сотрудники Nike дополнительно могут заменить шнурки и стельки.
                BILL — экспериментальный проект, который работает в фирменном магазине в Лондоне. Пока всё бесплатно, а отремонтировать или почистить можно Air Force 1, Air Jordan 1, Space Hippie 01 и Nike Dunk.
                `,
                category: 'Technique',
                id: 1,
                img:'./images/nike.jpg'
            },
            {
                text: `
                Амир Ибрагимов дебютировал в официальном матче команды “Манчестер Юнайтед” до 18 лет. 14-летний уроженец Дагестана вышел в стартовом составе гостевого матча против команды “Сток Сити”. 
                К сожалению дебют Амира сложился не лучшим образом, его команда проиграла, пропустив единственный гол на 67-й минуте встречи. Ибрагимов отыграл полный матч. 
                Состав "Юнайтед": Wooster, Lawrence, Parker, Aljofree, Murray, Oyedele, McAllister, Williams, Berry, Ibragimov, Norkett
                Запасные: Myles, Jackson, Nolan, Fitzgerald, Wheatley
                `,
                category: 'Sport',
                id: 2,
                img:'./images/sport1.png'
            },
            {
                text: `
                Вчера вечером итальянский автопроизводитель Ferrari представил модель Purosangue — первый в истории бренда кроссовер. Впрочем, представители концерна избегают таких названий, предпочитая термин FUV (Ferrari Utility Vehicle).
                Новинка может похвастаться атмосферным двигателем V12, выдающим внушительные 725 лошадиных сил. Объем мотора составляет 6,5 литра. До сотни Purosangue разгоняется за 3,3 секунды, а заявленная максимальная скорость — 311 километров в час.
                В автомобиле стоит 8-ступенчатая роботизированная КПП. Привод полный, однако на скоростях более 200 километров в час и на передачах с пятой по восьмую машина превращается в заднеприводную.
                Все двери являются электропроводными, однако задние имеют интересные особенности: они открываются в противоположную движению сторону, также у них отсутствуют ручки (открыть можно только с помощью кнопки изнутри).
                Продажи Ferrari Purosangue стартуют весной 2023 года. Цены пока не объявлены. Автопроизводитель заявил, что на модель будет приходиться не более 20% всех продаж компании.
                `,
                category: 'Auto',
                id: 3,
                img:'./images/ferrari.jpeg'
            }, 
            {
                text: `
                Представлена звуковая зубная щетка, разработанная, как утверждает производитель, специально для мужчин, которая получила название Nandme NX9000.
                Прочный внешний корпус NX9000 изготовлен из авиационного алюминия, который устойчив к коррозии, и обеспечивает его долговечность и надежность.
                В отличие от других электрических зубных щеток со сложным управлением с помощью приложений или десятками режимов чистки, Nandme NX9000 имеет всего 5 наиболее используемых режимов чистки для ежедневного ухода за полостью рта. Это чувствительный, очищающий, осветляющий, полирующий и массажный, которые отлично справляются со своими задачами.
                В прочный корпус встроен дисплей. Одним нажатием отображаются режимы чистки, время чистки и уровень оставшегося заряда, которые позволяет проверять данные о чистке. 
                Кроме того, NX9000 поставляется с 12 насадками и трехлетним бесплатным сервисом замены. 12 насадок предоставляются на три года. В течение этого времени вы можете воспользоваться бесплатным сервисом замены, сняв видео и предоставив его в службу поддержки клиентов при любых проблемах с качеством продукции
                `,
                category: 'Technique',
                id: 4,
                img:'./images/NX9000.jpg'
            },
            {
                text: `
                Автогигант Ford показал седьмое поколение легендарного американского спорткара. Внешне Mustang стал более резким, а внутри добавилось электроники.
                Вариантов двигателей два: турбированный объемом 2,3 литра и пятилитровый V8. Мощность раскроют позднее. КПП — шестиступенчатая «механика» или девятиступенчатый «автомат». Привод задний.
                Будет доступен как кузов купе, так и кабриолет. В салоне появилось несколько нововведений, в числе которых цифровые экраны, пришедшие на смену аналоговой приборной панели. Изменилась форма руля, а интерьерные материалы стали качественнее. Опций для кастомизации у Mustang седьмого поколения достаточно: 12 видов дисков и возможность их раскраски, широкая цветовая палитра для кузова и даже для суппортов тормозов Brembo, которые входят в специальный гоночный пакет.
                Технические новшества включают в себя электронный тормоз, предназначенный для дрифта, и возможность дистанционного запуска двигателя. Цена на спорткар станет известна ближе к старту продаж, который запланирован на лето 2023 года.
                `,
                category: 'Auto',
                id: 5,
                img:'./images/mustang.jpeg'
            },  
            {
                text: `
                Эрлинг Холанд продлил результативную серию в «Манчестер Сити».
                Нападающий «горожан» забил в ворота «Вулверхэмптона» на 16-й минуте в матче 8-го тура АПЛ (2:0, первый тайм).
                Норвежец забивает уже в семи играх кряду, на этом отрезке у него 12 голов.
                Всего у 22-летнего форварда уже 14 голов в 10 матчах за «Сити» во всех турнирах.
                В АПЛ он забил 11 голов в семи играх и возглавляет список бомбардиров, опережая Александара Митровича из «Фулхэма» на пять мячей.
                Также Холанд стал первым в истории игроком АПЛ, забившим во всех четырех своих первых матчах в гостях.
                `,
                category: 'Sport',
                id: 6,
                img:'./images/sport2.jpg'
            }, 
        ]
    }
})

export default newsSlice.reducer