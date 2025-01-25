import { app, BrowserWindow } from 'electron';
import contextMenu from 'electron-context-menu';
import { getDataFromEndpoint, postDataToEndpoint } from './valtown-api';

let mainWindow: BrowserWindow | null;

const createWindow = (): void => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        autoHideMenuBar: true,
        width: 1366,
        height: 768,
        show: false,
    });

    mainWindow.loadFile('index.html');

    mainWindow.once('ready-to-show', () => {
        mainWindow?.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', () => {
    createWindow();

    contextMenu({
        prepend: (defaultActions, params, browserWindow) => [
            {
                label: 'Fetch Data from Valtown',
                click: async () => {
                    try {
                        const data = await getDataFromEndpoint('your-endpoint');
                        console.log('Data fetched:', data);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                },
            },
            {
                label: 'Send Data to Valtown',
                click: async () => {
                    try {
                        const response = await postDataToEndpoint('your-endpoint', { key: 'value' });
                        console.log('Data sent:', response);
                    } catch (error) {
                        console.error('Error sending data:', error);
                    }
                },
            },
        ],
    });
});

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
