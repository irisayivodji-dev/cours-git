function addAnimalEmojis() {
    const animalEmojis = ['🐶', '🐱', '🐰', '🦁', '🐼', '🐵', '🐸', '🐢', '🐦', '🐠'];
    animalEmojis.forEach(emoji => {
        document.body.append(emoji + ' ');
    });
}

function addFoodEmojis() {
    const foodEmojis = ['🍎', '🍕', '🍔', '🍣', '🍦', '🍩', '🍉', '🍟', '🥑', '🍪'];
    foodEmojis.forEach(emoji => {
        document.body.append(emoji + ' ');
    });
}

function addWeatherEmojis() {
    const weatherEmojis = ['☀️', '🌧️', '⛈️', '🌩️', '🌨️', '🌪️', '🌫️', '🌤️', '🌦️', '❄️'];
    weatherEmojis.forEach(emoji => {
        document.body.append(emoji + ' ');
    });
}