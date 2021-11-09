export default /* css */ `
/*csslint outline-none:false*/

.pure-button {
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
.pure-button:hover,
.pure-button:focus {
    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
}
.pure-button:focus {
    outline: 0;
}
.pure-button-active,
.pure-button:active {
    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
    border-color: #000;
}

:host([disabled]) .pure-button,
.pure-button[disabled],
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

:host([primary]) .pure-button,
.pure-button-primary,
.pure-button-selected,
a.pure-button-primary,
a.pure-button-selected {
    background-color: rgb(0, 120, 231);
    color: #fff;
}

/* Button Groups */
.pure-button-group .pure-button {
    margin: 0;
    border-radius: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.2);

}

.pure-button-group .pure-button:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
.pure-button-group .pure-button:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-right: none;
}
`;