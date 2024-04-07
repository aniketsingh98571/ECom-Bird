/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
      //for containing the elements at larger devices
      'center-width':'1400px'
    },
    width:{
      'page-width':'90%',
    },
    colors:{
      't-white':"#ffffff",
      't-black':"#000000"
    },
    backgroundColor:{
      'b-white':'#ffffff',
      'b-black':"#000000",
      'skin-b':'#F5F5F5'
    }
  },
  plugins: [],
};
