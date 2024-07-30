/*
 * 950: Reveal Cards In Increasing Order
 * Last Updated: Apr 10, 2024
 */
var deckRevealedIncreasing = function(deck) {
    const cards = new Array;

    deck.sort((a, b) => a - b);
    while (deck.length) {
        if (cards.length) cards.push(cards.shift());
        cards.push(deck.pop());
    }

    return cards.reverse();
};