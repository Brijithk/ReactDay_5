// foodData.ts

export type FoodItem = {
  id: number;
  imageSrc: string;
  name: string;
  price: number;
};

export const foodMenu: FoodItem[] = [
  { id: 1, imageSrc: "https://i.pinimg.com/736x/eb/54/02/eb540235d83a54a33a4c726276a5ff13.jpg", name: "Margherita Pizza", price: 99.99 },





  { id: 2, imageSrc: "https://thespiceway.com/cdn/shop/files/Signature_Savory_Classic_Burger.jpg", name: "Classic Burger", price: 79.49 },




  
  { id: 3, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6GH8v3QnsOMZq60niSDUN4x7BOyUi5VL_Q&s", name: "Penne Alfredo", price: 89.99 },
];
