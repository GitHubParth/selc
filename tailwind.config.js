/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      colors :{
        
        'primary-50': '#f1f8fe',
        'primary-100': '#e1f0fd',
        'primary-200': '#bde1fa',
        'primary-300': '#82c9f7',
        'primary-400': '#40aef0',
        'primary-500': '#279fe9',
        'primary-600': '#0a74bf',
        'primary-700': '#095d9b',
        'primary-800': '#0c4f80',
        'primary-900': '#10436a',
        'primary-950': '#0b2a46',
    },
    backgroundColor: {
      'primary-50': '#f1f8fe',
      'primary-100': '#e1f0fd',
      'primary-200': '#bde1fa',
      'primary-300': '#82c9f7',
      'primary-400': '#40aef0',
      'primary-500': '#279fe9',
      'primary-600': '#0a74bf',
      'primary-700': '#095d9b',
      'primary-800': '#0c4f80',
      'primary-900': '#10436a',
      'primary-950': '#0b2a46',
  },
  borderColor: {
    'primary-50': '#f1f8fe',
    'primary-100': '#e1f0fd',
    'primary-200': '#bde1fa',
    'primary-300': '#82c9f7',
    'primary-400': '#40aef0',
    'primary-500': '#279fe9',
    'primary-600': '#0a74bf',
    'primary-700': '#095d9b',
    'primary-800': '#0c4f80',
    'primary-900': '#10436a',
    'primary-950': '#0b2a46',
  },
  textColor: {
    'green-50': '#f0fdf4',
    'green-100': '#dcfce7',
    'green-200': '#bbf7d0',
    'green-300': '#86efac',
    'green-400': '#4ade80',
    'green-500': '#22c55e',
    'green-600': '#16a34a',
    'green-700': '#157d39',
    'green-800': '#166534',
    'green-900': '#14532d',
    'green-950': '#10311e',
  },

      dropShadow: {
        "black-10": "0 0 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        "Open-sans": ["Open Sans", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
