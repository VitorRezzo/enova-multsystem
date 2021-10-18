const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electron', {

  
 //funções fechar janelas
  closeWindow: () => ipcRenderer.send('close-AppWindow'),
  closeserviceOSWindow: () => ipcRenderer.send('close-serviceOSWindow'),
  closeuserCadWindow: () => ipcRenderer.send('close-userCadWindow'),


  //funções minimizar janelas
  minloginWindow: () => ipcRenderer.send('min-loginWindow'),
  
  minhomeWindow: () => ipcRenderer.send('min-homeWindow'),

  minserviceosWindow: () => ipcRenderer.send('min-serviceOSWindow'),

  minusercadWindow: () => ipcRenderer.send('min-userCadWindow'),


  //funções abrir janelas
  openhomeWindow: () => ipcRenderer.send('open-homeWindow'),
  
  backLoginWindow: () => ipcRenderer.send('back-loginWindow'),

  openserviceOSWindow: () => ipcRenderer.send('open-serviceOSWindow'),

  openuserCadWindow: () => ipcRenderer.send('open-userCadWindow'),


})