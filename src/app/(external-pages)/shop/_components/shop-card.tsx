import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ShopCardProperties {
  id: string | undefined;
  category: string;
  title: string;
  rating: number;
  price: number;
  oldPrice?: number;
  image: string;
}

export const ShopCard = ({
  id,
  category,
  title,
  rating,
  price,
  oldPrice,
  image,
}: ShopCardProperties) => {
  return (
    <Link href={`/shop/products/${id}`} className="block rounded-lg border p-4">
      <div className="mb-3 aspect-square overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm capitalize text-gray-500">{category}</p>
        <p className="line-clamp-2 font-medium">{title}</p>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={`${
                index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-primary">₦{price.toLocaleString()}</p>
          {oldPrice && (
            <p className="text-sm text-gray-500 line-through">
              ₦{oldPrice.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
