export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  description: string;
  sizes: number[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Street Runner",
    price: 85000,
    image: "/images/products/street-runner.jpg",
    slug: "street-runner",
    description:
      "A clean everyday sneaker built for movement, comfort, and street style.",
    sizes: [40, 41, 42, 43, 44],
  },
  {
    id: "2",
    name: "Urban Force",
    price: 95000,
    image: "/images/products/urban-force.jpg",
    slug: "urban-force",
    description:
      "Bold street-inspired kicks designed to bring energy to every outfit.",
    sizes: [40, 41, 42, 43, 44],
  },
  {
    id: "3",
    name: "Night Rider",
    price: 120000,
    image: "/images/products/night-rider.jpg",
    slug: "night-rider",
    description:
      "A sleek sneaker with a bold silhouette for late nights and everyday style.",
    sizes: [41, 42, 43, 44, 45],
  },
  {
    id: "4",
    name: "KWNF Classic",
    price: 75000,
    image: "/images/products/kwnf-classic.jpg",
    slug: "kwnf-classic",
    description:
      "A timeless everyday sneaker combining simplicity, comfort, and KWNF energy.",
    sizes: [39, 40, 41, 42, 43],
  },
  {
    id: "5",
    name: "City Flex",
    price: 110000,
    image: "/images/products/city-flex.jpg",
    slug: "city-flex",
    description:
      "Flexible everyday sneakers made for moving through the city in style.",
    sizes: [40, 41, 42, 43, 44],
  },
  {
    id: "6",
    name: "Fresh Step",
    price: 90000,
    image: "/images/products/fresh-step.jpg",
    slug: "fresh-step",
    description:
      "Fresh, versatile kicks designed to complete your everyday streetwear look.",
    sizes: [39, 40, 41, 42, 43, 44],
  },
];
