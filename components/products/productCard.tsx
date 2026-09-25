import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  slug: string;
};

export function ProductCard({ name, price, image, slug }: ProductCardProps) {
  return (
    <article className="group">
      <Link href={`/products/${slug}`}>
        <div className="relative aspect-square overflow-hidden bg-surface">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-end bg-linear-to from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="w-full p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                View Product →
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-bold uppercase tracking-tight">{name}</h2>

          <p className="mt-1 text-sm font-semibold text-primary">
            ₦{price.toLocaleString()}
          </p>
        </div>
      </Link>
    </article>
  );
}
