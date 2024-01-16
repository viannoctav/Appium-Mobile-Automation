/**
 * Generate a random integer within a given range.
 * @param {number} min - Minimum value (inclusive).
 * @param {number} max - Maximum value (inclusive).
 * @returns {number} - Random integer.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random character.
 * @returns {string} - Random character.
 */
function getRandomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = getRandomInt(0, chars.length - 1);
    return chars.charAt(randomIndex);
}

module.exports = {
    getRandomInt,
    getRandomChar,
};


