/* */
const guess_input = document.querySelector('[data_guess]');
const result_paragraph = document.querySelector('[data_result');
const guess_button = document.querySelector('[data_guess_button');
const game_section = document.querySelector('[data_game_section]');
const reset_button = document.querySelector('[data_reset_button]');
const tries_left_span = document.querySelector('[data_tries_left]');
const guess_section = document.querySelector('[data_guess_section');
const difficulty_select = document.querySelector('[data_difficulty');
const difficulty_section = document.querySelector('[data_difficulty_section]');

let maximum_tries;
let random_number;
let tries_left;

/* */
difficulty_select.addEventListener('change', function () {
    const difficulty = parseInt(difficulty_select.value);

    switch (difficulty) {
        case 1:
            maximum_tries = 10;
            break;

        case 2:
            maximum_tries = 7;
            break;

        case 3:
            maximum_tries = 5;
            break;

        default:
            maximum_tries = 10;
            break;
    };

    console.log(maximum_tries);
});