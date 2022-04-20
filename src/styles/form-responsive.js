import { GROUP, CONTROL_GROUP, CONTROLS, FORM_ALIGNED, FORM_MESSAGE, FORM_MESSAGE_INLINE } from './classes.js';

/**
 * @public
 * @type {string}
 */
export default /* css */ `
@media only screen and (max-width : 480px) {
    button[type="submit"] {
        margin: 0.7em 0 0;
    }

    input:not([type]),
    input[type="text"],
    input[type="password"],
    input[type="email"],
    input[type="url"],
    input[type="date"],
    input[type="month"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="week"],
    input[type="number"],
    input[type="search"],
    input[type="tel"],
    input[type="color"],
    label {
        margin-bottom: 0.3em;
        display: block;
    }

    .${GROUP} input:not([type]),
    .${GROUP} input[type="text"],
    .${GROUP} input[type="password"],
    .${GROUP} input[type="email"],
    .${GROUP} input[type="url"],
    .${GROUP} input[type="date"],
    .${GROUP} input[type="month"],
    .${GROUP} input[type="time"],
    .${GROUP} input[type="datetime"],
    .${GROUP} input[type="datetime-local"],
    .${GROUP} input[type="week"],
    .${GROUP} input[type="number"],
    .${GROUP} input[type="search"],
    .${GROUP} input[type="tel"],
    .${GROUP} input[type="color"] {
        margin-bottom: 0;
    }

    .${FORM_ALIGNED} .${CONTROL_GROUP} label {
        margin-bottom: 0.3em;
        text-align: left;
        display: block;
        width: 100%;
    }

    .${FORM_ALIGNED} .${CONTROLS} {
        margin: 1.5em 0 0 0;
    }

    .${FORM_MESSAGE_INLINE},
    .${FORM_MESSAGE} {
        display: block;
        font-size: 0.75em;
        /* Increased bottom padding to make it group with its related input element. */
        padding: 0.2em 0 0.8em;
    }
}
`;