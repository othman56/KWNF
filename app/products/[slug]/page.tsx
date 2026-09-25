import { notFound } from "next/navigation";

import { ProductDetails } from "@/components/products/productDetails";
import { products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <ProductDetails product={product} />
      </div>
    </main>
  );
}
