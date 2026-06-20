<script setup lang="ts">
import { ref } from 'vue'

const tieredMenu = ref()
const contextMenu = ref()
const tabMenuActive = ref('0')

const menuItems = [
  {
    label: 'File',
    items: [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-folder-open' },
    ],
  },
  { label: 'Edit', icon: 'pi pi-pencil' },
  { separator: true },
  { label: 'Quit', icon: 'pi pi-power-off' },
]

const tieredItems = [
  {
    label: 'Options',
    items: [
      { label: 'Refresh', icon: 'pi pi-refresh' },
      { label: 'Export', icon: 'pi pi-upload' },
    ],
  },
]

const tabMenuItems = [
  { label: 'Overview', icon: 'pi pi-home' },
  { label: 'Members', icon: 'pi pi-users' },
  { label: 'Settings', icon: 'pi pi-cog' },
]

const breadcrumbItems = [{ label: 'Apps' }, { label: 'Debug' }, { label: 'Menu' }]

const panelMenuItems = [
  {
    label: 'Files',
    icon: 'pi pi-folder',
    items: [{ label: 'Documents', icon: 'pi pi-file' }],
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    items: [{ label: 'Appearance', icon: 'pi pi-palette' }],
  },
]

function toggleTiered(event: Event) {
  tieredMenu.value?.toggle(event)
}

function onContextMenu(event: Event) {
  contextMenu.value?.show(event)
}
</script>

<template>
  <DebugBlock id="pv-menubar" title="Menubar" category="Menu">
    <Menubar :model="menuItems" />
  </DebugBlock>

  <DebugBlock id="pv-tieredmenu" title="TieredMenu" category="Menu" footer="Used in: Explorer overflow">
    <Button label="Toggle menu" size="small" @click="toggleTiered" />
    <TieredMenu ref="tieredMenu" :model="tieredItems" popup />
  </DebugBlock>

  <DebugBlock id="pv-contextmenu" title="ContextMenu" category="Menu">
    <div class="debug-pv-menu__context-target" @contextmenu="onContextMenu">
      Right-click here
    </div>
    <ContextMenu ref="contextMenu" :model="tieredItems" />
  </DebugBlock>

  <DebugBlock id="pv-tabmenu" title="TabMenu" category="Menu">
    <TabMenu v-model:active-index="tabMenuActive" :model="tabMenuItems" />
  </DebugBlock>

  <DebugBlock id="pv-breadcrumb" title="Breadcrumb" category="Menu">
    <Breadcrumb :model="breadcrumbItems" />
  </DebugBlock>

  <DebugBlock id="pv-panelmenu" title="PanelMenu" category="Menu">
    <PanelMenu :model="panelMenuItems" />
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-pv-menu {
  &__context-target {
    padding: 1rem;
    border: 1px dashed var(--owd-surface-700, #1d293d);
    border-radius: 6px;
    font-size: 0.875rem;
    color: rgba(200, 212, 228, 0.65);
    user-select: none;
  }
}
</style>
