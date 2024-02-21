import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'main-blue': '#00B3D7',
        'main-gray': '#A1A1A1'
      }
    }
  }
}
