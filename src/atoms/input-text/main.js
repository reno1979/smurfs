import * as config from './_config.js';
import * as base from '../../input/main.js';
import template from './template.js';
import style from './style.js';

/**
 * @const {string}
 * @public
 */
 export const TAGNAME = config.TAGNAME;

/**
 * todo toolkit generate template
 * @const {string}
 * @public
 */
export const TEMPLATE = template;

 /**
  * The class for the Smurfic input for text
  */
 export class MyClass extends base.MyClass {
    
  /**
   * @param {inputConstructorParam} param
   */
    constructor({}) {
      super();
      this._internals.setValidity({
          ...base.VALIDITY_STATE_FLAGS,
          valueMissing: true
        }, 'Oh nOES, you forgot the dog breed?');

        
      this.blurHandler = apiHandler.bind(this);

    }

    connectedCallback() {
      super.connectedCallback({style});
      this._input.addEventListener('blur', this.blurHandler); //make api call on blur of input field
    }
  
    disconnectedCallback() {
      super.disconnectedCallback();
      this._input.removeEventListener('blur', this.blurHandler);
    }
 };

 const apiHandler = function(evt) {
    if (!this._input.value) {
      this._internals.setValidity({
        ...base.VALIDITY_STATE_FLAGS,
        valueMissing: true
      }, 'Oh nOES, you forgot the dog breed?');
    } else {
      this._internals.setValidity({
        ...base.VALIDITY_STATE_FLAGS,
        customError: true
      }, 'Hol up, still loading!');
      
      fetch('https://dog.ceo/api/breeds/list/all').then(resp => resp.json()).then(resp => {
        if (Object.keys(resp.message).includes(this._input.value)) {
          this._internals.setValidity({
            ...base.VALIDITY_STATE_FLAGS
          });
          this._internals.setFormValue(this._input.value);
        } else {
          this._internals.setValidity({
            ...base.VALIDITY_STATE_FLAGS,
            customError: true
          }, 'Dat not a dog!');
        }
      }).catch(err => {
        console.log(err);
        this._internals.setValidity({
          ...VALIDITY_STATE_FLAGS,
          customError: true
        }, 'Oh noes, the API goofed!');
      });
    }
  }