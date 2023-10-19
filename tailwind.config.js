// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//           primaryColor: '#2D68FF',
//           descriptionColor: '#7F7F7F',
//           backgroundColor: '#F4F9FF',
//       }
//   }
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       "light",
//       "dark"
//     ],
//   },
// }


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2D68FF',
        descriptionColor: '#7F7F7F',
        backgroundColor: '#F4F9FF',
      },
      fontFamily: {
        heading: ['Fjalla One', 'sans-serif'], // Replace "Your Custom Font" with your actual font name
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark"
    ],
  },
}


