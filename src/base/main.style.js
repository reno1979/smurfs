import normalize from '../styles/normalize.js';
import { registerStyle } from '../toolbox.js';
import { TAGNAME } from './main.config.js';

/**
 * 
 * @const {string}
 */
const _BASE = /* css */`
    ${normalize}

    /* ==========================================================================
       Pure Base Extras
       ========================================================================== */

    /**
     * Extra rules that Pure adds on top of Normalize.css
     */

    html {
        font-family: sans-serif;
    }

    /**
     * Always hide an element when it has the 'hidden' HTML attribute.
     */

    .hidden,
    [hidden] {
        display: none !important;
    }

    /**
     * Add this class to an image to make it fit within it's fluid parent wrapper while maintaining
     * aspect ratio.
     */
    .pure-img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

/**
 * @public
 * @const 
 * @type {Array<CSSStyleSheet>|Array<string>}
 */
export default registerStyle(TAGNAME, _BASE);