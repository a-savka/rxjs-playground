
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  win = new BrowserWindow({});

  const formattedUrl = url.format({
    pathname: path.join(__dirname, '../../release/index.html'),
    protocol: 'file:',
    slashes: true
  });

  win.loadURL(formattedUrl);

  win.on('closed', () => {
    win = null;
  });

}
