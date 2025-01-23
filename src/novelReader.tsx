import React, { JSX, RefObject, useRef } from "react";

const readerContext =
  React.createContext<RefObject<HTMLDivElement | null> | null>(null);

type ComponentPropsWithClassName<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = {
  className?: string;
} & React.ComponentProps<T>;

export const Root: React.FC<ComponentPropsWithClassName<"div">> = (props) => {
  const viewer = useRef<HTMLDivElement>(null);
  return (
    <div {...props}>
      <readerContext.Provider value={viewer}>
        {props.children}
      </readerContext.Provider>
    </div>
  );
};

export const Viewer: React.FC<ComponentPropsWithClassName<"div">> = (props) => {
  const viewer = React.useContext(readerContext);
  return (
    <div {...props} ref={viewer}>
      {props.children}
    </div>
  );
};

export const NextButton: React.FC<ComponentPropsWithClassName<"button">> = (
  props
) => {
  const viewer = React.useContext(readerContext);
  return (
    <button {...props} onClick={() => console.log(viewer)}>
      {props.children}
    </button>
  );
};

export const PrevButton: React.FC<ComponentPropsWithClassName<"button">> = (
  props
) => {
  const viewer = React.useContext(readerContext);
  return (
    <button {...props} onClick={() => console.log(viewer)}>
      {props.children}
    </button>
  );
};
