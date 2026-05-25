const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

// ── URL del tuo Pattern Lab pubblicato su Replit ──────────────────────────
// Sostituisci con l'URL che vedi nella barra del browser quando apri l'app pubblicata
const APP_URL = "https://candle-pattern-extractor.replit.app";
// ─────────────────────────────────────────────────────────────────────────

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
    },non trov
    show: false,
  });

  mainWindow.loadURL(APP_URL);

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Apri i link esterni nel browser di sistema
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
        { type: "separator" },
        { label: "Strumenti sviluppatore", role: "toggleDevTools" },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  buildMenu();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
