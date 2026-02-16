import Image from "next/image";
import React from "react";

export interface SoftwareProject {
  id: string | number;
  title: string;
  year: string;
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface SoftwarePortfolioGridProps {
  items: SoftwareProject[];
}

const SoftwarePortfolioGrid: React.FC<SoftwarePortfolioGridProps> = ({
  items,
}) => {
  // Distribute items into 3 columns for masonry layout
  const columns: SoftwareProject[][] = [[], [], []];
  items.forEach((item, index) => {
    columns[index % 3].push(item);
  });

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-1">
          {column.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[#E7E7E7] bg-[#F3F3F3] p-1.5 dark:border-[#ffffff] dark:bg-[#ffffff]"
            >
              <div className="relative w-full">
                <div className="w-full overflow-hidden rounded-lg">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="w-full transform transition-all duration-500 hover:scale-[1.007]"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <Image
                      alt={item.alt || item.title}
                      src={item.src}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-auto w-full transform transition-all duration-500 hover:scale-[1.007]"
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </div>
                <div className="absolute bottom-0 flex w-full justify-between rounded-b-lg bg-gradient-to-t from-white to-transparent p-4 pt-16">
                  <h3 className="text-xs text-white/70">{item.title}</h3>
                  <h4 className="text-xs text-white/70">{item.year}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SoftwarePortfolioGrid;
