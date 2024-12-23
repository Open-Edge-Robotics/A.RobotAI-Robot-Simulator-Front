import { cva } from "class-variance-authority";

const selectVariants = cva("whitespace-nowrap cursor-pointer", {
  variants: {
    isOpen: {
      true: "",
      false: "",
    },
    variant: {
      primary: "",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {},
});

const selectLabelVariants = cva("", {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {},
});

const selecTriggerVariants = cva("border border-gray-300", {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {},
});

const selectValueTextVariants = cva("no-wrap", {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {},
});

const selectGroupVariants = cva("scrollbar-thin border border-gray-300", {
  variants: {
    isOpen: {
      true: "flex flex-col gap-1 absolute z-10 overflow-y-auto",
      false: "hidden",
    },
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

const selectItemVariants = cva("hover:bg-gray-100", {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {},
});

export {
  selectVariants,
  selectLabelVariants,
  selecTriggerVariants,
  selectValueTextVariants,
  selectGroupVariants,
  selectItemVariants,
};
