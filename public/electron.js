const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

let loginWindow;
let suporteWindow;
let homeWindow;
let userCadWindow;

function createWindow() {
  loginWindow = new BrowserWindow({
    width: 300,
    height: 460,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  homeWindow = new BrowserWindow({
    frame: false,
    show: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  suporteWindow = new BrowserWindow({
    width: 800,
    backgroundColor: "#011126",
    height: 650,
    parent: homeWindow,
    frame: false,
    show: false,
    resizable: false,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  userCadWindow = new BrowserWindow({
    width: 800,
    height: 560,
    parent: homeWindow,
    frame: false,
    show: false,
    resizable: false,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  loginWindow.loadURL(
    isDev
      ? "http://localhost:3000/"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  homeWindow.loadURL(
    isDev
      ? "http://localhost:3000/Home"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  suporteWindow.loadURL(
    isDev
      ? "http://localhost:3000/Suporte"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  userCadWindow.loadURL(
    isDev
      ? "http://localhost:3000/UserCad"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (loginWindow === null) {
    createWindow();
  }
});

//Eventos minimizar janelas

ipcMain.on("min-loginWindow", () => {
  loginWindow.minimize();
});

ipcMain.on("min-homeWindow", () => {
  homeWindow.minimize();
});

ipcMain.on("min-suporteWindow", () => {
  suporteWindow.minimize();
});

ipcMain.on("min-userCadWindow", () => {
  userCadWindow.minimize();
});

//Eventos fechar janelas
ipcMain.on("close-AppWindow", () => {
  app.quit();
});

ipcMain.on("close-suporteWindow", () => {
  suporteWindow.reload();
  suporteWindow.hide();
});

ipcMain.on("close-userCadWindow", () => {
  userCadWindow.reload();
  userCadWindow.hide();
});
//Eventos abrir janelas

ipcMain.on("open-homeWindow", () => {
  homeWindow.show();
  homeWindow.maximize();
  loginWindow.hide();
});

ipcMain.on("back-loginWindow", () => {
  loginWindow.reload();
  loginWindow.show();
  homeWindow.close();
});

ipcMain.on("open-suporteWindow", () => {
  suporteWindow.show();
});

ipcMain.on("open-userCadWindow", () => {
  userCadWindow.show();
});
