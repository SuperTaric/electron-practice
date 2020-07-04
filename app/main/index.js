const {app} = require('electron')
const handleIPC = require('./ipc')
// const {create: createMainWidow} = require('./windows/main')
const {create: createControlWidow} = require('./windows/control')

app.on('ready', () => {
  createControlWidow()
  handleIPC()
})
