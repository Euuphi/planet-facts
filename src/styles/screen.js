/*
    --- Media Query Screen Sizes
        Laptop: 1360px - 85em
        Laptop (small): 1104px - 69em
        Tablet: 768px - 48em
        Mobile: 384px - 24em

*/

// Object containing all media query sizes
const sizes = {
    laptop: "85em", // 1360px
    laptopS: "69em", // 1104px
};

/**
 * Returns an object containing all media query strings from input sizes
 *
 * @param {Object} sizes - Object of screen sizes
 * @return {Object} - Object containing media query string for all input sizes
 */
const calcScreen = (sizes) => {
    const device = {};

    // Create and return object with all media  query strings
    for (const screenSize in sizes) {
        device[screenSize] = `(max-width: ${sizes[screenSize]})`;
    }

    return device;
};

const screen = calcScreen(sizes);

export default screen;
