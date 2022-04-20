/**
 * @module
 * @fileoverview
 */

/**
 * @const {string}
 * @public
 */
export const TAGNAME = 'smurf-button';
/**
 * @const
 * @type {{PRIMARY:string, SECONDARY:string, GHOST:string}}
 * @public
 */
export const VARIANTS = Object.freeze({
    SECONDARY: 'secondary',
    PRIMARY: 'primary',
    GHOST: 'ghost'
});

/**
 * @const
 * @type {{ERROR:string, WARNING:string, SUCCESS:string}}
 * @public
 */
export const SIGNALS = Object.freeze({
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning'
});

export { MyClass as SUPERCLASS, TAGNAME as TAGNAME_SUPERCLASS} from '../../input/main.js';