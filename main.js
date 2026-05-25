const { app, BrowserWindow, Menu, shell, session } = require("electron");

const APP_URL = "https://candle-pattern-extractor.replit.app";

const CHROME_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    title: "Pattern Lab",
    backgroundColor: "#09090b",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    show: false,
  });

  mainWindow.webContents.setUserAgent(CHROME_UA);
  mainWindow.loadURL(APP_URL);

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function buildMenu() {
  const template = [
    {
      label: "Pattern Lab",
      submenu: [
        { label: "Ricarica", accelerator: "CmdOrCtrl+R", role: "reload" },
        { type: "separator" },
        { label: "Esci", accelerator: "CmdOrCtrl+Q", role: "quit" },
      ],
    },
    {
      label: "Visualizza",
      submenu: [
        { label: "Schermo intero", role: "togglefullscreen" },
        { label: "Zoom avanti", role: "zoomIn" },
        { label: "Zoom indietro", role: "zoomOut" },
        { label: "Zoom originale", role: "resetZoom" },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders["User-Agent"] = CHROME_UA;
    callback({ requestHeaders: details.requestHeaders });
  });

  buildMenu();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
