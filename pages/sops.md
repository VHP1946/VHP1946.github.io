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
- [Git Interactions](#git-interactions)
  - [Commit Structure](#commit-structure)
  - [Branch Naming](#branch-naming)
  - [Repo Naming](#repo-naming)

---

## Documentation

### Logging Time
Use Jira.

### *docs* folder
The *docs* folder will hold technical documentation relevent to the component. At the minimum it holds a README.md and a CHANGELOG>MD, but it can hold additional folders and Markdown documents for more complex components. 

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
  - Mirrors the GitHub repository name / *repository* property (except case)
  - All lowercase
  - "vd-" denotes a desktop application
  - "va-" denotes a web-based application
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
- **iconsPath** (*optional*) -> Path to icon.ico / icon.svg for applications
- **repository** -> GitHub repository author and name
  - The "name" portion mirrors the *name* property (except case)
  - Format = 'VHP1946/{name}'
  - "VD-" denotes a desktop application
  - "VA-" denotes a web-based application
  - "vhp-" denotes a packaged module
  - "vs-" denotes a server setup
  - "vn-" denotes a network setup

Example:
```json
{
  "name": "vd-office",
  "version": "2.1.0",
  "productName": "VHP Office",
  "description": "VHP Office Desktop Application",
  "author": "VHPim",
  "license": "ISC",
  "iconsPath": "./bin/assets/",
  "repository": "VHP1946/VD-Office",
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

## Git Interactions

### Commit Structure

### Branch Naming

### Repo Naming
**see [Component Config](#component-config) above*