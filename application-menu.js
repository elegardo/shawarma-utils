const { app, BrowserWindow, Menu } = require("electron");

const isMac = process.platform === 'darwin'
const template = [
    // { role: 'editMenu' }
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac ? [
          { role: 'pasteAndMatchStyle' },
          { role: 'delete' },
          { role: 'selectAll' },
          { type: 'separator' },
          {
            label: 'Speech',
            submenu: [
              { role: 'startspeaking' },
              { role: 'stopspeaking' }
            ]
          }
        ] : [
          { role: 'delete' },
          { type: 'separator' },
          { role: 'selectAll' }
        ])
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    }
  ]
  if (isMac) {
    const name = 'Shawarma utils';
    template.unshift({
      label: name,
      submenu: [
        {
          label: `About ${name}`,
          click() { openAboutWindow(); },
        },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        {
          label: `Hide ${name}`,
          accelerator: 'Command+H',
          role: 'hide',
        },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        {
          label: `Quit ${name}`,
          accelerator: 'Command+Q',
          click() { app.quit(); },
        },
      ],
    });
  }
  var newWindow = null
  function openAboutWindow() {
    if (newWindow) {
      newWindow.focus()
      return
    }
  
    newWindow = new BrowserWindow({
      height: 330,
      resizable: false,
      width: 450,
      title: 'About',
      minimizable: false,
      fullscreenable: false
    })
  
    newWindow.loadURL('file://' + __dirname + '/about.html')
  
    newWindow.on('closed', function() {
      newWindow = null
    })
  }

  module.exports = Menu.buildFromTemplate(template);