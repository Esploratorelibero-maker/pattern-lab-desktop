# Pattern Lab — App Desktop

## Cosa ti serve sul tuo PC

1. **Node.js** (versione 20 o superiore)
   → Scaricalo da: https://nodejs.org/it/ (scegli "LTS")

2. **Git** (facoltativo, serve solo per scaricare il progetto)

---

## Passaggi

### 1. Scarica questa cartella

Puoi scaricare la cartella `electron-app` dal tuo Replit:
- Apri il file manager di Replit → tasto destro su `electron-app` → **Download**

### 2. Trova il tuo URL pubblicato

Apri la tua app su Replit e guarda l'URL nella barra del browser quando usi l'app **pubblicata**.
Sarà qualcosa tipo: `https://nome-progetto.replit.app`

### 3. Inserisci l'URL in main.js

Apri il file `main.js` con un editor di testo (Blocco Note va bene).
Trova questa riga:

```
const APP_URL = "https://INSERISCI-QUI-IL-TUO-URL.replit.app";
```

Sostituisci il testo tra virgolette con il tuo URL reale.

### 4. Installa le dipendenze

Apri il **Terminale** (su Windows: cerca "cmd" o "PowerShell") nella cartella `electron-app` e lancia:

```
npm install
```

Aspetta che finisca (scarica Electron, ~150 MB la prima volta).

### 5. Prova l'app prima di compilare

```
npm start
```

Si apre la finestra desktop. Se funziona, procedi con la compilazione.

### 6. Compila il file installabile

**Su Windows** (crea un file `.exe`):
```
npm run build:win
```

**Su Mac** (crea un file `.dmg`):
```
npm run build:mac
```

Il file installabile si trova nella cartella `dist/` creata automaticamente.

---

## Note

- L'app richiede connessione internet (carica l'app dal server Replit)
- Su Windows potrebbe apparire un avviso "Windows ha protetto il PC" — clicca "Ulteriori informazioni" → "Esegui comunque"
- Su Mac potrebbe servire andare in Impostazioni → Privacy → Apri comunque
