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
const initial_phrase = document.querySelector('[data_initial_phrase]');

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

    tries_left = maximum_tries;
    tries_left_span.textContent = maximum_tries;
    random_number = Math.floor(Math.random() * 100) + 1;

    difficulty_section.style.display = 'none';
    game_section.style.display = 'block';
    guess_section.style.display = 'flex';
});

/* */
guess_button.addEventListener('click', function () {
    const guess = parseInt(guess_input.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result_paragraph.textContent = 'Por favor, insira um número de 1 a 100.';
    }
    else {
        if (guess === random_number) {
            result_paragraph.textContent = `Parabéns! Você acertou em ${maximum_tries - tries_left + 1} tentativa(s).`;
            reset_button.style.display = 'block';
            guess_section.style.display = 'none';
            initial_phrase.style.display = 'none';
        }
        else if (guess > random_number) {
            result_paragraph.textContent = 'Muito alto, tente novamente.';
            tries_left--;
        }
        else {
            result_paragraph.textContent = 'Muito baixo, tente novamente.';
            tries_left--;
        };

        if (tries_left === 0) {
            result_paragraph.textContent = `Tentativas esgotadas. O número correto é: ${random_number}`;
            reset_button.style.display = 'block';
            guess_section.style.display = 'none';
            initial_phrase.style.display = 'none';
        };

        tries_left_span.textContent = tries_left;
        guess_input.value = '';
    };
});

/* */
function resetGame() {
    difficulty_select.value = '';
    result_paragraph.textContent = '';
    difficulty_section.style.display = 'flex';
    game_section.style.display = 'none';
    guess_section.style.display = 'none';
    reset_button.style.display = 'none';
    initial_phrase.style.display = '';
};

reset_button.addEventListener('click', resetGame);