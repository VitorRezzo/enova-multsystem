const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  //funções fechar janelas
  closeWindow: () => ipcRenderer.send("close-AppWindow"),
  closesuporteWindow: () => ipcRenderer.send("close-suporteWindow"),
  closeinstalacaoWindow: () => ipcRenderer.send("close-instalacaoWindow"),
  closeuserCadWindow: () => ipcRenderer.send("close-userCadWindow"),

  //funções minimizar janelas
  minloginWindow: () => ipcRenderer.send("min-loginWindow"),

  minhomeWindow: () => ipcRenderer.send("min-homeWindow"),

  minsuporteWindow: () => ipcRenderer.send("min-suporteWindow"),

  mininstalacaoWindow: () => ipcRenderer.send("min-instalacaoWindow"),

  minusercadWindow: () => ipcRenderer.send("min-userCadWindow"),

  //funções abrir janelas
  openhomeWindow: () => ipcRenderer.send("open-homeWindow"),

  backLoginWindow: () => ipcRenderer.send("back-loginWindow"),

  opensuporteWindow: () => ipcRenderer.send("open-suporteWindow"),

  openinstalacaoWindow: () => ipcRenderer.send("open-instalacaoWindow"),

  openuserCadWindow: () => ipcRenderer.send("open-userCadWindow"),
});
