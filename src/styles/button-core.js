
/**
 * To be used on the element to style it as a button.
 * @public
 * @const {string}
 */
export const CLASS_BUTTON = 'pure-button';

/**
 * To be used on the element parent to group buttons.
 * @public
 * @const {string}
 */
export const CLASS_BUTTON_GROUP = 'pure-button-group';

 /**
  * @const {string}
  * @public
  */
export const RULES = /* css */ `
    .${CLASS_BUTTON} {
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
    .${CLASS_BUTTON}::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    /* Inherit .pure-g styles */
    .${CLASS_BUTTON_GROUP} {
        letter-spacing: -0.31em; /* Webkit: collapse white-space between units */
        text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */
    }

    .opera-only :-o-prefocus,
    .${CLASS_BUTTON}CLASS_BUTTON {
        word-spacing: -0.43em;
    }

    .${CLASS_BUTTON_GROUP} .${CLASS_BUTTON} {
        letter-spacing: normal;
        word-spacing: normal;
        vertical-align: top;
        text-rendering: auto;
    }`;