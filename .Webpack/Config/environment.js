import webpack from 'webpack'

const env = new webpack.EnvironmentPlugin(['NODE_ENV'])

export default {
  plugins: [env],
}
