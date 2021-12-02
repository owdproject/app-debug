# Debug module for OWD Client
> Debug app for your Open Web Desktop client

<p>
    <img src="media/demo.png" alt="OWD Debug module demo" />
</p>

<p>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/badge/owd-client-blue" /></a>
    <a href="https://github.com/topics/owd-modules"><img src="https://img.shields.io/badge/owd-modules-777" /></a>
    <a href="https://discord.com/invite/3KFVP8b"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord" /></a>
    <a href="https://patreon.com/hacklover"><img src="https://img.shields.io/badge/become-a%20patron-222" alt="Become a Patron" /></a>
</p>

## Overview
A module to test out OWD and see how windows work

## Quick install
- Move to your client folder, then
  ```
  # Install this module with Npm
  npm install https://github.com/owdproject/owd-app-debug
  
  # Or using Yarn
  yarn add https://github.com/owdproject/owd-app-debug
  ```
- Define this module in `owd-client/client.extensions.ts`
  ```js
  import DebugModule from "owd-app-debug";

  export default {
    modules: {
      app: [
        DebugModule,
      ]
    },
    ...
  ```

## Compatibility
- Open Web Desktop client v2.0.0-beta.4

## License
This project is released under the [MIT License](LICENSE)