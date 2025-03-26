<p align="center">
  <img src="media/screenshot.png" alt="OWD Debug App" width="400" />
</p>

# Debug App

> Debug app for your Open Web Desktop client

## Overview

The OWD Debug App is a module to test out Open Web Desktop and see how windows work within the OWD environment.

## Quick Installation

1.  Navigate to your OWD client folder in your terminal:
    ```bash
    cd owd-client
    ```
2.  Install the module using npm or yarn:
    ```bash
    npm install https://github.com/owdproject/owd-app-debug.git
    ```
3.  Register the application in your OWD configuration file (`owd.config.ts`):
    ```typescript
    // owd.config.ts
    export const owdConfig = {
        theme: 'github:owdproject/owd-theme-gnome',
    
        apps: [
            'owd-app-debug'
        ]
    }
    ```

## Compatibility

This application is compatible with Open Web Desktop client version `v2.0.0-beta.5`.

## License

This project is released under the [MIT License](LICENSE).