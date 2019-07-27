import colors from 'colors'
import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import { clean, resolve, } from './Config'
import { browser, browserInstance } from './Config/prodServer'
import { devConfig } from './development.babel'
import { Args } from './Utilities'

const mode = process.env.NODE_ENV || 'production'
const watch = !Args.noWatch

const config = webpackMerge(devConfig, clean, {
  mode,
  resolve,
  watch,
})

const FAILURE_MESSAGE = colors.red('Failures while starting application on production environment')
const SUCCESS_MESSAGE = colors.green('App compiled successfully')

const COLORS = {
  red: '#d8000c',
  yellow: '#9f6000'
}

class StatsReports {
  constructor (reports, color, maxLength = 10) {
    const length = reports.length
    const extraLength = length - maxLength
    const concatMessage = `${extraLength} more...`
    
    reports = reports.slice(0, maxLength)
    
    this.results = reports.slice(0, maxLength).map(
      report => ({
        html: `<p style='color:${COLORS[color]}'>${report}</p>`,
        message: colors[color](report)
      })
    )
    
    if (extraLength > 0) {
      this.results.push({
        html: `<p>${concatMessage}</p>`,
        message: colors[color](concatMessage)
      })
    }
    
    return this.results
  }
}

const statsHandler = async stats => new Promise(
  (resolve, reject) => {
    let errorMessages
    
    const {
      compilation: {
        errors
      }
    } = stats
    
    if (stats.hasErrors()) {
      errorMessages = new StatsReports(errors.map(
        ({ message }) => message),
        'red'
      )
      
      errorMessages.forEach(
        ({ message }) => console.error(message))
  
      browserInstance.sockets.emit('fullscreen:message', {
        title: 'Webpack Error:',
        body: errorMessages.map(({
          html
        }) => html).join(''),
        timeout: 100000
      })
  
      reject(errors)
      
      return
    }
    
    console.log(SUCCESS_MESSAGE)
    resolve(stats)
  }
)

const production = new Promise(
  (resolve, reject) => webpack(
    config,
    (errors, stats) => statsHandler(stats)
    .then(resolve)
    .catch(reject)
  )
)

process.env.NODE_ENV = mode

export default production.then(browser).catch(errors => {
  console.error(FAILURE_MESSAGE)
  console.error(errors)
})
