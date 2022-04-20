import * as buttonCore from './button-core.js';
/**
 * To be used on the element to style it as a button.
 * @public
 * @const {string}
 */
export const CLASS_BUTTON = buttonCore.CLASS_BUTTON;
/**
 * To be used on the element parent to group buttons.
 * @public
 * @const {string}
 */
export const CLASS_BUTTON_GROUP = buttonCore.CLASS_BUTTON_GROUP;
/**
 * The CSS vars to register for the button component
 * @public
 * @const {string}
 */
 export const VARS = `
    --${CLASS_BUTTON}-color: rgba(0, 0, 0, 0.80);
    --${CLASS_BUTTON}-border: none rgba(0, 0, 0, 0);
    --${CLASS_BUTTON}-background-image: none;
    --${CLASS_BUTTON}-background-color: #E6E6E6;`;

/**
 * The styling rules for the button component
 * @const {string}
 * @public
 */
export const RULES = /* css */ `
    :root{
        /* ccs vars here, todo register globally */
        ${VARS}
    }
    .${CLASS_BUTTON} {
        font-family: inherit;
        font-size: 100%;
        padding: 0.5em 1em;
        color: rgba(0, 0, 0, 0.80);
        border: none rgba(0, 0, 0, 0);
        background-color: #E6E6E6;
        text-decoration: none;
        border-radius: 2px;
    }

    .pure-button-hover,
    .${CLASS_BUTTON}:hover,
    .${CLASS_BUTTON}:focus {
        background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
    }
    
    .${CLASS_BUTTON}:focus {
        outline: 0;
    }
    .pure-button-active,
    .${CLASS_BUTTON}:active {
        box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
        border-color: #000;
    }

    :host([disabled]) .${CLASS_BUTTON},
    .${CLASS_BUTTON}[disabled],
    .pure-button-disabled,
    .pure-button-disabled:hover,
    .pure-button-disabled:focus,
    .pure-button-disabled:active {
        border: none;
        background-image: none;
        opacity: 0.40;
        cursor: not-allowed;
        box-shadow: none;
        pointer-events: none;
    }

    .pure-button-hidden {
        display: none;
    }

    :host([primary]) .${CLASS_BUTTON},
    .pure-button-primary,
    .pure-button-selected,
    a.pure-button-primary,
    a.pure-button-selected {
        background-color: rgb(0, 120, 231);
        color: #fff;
    }

    /* Button Groups */
    .--${CLASS_BUTTON_GROUP} .${CLASS_BUTTON} {
        margin: 0;
        border-radius: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.2);
    }

    .--${CLASS_BUTTON_GROUP} .${CLASS_BUTTON}:first-child {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }
    .--${CLASS_BUTTON_GROUP} .${CLASS_BUTTON}:last-child {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        border-right: none;
    }
`;