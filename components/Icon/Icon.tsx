"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type IconProps = {
  src: string; // шлях до SVG (локальний або URL)
  width?: number;
  height?: number;
  className?: string;
  inline?: boolean; // якщо true — SVG буде інлайн через innerHTML
  alt?: string;
};

const Icon: React.FC<IconProps> = ({
  src,
  width = 24,
  height = 24,
  className = "",
  inline = false,
  alt = "Default Icon",
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    if (inline && src.endsWith(".svg")) {
      fetch(src)
        .then((res) => res.text())
        .then(setSvgContent)
        .catch((err) => {
          console.error(`Failed to load SVG from ${src}`, err);
          setSvgContent(null);
        });
    }
  }, [src, inline]);

  if (inline && svgContent) {
    return (
      <span
        className={className}
        style={{ width, height, display: "inline-block" }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    );
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={className}
      alt={alt}
      aria-hidden="true"
    />
  );
};

export default Icon;
