

export default /* css */`

:root{
    --smurf-font-family: arial;

    --smurf-spacing: 1em;

    --smurf-color-lightness-light: 20%;
    --smurf-color-lightness-lighter: 40%;
    --smurf-color-lightness-lightest: 60%;

    --smurf-opacity-light: 80%;
    --smurf-opacity-medium: 60%;
    --smurf-opacity-heavy: 40%;
    --smurf-opacity-max: 20%;

    --smurf-color-base-h: 81;
    --smurf-color-base-s: 50%;
    --smurf-color-base-l: 41%;
    
    --smurf-color-secondary-h: 2;
    --smurf-color-secondary-s: 50%;
    --smurf-color-secondary-l: 45%;
    
    --smurf-color-tertiary-h: 183;
    --smurf-color-tertiary-s: 49%;
    --smurf-color-tertiary-l: 27%;

    --smurf-color-element-h: 2;
    --smurf-color-element-s: 50%;
    --smurf-color-element-l: 50%;

    --smurf-color-system-h: 2;
    --smurf-color-system-s: 50%;
    --smurf-color-system-l: 50%;

    --smurf-color-signal-1-h: 33;
    --smurf-color-signal-1-s: 50%;
    --smurf-color-signal-1-l: 41%;

    --smurf-color-signal-2-h: 44;
    --smurf-color-signal-2-s: 50%;
    --smurf-color-signal-2-l: 41%;

    --smurf-color-signal-3-h: 99;
    --smurf-color-signal-3-s: 50%;
    --smurf-color-signal-3-l: 41%;

    /* BELOW THIS LINE THE POSIBLE VARIANTS ARE CREATED */

    --smurf-padding-top: calc( 0.5 * --var(--spacing));
    --smurf-padding-botton: calc( 0.5 * --var(--spacing));
    --smurf-padding-left: --var(--spacing);
    --smurf-padding-right: --var(--spacing);

    --smurf-color-base: hsl(var(--smurf-color-base-h), var(--smurf-color-base-s), var(--smurf-color-base-l));
    --smurf-color-base-light: hsl(var(--smurf-color-base-h), var(--smurf-color-base-s), calc(var(--smurf-color-base-l) + var(--smurf-color-lightness-light)));
    --smurf-color-base-lighter: hsl(var(--smurf-color-base-h), var(--smurf-color-base-s), calc(var(--smurf-color-base-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-base-lightest: hsl(var(--smurf-color-base-h), var(--smurf-color-base-s), calc(var(--smurf-color-base-l) + var(--smurf-color-lightness-lightest)));
    
    --smurf-color-secondary: hsl(var(--smurf-color-secondary-h), var(--smurf-color-secondary-s), var(--smurf-color-secondary-l));
    --smurf-color-secondary-light: hsl(var(--smurf-color-secondary-h), var(--smurf-color-secondary-s), calc(var(--smurf-color-secondary-l) + var(--smurf-color-lightness-light)));
    --smurf-color-secondary-lighter: hsl(var(--smurf-color-secondary-h), var(--smurf-color-secondary-s), calc(var(--smurf-color-secondary-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-secondary-lightest: hsl(var(--smurf-color-secondary-h), var(--smurf-color-secondary-s), calc(var(--smurf-color-secondary-l) + var(--smurf-color-lightness-lightest)));

    --smurf-color-tertiary: hsl(var(--smurf-color-tertiary-h), var(--smurf-color-tertiary-s), var(--smurf-color-tertiary-l));
    --smurf-color-tertiary-light: hsl(var(--smurf-color-tertiary-h), var(--smurf-color-tertiary-s), calc(var(--smurf-color-tertiary-l) + var(--smurf-color-lightness-light)));
    --smurf-color-tertiary-lighter: hsl(var(--smurf-color-tertiary-h), var(--smurf-color-tertiary-s), calc(var(--smurf-color-tertiary-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-tertiary-lightest: hsl(var(--smurf-color-tertiary-h), var(--smurf-color-tertiary-s), calc(var(--smurf-color-tertiary-l) + var(--smurf-color-lightness-lightest)));

    --smurf-color-element: hsl(var(--smurf-color-element-h), var(--smurf-color-element-s), var(--smurf-color-element-l));
    --smurf-color-element-light: hsl(var(--smurf-color-element-h), var(--smurf-color-element-s), calc(var(--smurf-color-element-l) + var(--smurf-color-lightness-light)));
    --smurf-color-element-lighter: hsl(var(--smurf-color-element-h), var(--smurf-color-element-s), calc(var(--smurf-color-element-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-element-lightest: hsl(var(--smurf-color-element-h), var(--smurf-color-element-s), calc(var(--smurf-color-element-l) + var(--smurf-color-lightness-lightest)));
    
    --smurf-color-system: hsl(var(--smurf-color-system-h), var(--smurf-color-system-s), var(--smurf-color-system-l));
    --smurf-color-system-light: hsl(var(--smurf-color-system-h), var(--smurf-color-system-s), calc(var(--smurf-color-system-l) + var(--smurf-color-lightness-light)));
    --smurf-color-system-lighter: hsl(var(--smurf-color-system-h), var(--smurf-color-system-s), calc(var(--smurf-color-system-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-system-lightest: hsl(var(--smurf-color-system-h), var(--smurf-color-system-s), calc(var(--smurf-color-system-l) + var(--smurf-color-lightness-lightest)));
    
    --smurf-color-signal-1: hsl(var(--smurf-color-signal-1-h), var(--smurf-color-signal-1-s), var(--smurf-color-signal-1-l));
    --smurf-color-signal-1-light: hsl(var(--smurf-color-signal-1-h), var(--smurf-color-signal-1-s), calc(var(--smurf-color-signal-1-l) + var(--smurf-color-lightness-light)));
    --smurf-color-signal-1-lighter: hsl(var(--smurf-color-signal-1-h), var(--smurf-color-signal-1-s), calc(var(--smurf-color-signal-1-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-signal-1-lightest: hsl(var(--smurf-color-signal-1-h), var(--smurf-color-signal-1-s), calc(var(--smurf-color-signal-1-l) + var(--smurf-color-lightness-lightest)));
    
    --smurf-color-signal-2: hsl(var(--smurf-color-signal-2-h), var(--smurf-color-signal-2-s), var(--smurf-color-signal-2-l));
    --smurf-color-signal-2-light: hsl(var(--smurf-color-signal-2-h), var(--smurf-color-signal-2-s), calc(var(--smurf-color-signal-2-l) + var(--smurf-color-lightness-light)));
    --smurf-color-signal-2-lighter: hsl(var(--smurf-color-signal-2-h), var(--smurf-color-signal-2-s), calc(var(--smurf-color-signal-2-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-signal-2-lightest: hsl(var(--smurf-color-signal-2-h), var(--smurf-color-signal-2-s), calc(var(--smurf-color-signal-2-l) + var(--smurf-color-lightness-lightest)));
    
    --smurf-color-signal-3: hsl(var(--smurf-color-signal-3-h), var(--smurf-color-signal-3-s), var(--smurf-color-signal-3-l));
    --smurf-color-signal-3-light: hsl(var(--smurf-color-signal-3-h), var(--smurf-color-signal-3-s), calc(var(--smurf-color-signal-3-l) + var(--smurf-color-lightness-light)));
    --smurf-color-signal-3-lighter: hsl(var(--smurf-color-signal-3-h), var(--smurf-color-signal-3-s), calc(var(--smurf-color-signal-3-l) + var(--smurf-color-lightness-lighter)));
    --smurf-color-signal-3-lightest: hsl(var(--smurf-color-signal-3-h), var(--smurf-color-signal-3-s), calc(var(--smurf-color-signal-3-l) + var(--smurf-color-lightness-lightest)));
    


}
`;