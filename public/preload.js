const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electron', {

  openWindow: () => ipcRenderer.send('open-window'),

  openhomeWindow: () => ipcRenderer.send('open-homeWindow'),
  
  exithomeWindow: () => ipcRenderer.send('exit-homeWindow'),


  minWindow: () => ipcRenderer.send('min-window'),
  minWindowhome: () => ipcRenderer.send('min-windowHome'),

  
  exitWindow: () => ipcRenderer.send('exit-window'),

  
})