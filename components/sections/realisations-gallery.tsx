import fs from "fs";
import path from "path";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";

type RealisationsGalleryProps = {
  limit?: number;
};

function hasImage(src: string) {
  const normalized = src.startsWith("/") ? src.slice(1) : src;
  const absolutePath = path.join(process.cwd(), "public", normalized);
  return fs.existsSync(absolutePath);
}

export function RealisationsGallery({ limit }: RealisationsGalleryProps) {
  const items = (limit ? galleryItems.slice(0, limit) : galleryItems).map((item) => ({
    ...item,
    available: hasImage(item.src)
  }));

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="overflow-hidden rounded-3xl border border-[#decfc7] bg-white shadow-card">
          {item.available ? (
            <Image src={item.src} alt={item.alt} width={1100} height={1400} className="h-72 w-full object-cover" />
          ) : (
            <div className="flex h-72 w-full items-center justify-center bg-[#f3e9df] p-6 text-center text-sm text-[#7f6146]">
              Photo en cours d'ajout
            </div>
          )}
          <div className="p-5">
            <p className="text-sm leading-relaxed text-[#6a4c50]">{item.caption}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
