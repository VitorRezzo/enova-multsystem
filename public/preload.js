const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electron', {

  openWindow: () => ipcRenderer.send('open-window'),

  openhomeWindow: () => ipcRenderer.send('open-homeWindow'),
  
  exithomeWindow: () => ipcRenderer.send('exit-homeWindow'),


  minWindow: () => ipcRenderer.send('min-window'),
  
  exitWindow: () => ipcRenderer.send('exit-window'),

  
})