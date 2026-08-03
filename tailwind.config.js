export default {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./games/**/*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['clamp(0.75rem, 1.2vw, 1rem)', { lineHeight: '1.2' }],
        'sm': ['clamp(0.875rem, 1.5vw, 1.25rem)', { lineHeight: '1.3' }],
        'base': ['clamp(1rem, 1.8vw, 1.5rem)', { lineHeight: '1.4' }],
        'lg': ['clamp(1.125rem, 2vw, 1.75rem)', { lineHeight: '1.5' }],
        'xl': ['clamp(1.25rem, 2.2vw, 2rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.5rem, 2.8vw, 2.5rem)', { lineHeight: '1.6' }],
        '3xl': ['clamp(1.875rem, 3.5vw, 3.25rem)', { lineHeight: '1.4' }],
        '4xl': ['clamp(2.25rem, 4.2vw, 4.25rem)', { lineHeight: '1.3' }],
        '5xl': ['clamp(3rem, 5.5vw, 5.5rem)', { lineHeight: '1.2' }]
      }
    }
  },
  plugins: []
}

