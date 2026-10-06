// import React, { useState } from 'react';
//
// export function Counter2() {
//   const [count, setCount] = useState(0);
//
//   return (
//     <div>
//       <h2>Счётчик: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }
//
//
//
//
//
// export function StepCounter() {
//   const [count, setCount] = useState(10);
//
//   return (
//     <div>
//       <h2>Счётчик: {count}</h2>
//       <button onClick={() => setCount(count + 5)}>+5</button>
//       <button onClick={() => setCount(count - 5)}>-5</button>
//     </div>
//   );
// }
//
//
//
//
// export function TextChanger() {
//   const [text, setText] = useState("Привет!");
//
//   return (
//     <div>
//       <h2>{text}</h2>
//       <button onClick={() => setText("Добро пожаловать!")}>Изменить</button>
//     </div>
//   );
// }
//
// export function NameChanger() {
//   const [name, setName] = useState("User");
//
//   return (
//     <div>
//       <h2>Привет, {name}!</h2>
//       <button onClick={() => setName("Alex")}>Alex</button>
//       <button onClick={() => setName("John")}>John</button>
//       <button onClick={() => setName("Sam")}>Sam</button>
//     </div>
//   );
// }
//
// export function Switcher() {
//   const [isOn, setIsOn] = useState(false);
//
//   return (
//     <div>
//       <h2>Состояние: {isOn ? "ON" : "OFF"}</h2>
//       <button onClick={() => setIsOn(!isOn)}>
//         {isOn ? "Выключить" : "Включить"}
//       </button>
//     </div>
//   );
// }
//
// export function LikeButton() {
//   const [likes, setLikes] = useState(0);
//
//   return (
//     <div>
//       <h2>Likes: {likes}</h2>
//       <button onClick={() => setLikes(likes + 1)}>️ Like</button>
//     </div>
//   );
// }
//
// export function ColorPicker() {
//   const [color, setColor] = useState("не выбран");
//
//   return (
//     <div>
//       <h2>Выбранный цвет: {color}</h2>
//       <button onClick={() => setColor("Красный")}> Красный</button>
//       <button onClick={() => setColor("Синий")}> Синий</button>
//       <button onClick={() => setColor("Зелёный")}> Зелёный</button>
//       <button onClick={() => setColor("Жёлтый")}> Жёлтый</button>
//     </div>
//   );
// }
//
// export function ImageSwitcher() {
//   const catUrl = "https://doctor-veterinar.ru/media/k2/items/cache/675d28c04794e3c683f4419536c4c15f_L.jpg";
//   const dogUrl = "https://optim.tildacdn.com/tild3235-3762-4833-a138-613635376461/-/resize/710x/-/format/webp/Small_dog_breeds.jpg.webp";
//
//   const [image, setImage] = useState(catUrl);
//
//   return (
//     <div>
//       <div>
//         <button onClick={() => setImage(catUrl)}>Кот</button>
//         <button onClick={() => setImage(dogUrl)}>Собака</button>
//       </div>
//       <br />
//       <img src={image} alt="Питомец" width="300" height="200" />
//     </div>
//   );
// }
//
//
// export function ShoppingCart() {
//   const [cartCount, setCartCount] = useState(0);
//
//   return (
//     <div>
//       <h2>Товаров в корзине: {cartCount}</h2>
//       <button onClick={() => setCartCount(cartCount + 1)}> Добавить</button>
//       <button onClick={() => setCartCount(cartCount > 0 ? cartCount - 1 : 0)}>
//         ➖ Удалить
//       </button>
//     </div>
//   );
// }
//
//
// export function ProductCard() {
//   const [likes, setLikes] = useState(0);
//   const [cartCount, setCartCount] = useState(0);
//
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '250px' }}>
//       <img
//         src="https://asset.openshop.uz/uploads/products/thumbnail/202603/llyCyKx54ajc0ZtIDqxajZ4QpmpGCWb2.jpg"
//         alt=""
//         style={{ width: '100%', borderRadius: '4px' }}
//       />
//       <h3>📱 iPhone</h3>
//       <p>💰 10 000 000 сум</p>
//
//       <hr />
//
//       <p>❤️ Likes: {likes}</p>
//       <p>🛒 В корзине: {cartCount}</p>
//
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//         <button onClick={() => setLikes(likes + 1)}> Like</button>
//         <button onClick={() => setCartCount(cartCount + 1)}> Добавить в корзину</button>
//         <button onClick={() => setCartCount(cartCount > 0 ? cartCount - 1 : 0)}>
//           ➖ Удалить из корзины
//         </button>
//       </div>
//     </div>
//   );
// }
//
