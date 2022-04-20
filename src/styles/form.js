import { RADIO, CHECKBOX, INPUT_ROUNDED, INPUT_1, INPUT_1_2, INPUT_1_3, INPUT_1_4, INPUT_2_3, INPUT_3_4, FORM, GROUP, CONTROL_GROUP, CONTROLS, FORM_ALIGNED, FORM_MESSAGE, FORM_MESSAGE_INLINE } from './classes.js';

/**
 * @type {string}
 * @public
 */
export default /* css */ `

/*
Box-model set to false because we're setting a height on select elements, which
also have border and padding. This is done because some browsers don't render
the padding. We explicitly set the box-model for select elements to border-box,
so we can ignore the csslint warning.
*/

.${FORM} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
.${FORM} select,
.${FORM} textarea {
    padding: 0.5em 0.6em;
    display: inline-block;
    border: var(--smurf-input-border);
    box-shadow: var(--smurf-input-box-shadow);
    border-radius: 4px;
    vertical-align: middle;
    box-sizing: border-box;
}

.${FORM} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):focus,
.${FORM} select:focus,
.${FORM} textarea:focus {
    outline: 0;
    border-color: var(--smurf-input-focus-border-color);
}

.${FORM} input[type="file"]:focus,
.${FORM} input[type="radio"]:focus,
.${FORM} input[type="checkbox"]:focus {
    outline: thin var(--smurf-input-border-style) var(--smurf-input-focus-border-color);
    outline: var(--smurf-input-border-width) auto var(--smurf-input-focus-border-color);
}
.${CHECKBOX},
.${RADIO}{
    margin: 0.5em 0;
    display: block;
}

.${FORM} input:not([type="radio"]):not([type="checkbox"]):not([type="button"])[disabled],
.${FORM} select[disabled],
.${FORM} textarea[disabled] {
    cursor: not-allowed;
    background-color: var(--smurf-input-disabled-background-color);
    color: var(--smurf-input-disabled-color);
}

.${FORM} input:not([type="radio"]):not([type="checkbox"]):not([type="button"])[readonly],
.${FORM} select[readonly],
.${FORM} textarea[readonly] {
    background-color: var(--smurf-input-readonly-background-color); /* menu hover bg color */
    color: var(--smurf-input-readonly-color); /* menu text color */
    border-color: var(--smurf-input-readonly-border-color);
}

.${FORM} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):focus:invalid,
.${FORM} textarea:focus:invalid,
.${FORM} select:focus:invalid {
    color: var(--smurf-input-focus-invalid-color);
    border-color: var(--smurf-input-focus-invalid-border-color);
}
.${FORM} input[type="file"]:focus:invalid:focus,
.${FORM} input[type="radio"]:focus:invalid:focus,
.${FORM} input[type="checkbox"]:focus:invalid:focus {
    border-color: var(--smurf-input-focus-invalid-border-color);
}
.${FORM} select {
    /* Normalizes the height; padding is not sufficient. */
    height: 2.25em;
    border: var(--smurf-input-border);
    background-color: var(--smurf-select-background-color);
}
.${FORM} select[multiple] {
    height: auto;
}
.${FORM} label {
    margin: 0.5em 0 0.2em;
}
.${FORM} fieldset {
    margin: 0;
    padding: 0.35em 0 0.75em;
    border: 0;
}
.${FORM} legend {
    display: block;
    width: 100%;
    padding: 0.3em 0;
    margin-bottom: 0.3em;
    color: var(--smurf-legend-color);
    border-bottom: var(--smurf-legend-border);
}

${FORM_STACKED} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
${FORM_STACKED} select,
${FORM_STACKED} label,
${FORM_STACKED} textarea {
    display: block;
    margin: 0.25em 0;
}

${FORM_ALIGNED} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
${FORM_ALIGNED} textarea,
${FORM_ALIGNED} select,
.${FORM_MESSAGE_INLINE} {
    display: inline-block;
    vertical-align: middle;
}
${FORM_ALIGNED} textarea {
    vertical-align: top;
}

/* Aligned Forms */
.${FORM_ALIGNED} .${CONTROL_GROUP} {
    margin-bottom: 0.5em;
}
.${FORM_ALIGNED} .${CONTROL_GROUP} label {
    text-align: right;
    display: inline-block;
    vertical-align: middle;
    width: 10em;
    margin: 0 1em 0 0;
}
.${FORM_ALIGNED} .${CONTROLS} {
    margin: 1.5em 0 0 11em;
}

/* Rounded Inputs */
input:not([type="radio"]):not([type="checkbox"]):not([type="button"]).${INPUT_ROUNDED},
.${INPUT_ROUNDED} {
    border-radius: 2em;
    padding: 0.5em 1em;
}

/* Grouped Inputs */
.${GROUP} fieldset {
    margin-bottom: 10px;
}
.${GROUP} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
.${GROUP} textarea {
    display: block;
    padding: 10px;
    margin: 0 0 -1px;
    border-radius: 0;
    position: relative;
    top: -1px;
}
.${GROUP} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):focus,
.${GROUP} textarea:focus {
    z-index: 3;
}
.${GROUP} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):first-child,
.${GROUP} textarea:first-child {
    top: 1px;
    border-radius: 4px 4px 0 0;
    margin: 0;
}
.${GROUP} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):first-child:last-child,
.${GROUP} textarea:first-child:last-child {
    top: 1px;
    border-radius: 4px;
    margin: 0;
}
.${GROUP} input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):last-child,
.${GROUP} textarea:last-child {
    top: -2px;
    border-radius: 0 0 4px 4px;
    margin: 0;
}
.${GROUP} button {
    margin: 0.35em 0;
}

.${INPUT_1} {
    width: 100%;
}
.${INPUT_3_4} {
    width: 75%;
}
.${INPUT_2_3} {
    width: 66%;
}
.${INPUT_1_2} {
    width: 50%;
}
.${INPUT_2_3} {
    width: 33%;
}
.${INPUT_1_4} {
    width: 25%;
}

/* Inline help for forms */
.${FORM_MESSAGE_INLINE} {
    display: inline-block;
    padding-left: 0.3em;
    color: var(--smurf-input-message-color);
    vertical-align: middle;
    font-size: 0.875em;
}

/* Block help for forms */
.${FORM_MESSAGE} {
    display: block;
    color: var(--smurf-input-message-color);
    font-size: 0.875em;
}
`;