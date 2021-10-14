const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain =electron.ipcMain;
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let serviceOSWindow;
let homeWindow;

function createWindow() {
  
  mainWindow = new BrowserWindow({width: 300, height: 460,  
    frame: false,
    transparent: true,
    resizable:false,
    webPreferences: { 
      contextIsolation: true, 
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js") 
  }});

   
  homeWindow = new BrowserWindow({   show:false,webPreferences: { 
    contextIsolation: true, 
    enableRemoteModule: false,
    preload: path.join(__dirname, "preload.js") 
} });
  
  serviceOSWindow = new BrowserWindow({width: 400, height: 380, parent: homeWindow ,show:false });

  mainWindow.loadURL(isDev ? 'http://localhost:3000/' : `file://${path.join(__dirname, '../build/index.html')}`);
  
  homeWindow.loadURL(isDev ? 'http://localhost:3000/Home' : `file://${path.join(__dirname, '../build/index.html')}`);

  serviceOSWindow.loadURL(isDev ? 'http://localhost:3000/ServiceOS' : `file://${path.join(__dirname, '../build/index.html')}`);

  mainWindow.on('closed', () => mainWindow = null);

  serviceOSWindow.on('close', (event) => {
    event.preventDefault(); 
    serviceOSWindow.hide()
    });

    homeWindow.on('close', (event) => {
      event.preventDefault(); 
      homeWindow.hide()
      });


}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});



ipcMain.on('exit-window', () => {
  app.quit();
})

ipcMain.on('min-window', () => {
  mainWindow.minimize();
})


ipcMain.on('open-window', () => {
  serviceOSWindow.show();
})


ipcMain.on('open-homeWindow', () => {
   
  homeWindow.show();
  mainWindow.hide();
  homeWindow.maximize();
})


ipcMain.on('exit-homeWindow', () => {
 mainWindow.reload();
  mainWindow.show();
  homeWindow.hide();
})

