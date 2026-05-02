import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  width?: number;
  charset?: string;
  className?: string;
};

const DEFAULT_CHARSET =
  ".:-=+*#%@";
  // " .'`^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

export const AsciiArt: React.FC<Props> = ({
  src,
  width = 120,
  charset = DEFAULT_CHARSET,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ascii, setAscii] = useState<string>("");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const aspectRatio = img.height / img.width;
      const height = Math.floor(width * aspectRatio * 0.55);

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height).data;

      let result = "";
      const chars = charset;
      const charLen = chars.length - 1;

      for (let y = 0; y < height; y++) {
        let row = "";

        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;

          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];

          const a = imageData[i + 3];

          // skip transparent pixels
          if (a < 50) {
            row += " ";
            continue;
          }

          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          const charIndex = (brightness / 255) * charLen;
          row += chars[charIndex | 0];

        }

        result += row + "\n";
      }

      setAscii(result);
    };
  }, [src, width, charset]);

  return (
    <>
      <pre
        className={`font-mono whitespace-pre leading-none ${className}`}
        style={{
          fontSize: "6px",
          lineHeight: "6px",
        }}
      >
        {ascii}
      </pre>

      {/* hidden canvas for processing only */}
      <canvas ref={canvasRef} className="hidden" />
    </>
  );
};