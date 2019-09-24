"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({});
    var formattedUrl = url.format({
        pathname: path.join(__dirname, '../../release/index.html'),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(formattedUrl);
    win.on('closed', function () {
        win = null;
    });
}
//# sourceMappingURL=main.js.map