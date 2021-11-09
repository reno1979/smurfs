export default /* css */ `
.pure-button {
    /* Structure */
    display: inline-block;
    line-height: normal;
    white-space: nowrap;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    -webkit-user-drag: none;
    user-select: none;
    box-sizing: border-box;
}

/* Firefox: Get rid of the inner focus border */
.pure-button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

/* Inherit .pure-g styles */
.pure-button-group {
    letter-spacing: -0.31em; /* Webkit: collapse white-space between units */
    text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */
}

.opera-only :-o-prefocus,
.pure-button-group {
    word-spacing: -0.43em;
}

.pure-button-group .pure-button {
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
}
`;