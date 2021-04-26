const fs = require('fs');
const path = require('path');
const os = require('os');
function getWinChiaExe() {
    const chiaPath = path.resolve(os.homedir(), 'AppData', 'Local', 'chia-blockchain');
    const dir = fs.opendirSync(chiaPath);
    let dirent;
    let latestVersionApp='app-1.0.0';
    while (dirent = dir.readSync(), dirent) {
        if (dirent.name.startsWith('app-') && dirent.name > latestVersionApp) {
          latestVersionApp = dirent.name;
        }
    }
    return `${os.homedir}\\AppData\\Local\\chia-blockchain\\${latestVersionApp}\\resources\\app.asar.unpacked\\daemon\\chia.exe`
}

module.exports = {
  getWinChiaExe
}