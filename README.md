<p align="center">
  <img width="160" height="160" src="https://avatars.githubusercontent.com/u/65117737?s=160&v=4" />
</p>
<h1 align="center">Debug</h1>
<h3 align="center">
  Debug App for your Open Web Desktop client
</h3>

## Overview

This app for Open Web Desktop is a test module that displays information about windows.

## Installation

1.  Navigate to your client folder in your terminal:

    ```bash
    cd owd-client
    ```

2.  Install the desktop module using npm or yarn:

    ```bash
    npm install @owdproject/app-debug
    ```

3.  Register the application in your desktop configuration file:

    ```typescript
    // owd.config.ts
    export default defineDesktopConfig({
        apps: [
            '@owdproject/app-debug',
        ]
    })
    ```

## Compatibility

The application is compatible with Open Web Desktop client version `3.0.0-alpha.5`.

## License

The application is released under the [GNU General Public License v3](LICENSE).