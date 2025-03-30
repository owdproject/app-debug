export default defineDesktopApp({
  id: "org.owdproject.debug",
  name: "Debug",
  icon: "mdi:bug",
  windows: {
    main: {
      component: () => import('./app/components/Window/WindowDebug.vue'),
      name: "WindowDebug",
      category: "system-tools",
      title: "Debug",
      icon: "mdi:bug",
      pinned: true,
      resizable: true,
      overflow: true,
      size: {
        width: 400,
        minHeight: 500
      },
      position: {
        x: 400,
        y: 240,
        z: 0
      },
    }
  },
  commands: {
    debug: (app) => {
      app.openWindow("main")
    }
  },
  onLaunch: (app) => {
    app.openWindow('main')
  }
})