[Tech Docs Home](../) | [Go Back](../) | [Repo Link](https://github.com/VHP1946/VHP1946.github.io) | [Jira Link](https://vhp.atlassian.net)

# IM Team Standards

- [Documentation](#documentation)
  - [Logging Time](#logging-time)
  - [Code Commenting](../resources/Code Commenting.js)
  - [*docs* Folder](#docs-folder)
  - [README Structure](#readme-structure)
  - [CHANGELOG Structure](#changelog-structure)
- [Configuration](#configuration)
  - [Component Config](#component-config)
  - [Application Config](#application-config)
  - [Electron Config (Forge)](#electron-config-forge)
- [Git Interactions]
  - [Commit Structure]
  - [Branch Naming]
  - [Repo Naming]

---

## Documentation

### Logging Time

### *docs* folder

### README Structure
[View Code](../resources/readme-example.md) |
<a href="../resources/readme-example.md" download="README.md">Download an Example</a> |
[View the Rendered Results](../resources/readme-example)

### CHANGELOG Structure
[View Code](../resources/changelog-example.md) |
<a href="../resources/changelog-example.md" download="CHANGELOG.md">Download an Example</a> |
[View the Rendered Results](../resources/changelog-example)


## Configuration

### Component Config
Component configuration should be in a *package.json* file
- **name** -> The abbreviated name of the product / the “Programmatic Name”
  - Mirrors the GitHub Repo name
  - "VD-" denotes a desktop application
  - "VA-" denotes a web-based application
  - "vhp-" denotes a packaged module
  - "vs-" denotes a server setup
  - "vn-" denotes a network setup
  - Update File : {**name**}-{version}-full.nupkg
- **version** -> The version number (set by developer via [Semantic Versioning](https://semver.org/))
  - Update File : {name}-{**version**}-full.nupkg
  - Installer Executable : {productName}-{**version**} Setup.exe
- **productName** -> The long-form product name / the “Display Name”
  - Installer Executable : {**productName**}-{version} Setup.exe
- **description** -> A short description of the product
- **author** -> The primary developer on the product

Example:
```json
{
  "name": "VD-Office",
  "version": "1.1.0",
  "productName": "VHP Office Desktop",
  "description": "Electron Portal for Office Use",
  "author": "VHP-IM"
}
```

### Application Config
Application configuration should be in a folder named *app* at the root of the product. There should be at least two versions of the file: *config-live.json* and *config-dev*.json. These are to be easily switched between within the initial setup code, typically *app.js*

Example:
```json
{
  "appname": "VD-Office",
  "dev": false
}
```

### Electron Config (Forge)
Within *package.json*

Example:
```json
{
  "config": {
    "forge": {
      "packagerConfig": {
        "icon": "./bin/assets/V-Mark-red.ico",
        "executableName": "Res-Office",
        "asar": true,
        "overwrite": true
      }
    }
  }
}
```

## Git Interactions

### Commit Structure

### Branch Naming

### Repo Naming
*see [Component Config](#component-config) above*