export default {
  id: 'org.owdproject.debug',
  title: 'Debug',
  category: 'system-tools',
  singleton: true,
  icon: 'mdi:bug',
  windows: {
    main: {
      component: () => import('./components/Window/WindowDebug.vue'),
      resizable: true,
      maximizable: true,
      size: {
        width: 960,
        height: 720,
        minWidth: 720,
        minHeight: 480,
      },
    },
  },
  entries: {
    debug: {
      command: 'debug',
    },
  },
  terminal: {
    debug: {
      description: 'Open the Debug app',
    },
  },
  commands: {
    debug: (app: IApplicationController) => {
      const existing = app.getFirstWindowByModel('main')
      if (existing) {
        existing.actions.setActive(true)
        existing.actions.bringToFront()
        return existing
      }

      return app.openWindow('main')
    },
  },
}
