const calcScreen = () => {
    /*
    --- Media Query Screen Sizes
        Laptop: 1360px - 85em
        Tablet: 768px - 48em
        Mobile: 384px - 24em

    */
    const sizes = {
        laptop: "85em",
    };

    const device = {};

    for (const screenSize in sizes) {
        device[screenSize] = `(max-width: ${sizes[screenSize]})`;
    }

    return device;
};

const screen = calcScreen();

export default screen;
