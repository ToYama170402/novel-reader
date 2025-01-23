import React, { JSX, RefObject, useRef, useEffect } from "react";

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

  const handleClick = () => {
    const viewerWidth = viewer!.current?.clientWidth;
    if (viewerWidth) {
      viewer!.current!.scrollBy(-viewerWidth, 0);
    }
  };

  useEffect(() => {
    const writingDirection = viewer!.current?.style.writingMode.replace(
      /.*-(rl|lr|tb)/g,
      "$1"
    );
    document.addEventListener("keydown", (e) => {
      if (
        (writingDirection === "lr" && e.key === "ArrowRight") ||
        (writingDirection === "rl" && e.key === "ArrowLeft")
      ) {
        handleClick();
      }
    });
  }, []);

  return (
    <button {...props} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export const PrevButton: React.FC<ComponentPropsWithClassName<"button">> = (
  props
) => {
  const viewer = React.useContext(readerContext);

  const handleClick = () => {
    const viewerWidth = viewer!.current?.clientWidth;
    if (viewerWidth) {
      viewer!.current!.scrollBy(viewerWidth, 0);
    }
  };

  useEffect(() => {
    const writingDirection = viewer!.current?.style.writingMode.replace(
      /.*-(rl|lr|tb)/g,
      "$1"
    );
    document.addEventListener("keydown", (e) => {
      if (
        (writingDirection === "lr" && e.key === "ArrowLeft") ||
        (writingDirection === "rl" && e.key === "ArrowRight")
      ) {
        handleClick();
      }
    });
  }, []);

  return (
    <button {...props} onClick={handleClick}>
      {props.children}
    </button>
  );
};
