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

    .pure-group input:not([type]),
    .pure-group input[type="text"],
    .pure-group input[type="password"],
    .pure-group input[type="email"],
    .pure-group input[type="url"],
    .pure-group input[type="date"],
    .pure-group input[type="month"],
    .pure-group input[type="time"],
    .pure-group input[type="datetime"],
    .pure-group input[type="datetime-local"],
    .pure-group input[type="week"],
    .pure-group input[type="number"],
    .pure-group input[type="search"],
    .pure-group input[type="tel"],
    .pure-group input[type="color"] {
        margin-bottom: 0;
    }

    .pure-form-aligned .pure-control-group label {
        margin-bottom: 0.3em;
        text-align: left;
        display: block;
        width: 100%;
    }

    .pure-form-aligned .pure-controls {
        margin: 1.5em 0 0 0;
    }

    .pure-form-message-inline,
    .pure-form-message {
        display: block;
        font-size: 0.75em;
        /* Increased bottom padding to make it group with its related input element. */
        padding: 0.2em 0 0.8em;
    }
}
`;