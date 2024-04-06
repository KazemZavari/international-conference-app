import { Variants } from "framer-motion";

export const VariantsUp: Variants = {
    offscreen: {
        y:50,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "Tween",
            duration: .8,
            stiffness: 10,
            delay: .1 
        },
       
    },
};
export const VariantsDown: Variants = {
    offscreen: {
        y: -20,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "Tween",
            duration: 1,
            delay: .1
        },
    },
};

export const VariantsLeft: Variants = {
    offscreen: {
        x: -30,
    },
    onscreen: {
        x: 0,
        transition: {
            type: "slide",
            duration: 0.6,
            delay: .1
        },
    },
};
export const VariantsRight: Variants = {
    offscreen: {
        x: 30,
    },
    onscreen: {
        x: 0,
        transition: {
            type: "slide",
            duration: 0.6,
            delay: .1
        },
    },
};
export const VariantsLogo: Variants = {
    offscreen: {
        x: -180,
    },
    onscreen: {
        x: 0,
        transition: {
            type: "slide",
            duration: .6,
            delay: 0
        },
    },
};
