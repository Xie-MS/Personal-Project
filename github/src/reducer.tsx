//    function reducer(
    
//   ) {
//     switch (action.type) {
//       case "addToCart": {
//         const newCartItems = [
//           ...state,
//           {
//             color: action.payload.product.colors.find(
//               (color) => color.code === action.payload.selectedColorCode
//             ),
//             id: action.payload.product.id,
//             image: action.payload.product.main_image,
//             name: action.payload.product.title,
//             price: action.payload.product.price,
//             qty: action.payload.quantity,
//             size: action.payload.selectedSize,
//             stock: getStock(
//               action.payload.product.variants,
//               action.payload.selectedColorCode,
//               action.payload.selectedSize
//             ),
//           },
//         ];
//         return newCartItems;
//       }
  
//       default:
//         return state;
//     }
//   }
  
//   export default reducer;
  