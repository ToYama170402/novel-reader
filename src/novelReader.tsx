import React, { JSX, RefObject, useRef, useEffect, useState } from "react";

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
  const [viewerHeight, setViewerHeight] = useState(0);
  const [viewerWidth, setViewerWidth] = useState(0);
  useEffect(() => {
    setViewerHeight(viewer!.current?.clientHeight || 0);
    setViewerWidth(viewer!.current?.clientWidth || 0);
  }, []);
  return (
    <div
      {...props}
      style={{
        ...props.style,
        columnWidth: `${props.style?.writingMode?.match(/vertical/) ? viewerHeight : viewerWidth}px`,
        columnGap: 0,
        columnRule: "none",
        columnCount: "auto",
        columnFill: "auto",
        columnSpan: "none",
      }}
      ref={viewer}
    >
      {props.children}
    </div>
  );
};

export const LeftButton: React.FC<ComponentPropsWithClassName<"button">> = (
  props
) => {
  const viewer = React.useContext(readerContext);

  const handleClick = () => {
    const viewerWidth = viewer!.current?.clientWidth;
    const viewerHeight = viewer!.current?.clientHeight;
    const isVertical = !!getComputedStyle(
      viewer!.current as Element
    ).writingMode.match(/vertical/);
    if (isVertical) {
      viewer!.current!.scrollBy(0, viewerHeight!);
    } else {
      viewer!.current!.scrollBy(-viewerWidth!, 0);
    }
  };

  useEffect(() => {
    const isR2L = !!getComputedStyle(
      viewer!.current as Element
    ).writingMode.match(/rl/);
    document.addEventListener("keydown", (e) => {
      if (
        (!isR2L && e.key === "ArrowRight") ||
        (isR2L && e.key === "ArrowLeft")
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

export const RightButton: React.FC<ComponentPropsWithClassName<"button">> = (
  props
) => {
  const viewer = React.useContext(readerContext);

  const handleClick = () => {
    const viewerWidth = viewer!.current?.clientWidth;
    const viewerHeight = viewer!.current?.clientHeight;
    const isVertical = !!getComputedStyle(
      viewer!.current as Element
    ).writingMode.match(/vertical/);
    if (isVertical) {
      viewer!.current!.scrollBy(0, -viewerHeight!);
    } else {
      viewer!.current!.scrollBy(viewerWidth!, 0);
    }
  };

  useEffect(() => {
    const isR2L = !!getComputedStyle(
      viewer!.current as Element
    ).writingMode.match(/rl/);
    document.addEventListener("keydown", (e) => {
      if (
        (!isR2L && e.key === "ArrowLeft") ||
        (isR2L && e.key === "ArrowRight")
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
