/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // You can extend your theme here (e.g., adding custom colors)
      colors: {
        customColor: '#123456',  // Example color customization
      },
    },
  },
  plugins: [
    // Uncomment and add plugins if needed
    // require('@tailwindcss/line-clamp'),
  ],
};
