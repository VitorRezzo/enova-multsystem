const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  //funções fechar janelas
  closeWindow: () => ipcRenderer.send("close-AppWindow"),
  closesuporteWindow: () => ipcRenderer.send("close-suporteWindow"),
  closeuserCadWindow: () => ipcRenderer.send("close-userCadWindow"),

  //funções minimizar janelas
  minloginWindow: () => ipcRenderer.send("min-loginWindow"),

  minhomeWindow: () => ipcRenderer.send("min-homeWindow"),

  minsuporteWindow: () => ipcRenderer.send("min-suporteWindow"),

  minusercadWindow: () => ipcRenderer.send("min-userCadWindow"),

  //funções abrir janelas
  openhomeWindow: () => ipcRenderer.send("open-homeWindow"),

  backLoginWindow: () => ipcRenderer.send("back-loginWindow"),

  opensuporteWindow: () => ipcRenderer.send("open-suporteWindow"),

  openuserCadWindow: () => ipcRenderer.send("open-userCadWindow"),
});
