const data = {
  products: [
    {
      name: "Espresso",
      category: "HOT CLASSICS",
      image: "/images/espresso.jpeg",
      price: 5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "espresso",
      discount: 1.5,
    },
    {
      name: "Affogato",
      category: "HOT CLASSICS",
      image: "/images/AFFOGATO.jpeg",
      price: 8,
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "Affogato",
      discount: 0.5,
    },
    {
      name: "Cappuccino",
      category: "HOT CLASSICS",
      image: "/images/cappacino.jpeg",
      price: 9,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "hot-classics",
      discount: 2.5,
    },
    {
      name: "Café Latte",
      category: "HOT CLASSICS",
      image: "/images/cafe-latte.jpeg",
      price: 9.0,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "café-latte",
      discount: 0,
    },
    {
      name: "Barista",
      category: "COLD CLASSICS",
      image: "/images/barista.jpeg",
      price: 9.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "barista",
      discount: 0,
    },
    {
      name: "Iced Americano",
      category: "COLD CLASSICS",
      image: "/images/iced-americano.jpeg",
      price: 7.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "iced-americano",
      discount: 1,
    },
    {
      name: "Smoothies",
      category: "COLD CLASSICS",
      image: "/images/smoothie.png",
      price: 5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "smoothies",
      discount: 0,
    },
    {
      name: "Ginger Honey",
      category: "TEA",
      image: "/images/ginger-honey.png",
      price: 3.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "ginger-honey",
      discount: 0.75,
    },
    {
      name: "Green Tea",
      category: "TEA",
      image: "/images/green-tea.jpeg",
      price: 7.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "green-tea",
      discount: 0.8,
    },
    {
      name: "Assam Tea",
      category: "TEA",
      image: "/images/assam-tea.jpeg",
      price: 7.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "assam-tea",
      discount: 0,
    },
    {
      name: "Jamun Banta",
      category: "MOJITOS / LEMONADES",
      image: "/images/jamun-banta.jpeg",
      price: 5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "jamun-banta",
      discount: 0,
    },
    {
      name: "Fizzy Lemon Grass",
      category: "MOJITOS / LEMONADES",
      image: "/images/ginger-lemongrass.jpeg",
      price: 5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "fizzy-lemongrass",
      discount: 0.5,
    },
    {
      name: "Green Apple Lemonade",
      category: "MOJITOS / LEMONADES",
      image: "/images/green-apple-lemonade.png",
      price: 7.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "green-apple-lemonade",
      discount: 0.5,
    },
    {
      name: "Classic Mojito",
      category: "MOJITOS / LEMONADES",
      image: "/images/classic-mojito.jpeg",
      price: 7.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "classic-mojito",
      discount: 1.5,
    },
    {
      name: "Peach Iced Tea",
      category: "ICED TEAS",
      image: "/images/peach-ice-tea.png",
      price: 7.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "peach-ice-tea",
      discount: 0.75,
    },
    {
      name: "Lemon Iced Tea",
      category: "ICED TEAS",
      image: "/images/lemon-ice-tea.jpeg",
      price: 7,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "lemon-ice-tea",
      discount: 0.3,
    },
    {
      name: "Bread & Cappucino",
      category: "COMBO",
      image: "/images/bread-capucino.jpg",
      price: 11.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "bread-cappucino",
      discount: 20,
    },
    {
      name: "Bread",
      category: "BREAD",
      image: "/images/bread.jpeg",
      price: 2.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "bread",
      discount: 0,
    },
    {
      name: "Scrambled Egg",
      category: "BREAD",
      image: "/images/scrambled-egg.jpg",
      price: 2.5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "bread",
      discount: 0,
    },
    {
      name: "Bread & Scrambled Egg",
      category: "BREAD",
      image: "/images/bread-scrambled-egg.jpg",
      price: 5,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Great espresso drink",
      slug: "bread",
      discount: 10,
    },
  ],
};
export default data;
