export const cards = [
    "../img/Вода.png",
    "../img/Воздух.png",
    "../img/Земля.png",
    "../img/Огонь.png",
    "../img/Электричество-1.png",
    "../img/Время-1.png",
    "../img/Пустота-3.png",
    "../img/Свет-2.png",
    "../img/Пример.png"


];

export const back = [
    "../img/Фон.png",
    "../img/Фон-2.png",
];

export class Card {
    img;
    back = cards[8]
    status = false;
    constructor(img) {
        this.img = img;
    }
}

export const createCards = (lvl) => {
    const array = [];
    for (let i = 0; i < lvl / 2; i++) {
        array.push(new Card(cards[i]));
        array.push(new Card(cards[i]));
    }

    for (let i = 0; i < lvl; i++) {
        let a = array[i];
        let r = Math.floor(Math.random() * (lvl / 2 - 1));
        array[i] = array[r];
        array[r] = a;
    }
    return array;
}