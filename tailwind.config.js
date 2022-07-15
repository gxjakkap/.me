/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),require("daisyui")],
  daisyui: {
    themes: [
        {
          lightTheme: {     
              "primary": "#2563eb",  
              "secondary": "#db2777",    
              "accent": "#d7ea8c", 
              "neutral": "#1C2430",
              "base-100": "#f3f4f6",    
              "info": "#4FB2D8",    
              "success": "#23CDBF",
              "warning": "#BC8B06",   
              "error": "#EA667C",
        },
      },
      {
          darkTheme: {
            "primary": "#2563eb",  
            "secondary": "#db2777",  
            "accent": "#d7ea8c",
            "neutral": "#d1d5db",
            "base-100": "#27303b",
            "info": "#4FB2D8", 
            "success": "#23CDBF", 
            "warning": "#BC8B06", 
            "error": "#EA667C",
      },
    },
  ],
    darkTheme: 'darkTheme'
  }
}
