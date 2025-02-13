import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    postcssPresetEnv({
      browsers: ['last 2 versions'],
      features: {
        'custom-properties': true,
        'custom-selectors': true,
      },
    }),
    autoprefixer,
    tailwindcss(),
  ],
}
