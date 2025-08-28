import './styles.css';

export default class Card {

    static allCards = []

    constructor (day, type, exercises) {
        this.day = day;
        this.type = type;
        this.exercises = exercises;
    }

    addCard() {
        Card.allCards.push(this);
    }
}

export function getCards() {
    return Card.allCards;
}
