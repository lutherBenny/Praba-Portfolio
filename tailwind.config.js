module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        medicalBlue: '#4A90E2',   // Primary Color (for buttons, headings)
        medicalGreen: '#50B3A2',  // Secondary Color (for links, subtle highlights)
        accentGreen: '#2C7A7B',   // Accent Color (for hover states, minor highlights)
        textGray: '#333333',      // Text Color (for general text)
        bgGray: '#FAFAFA',        // Alternative soft white background color
        borderGray: '#E0E0E0',    // Border Color (for dividers, input borders)
      },
    },
  },
  plugins: [],
}
