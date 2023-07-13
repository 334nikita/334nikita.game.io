import { createCards, back } from "./cards.js";
import { createMenu } from "./createMenu.js";


const gameWin = () => {
    const card = document.querySelectorAll(".card");
    let flag = true;
    card.forEach(el => {
        if (!el.classList.contains("rotate")) {
            flag = false;
        }
    })
    return flag;

}


export const createField = (lvl) => {

    const body = document.querySelector("body");
    body.style.backgroundImage=`url(${back[1]})`;
    
    let statusGame = true;

    const main = document.querySelector("main");
    main.classList.add("null");



    console.log(lvl);
    let lvlText;

    switch (lvl) {
        case 8:
            lvlText = "Лёгкий";
            break;
        case 12:
            lvlText = "Средний"
            break;
        case 16:
            lvlText = "Сложный"
            break;

    }


    const game = document.querySelector(".game");
    game.style.display = "block";
    const level = game.querySelector(".lvl")
    level.textContent = lvlText;

    const menu = game.querySelector(".btn")
    menu.addEventListener('click', () => {

        createMenu();
    })

    const cards = createCards(lvl);
    console.log(cards);

    const gameCards = document.querySelector(".game-cards");
    gameCards.innerHTML = "";

    let prev = null;

    cards.forEach(el => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = `url(${el.back})`;
        gameCards.appendChild(card);

        card.addEventListener('click', () => {
            if (statusGame == true && !card.classList.contains("rotate")) {
                card.classList.add("rotate")
                card.style.backgroundImage = `url(${el.img})`;
                if (prev == null) {
                    prev = card;
                }
                else {
                    if (prev.style.backgroundImage == card.style.backgroundImage) {
                        prev = null;
                        if (gameWin()) {
                            let model = document.createElement('div')
                            model.classList.add("model");
                            let context = document.createElement('div')
                            context.classList.add("context");
                            context.textContent = "Вы победили";
                            let button = document.createElement('div')
                            button.classList.add("btn")
                            button.textContent = "Выйти в меню"
                            model.appendChild(context);
                            model.appendChild(button);
                            main.appendChild(model);
                            button.addEventListener('click', () => {
                                createMenu();
                            })
                        }
                    }
                    else {
                        statusGame = false;
                        const time = setTimeout(() => {
                            card.classList.remove("rotate")
                            card.style.backgroundImage = `url(${el.back})`;
                            prev.classList.remove("rotate")
                            prev.style.backgroundImage = `url(${el.back})`;
                            prev = null;
                            statusGame = true;
                        }, 1000);

                    }
                }


            }
        })

    })
}