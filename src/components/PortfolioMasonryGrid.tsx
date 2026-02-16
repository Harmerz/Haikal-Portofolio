import Image from "next/image";
import React from "react";

export interface PortfolioItem {
  id: string | number;
  type: "image" | "video";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

interface PortfolioMasonryGridProps {
  items: PortfolioItem[];
}

const PortfolioMasonryGrid: React.FC<PortfolioMasonryGridProps> = ({
  items,
}) => {
  return (
    <div className="columns-1 gap-4 space-y-4 p-4 md:columns-2 xl:columns-3">
      {items.map((item) => (
        <div
          key={item.id}
          className={`break-inside-avoid mb-4 ${item.className || ""}`}
        >
          <div className="group relative transform transition-all duration-200 hover:scale-[1.005]">
            {item.type === "video" ? (
              <video
                src={item.src}
                className="h-auto w-full overflow-hidden rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                alt={item.alt || "Portfolio Item"}
                width={item.width || 946}
                height={item.height || 540}
                className="h-auto w-full overflow-hidden rounded-xl"
                src={item.src}
              />
            )}
            <div className="absolute top-3 right-3 cursor-pointer opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-lg text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioMasonryGrid;
