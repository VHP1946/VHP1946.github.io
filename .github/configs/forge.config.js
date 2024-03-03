const path = require('path');
const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

const appinfo = require('./package.json');

const shortName = appinfo.productName.replace(/\W/g,'-');

module.exports = {
    packagerConfig: {
        asar: true,
        overwrite: true,
        executableName: shortName,
        icon: path.join(appinfo.iconsPath, 'icon.ico'),
    },
    rebuildConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-wix",
            config: {
                icon: path.join(appinfo.iconsPath, 'icon.ico'),
                certificateFile: "",
                certificatePassword: "",
                manufacturer: "Vogel Home Products",
                applicationFileFolderName: "VHP Applications",
                shortcutFolderName: "VHP Apps",
                features: {
                    autoUpdate: true,
                    autoLaunch: false
                }
            }
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin', 'linux', 'win32'],
            config: {}
        }
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        // Fuses are used to enable/disable various Electron functionality
        // at package time, before code signing the application
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ]
};