export default /* css */ `

/*
Box-model set to false because we're setting a height on select elements, which
also have border and padding. This is done because some browsers don't render
the padding. We explicitly set the box-model for select elements to border-box,
so we can ignore the csslint warning.
*/

.pure-form input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
.pure-form select,
.pure-form textarea {
    padding: 0.5em 0.6em;
    display: inline-block;
    border: var(--smurf-input-border);
    box-shadow: var(--smurf-input-box-shadow);
    border-radius: 4px;
    vertical-align: middle;
    box-sizing: border-box;
}

.pure-form input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):focus,
.pure-form select:focus,
.pure-form textarea:focus {
    outline: 0;
    border-color: var(--smurf-input-focus-border-color);
}

.pure-form input[type="file"]:focus,
.pure-form input[type="radio"]:focus,
.pure-form input[type="checkbox"]:focus {
    outline: thin var(--smurf-input-border-style) var(--smurf-input-focus-border-color);
    outline: var(--smurf-input-border-width) auto var(--smurf-input-focus-border-color);
}
.pure-checkbox,
.pure-radio{
    margin: 0.5em 0;
    display: block;
}

.pure-form input:not([type="radio"]):not([type="checkbox"]):not([type="button"])[disabled],
.pure-form select[disabled],
.pure-form textarea[disabled] {
    cursor: not-allowed;
    background-color: var(--smurf-input-disabled-background-color);
    color: var(--smurf-input-disabled-color);
}

.pure-form input:not([type="radio"]):not([type="checkbox"]):not([type="button"])[readonly],
.pure-form select[readonly],
.pure-form textarea[readonly] {
    background-color: var(--smurf-input-readonly-background-color); /* menu hover bg color */
    color: var(--smurf-input-readonly-color); /* menu text color */
    border-color: var(--smurf-input-readonly-border-color);
}

.pure-form input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):focus:invalid,
.pure-form textarea:focus:invalid,
.pure-form select:focus:invalid {
    color: var(--smurf-input-focus-invalid-color);
    border-color: var(--smurf-input-focus-invalid-border-color);
}
.pure-form input[type="file"]:focus:invalid:focus,
.pure-form input[type="radio"]:focus:invalid:focus,
.pure-form input[type="checkbox"]:focus:invalid:focus {
    border-color: var(--smurf-input-focus-invalid-border-color);
}
.pure-form select {
    /* Normalizes the height; padding is not sufficient. */
    height: 2.25em;
    border: var(--smurf-input-border);
    background-color: var(--smurf-select-background-color);
}
.pure-form select[multiple] {
    height: auto;
}
.pure-form label {
    margin: 0.5em 0 0.2em;
}
.pure-form fieldset {
    margin: 0;
    padding: 0.35em 0 0.75em;
    border: 0;
}
.pure-form legend {
    display: block;
    width: 100%;
    padding: 0.3em 0;
    margin-bottom: 0.3em;
    color: var(--smurf-legend-color);
    border-bottom: var(--smurf-legend-border);
}

.pure-form-stacked input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
.pure-form-stacked select,
.pure-form-stacked label,
.pure-form-stacked textarea {
    display: block;
    margin: 0.25em 0;
}

.pure-form-aligned input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
.pure-form-aligned textarea,
.pure-form-aligned select,
.pure-form-message-inline {
    display: inline-block;
    vertical-align: middle;
}
.pure-form-aligned textarea {
    vertical-align: top;
}

/* Aligned Forms */
.pure-form-aligned .pure-control-group {
    margin-bottom: 0.5em;
}
.pure-form-aligned .pure-control-group label {
    text-align: right;
    display: inline-block;
    vertical-align: middle;
    width: 10em;
    margin: 0 1em 0 0;
}
.pure-form-aligned .pure-controls {
    margin: 1.5em 0 0 11em;
}

/* Rounded Inputs */
input:not([type="radio"]):not([type="checkbox"]):not([type="button"]).pure-input-rounded,
.pure-input-rounded {
    border-radius: 2em;
    padding: 0.5em 1em;
}

/* Grouped Inputs */
.pure-group fieldset {
    margin-bottom: 10px;
}
.pure-group input:not([type="radio"]):not([type="checkbox"]):not([type="button"]),
.pure-group textarea {
    display: block;
    padding: 10px;
    margin: 0 0 -1px;
    border-radius: 0;
    position: relative;
    top: -1px;
}
.pure-group input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):focus,
.pure-group textarea:focus {
    z-index: 3;
}
.pure-group input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):first-child,
.pure-group textarea:first-child {
    top: 1px;
    border-radius: 4px 4px 0 0;
    margin: 0;
}
.pure-group input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):first-child:last-child,
.pure-group textarea:first-child:last-child {
    top: 1px;
    border-radius: 4px;
    margin: 0;
}
.pure-group input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):last-child,
.pure-group textarea:last-child {
    top: -2px;
    border-radius: 0 0 4px 4px;
    margin: 0;
}
.pure-group button {
    margin: 0.35em 0;
}

.pure-input-1 {
    width: 100%;
}
.pure-input-3-4 {
    width: 75%;
}
.pure-input-2-3 {
    width: 66%;
}
.pure-input-1-2 {
    width: 50%;
}
.pure-input-1-3 {
    width: 33%;
}
.pure-input-1-4 {
    width: 25%;
}

/* Inline help for forms */
.pure-form-message-inline {
    display: inline-block;
    padding-left: 0.3em;
    color: var(--smurf-input-message-color);
    vertical-align: middle;
    font-size: 0.875em;
}

/* Block help for forms */
.pure-form-message {
    display: block;
    color: var(--smurf-input-message-color);
    font-size: 0.875em;
}
`;