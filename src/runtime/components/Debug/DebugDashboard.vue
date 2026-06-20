<script setup lang="ts">
import { computed, ref, type Component } from 'vue'
import DebugBlockWindow from './blocks/desktop/DebugBlockWindow.vue'
import DebugBlockApps from './blocks/desktop/DebugBlockApps.vue'
import DebugBlockWorkspaces from './blocks/desktop/DebugBlockWorkspaces.vue'
import DebugBlockDesktopConfig from './blocks/desktop/DebugBlockDesktopConfig.vue'
import DebugBlockAppConfig from './blocks/desktop/DebugBlockAppConfig.vue'
import DebugBlockStores from './blocks/desktop/DebugBlockStores.vue'
import DebugBlockTerminal from './blocks/desktop/DebugBlockTerminal.vue'
import DebugPvButton from './blocks/primevue/DebugPvButton.vue'
import DebugPvForm from './blocks/primevue/DebugPvForm.vue'
import DebugPvData from './blocks/primevue/DebugPvData.vue'
import DebugPvOverlay from './blocks/primevue/DebugPvOverlay.vue'
import DebugPvMenu from './blocks/primevue/DebugPvMenu.vue'
import DebugPvMessages from './blocks/primevue/DebugPvMessages.vue'
import DebugPvMisc from './blocks/primevue/DebugPvMisc.vue'

const props = defineProps<{
  window: IWindowController
}>()

type DebugSection = {
  id: string
  label: string
  icon: string
  group: 'owd' | 'primevue'
  component: Component
  needsWindow?: boolean
}

const sections: DebugSection[] = [
  { id: 'window', label: 'Window', icon: 'mdi:application-outline', group: 'owd', component: DebugBlockWindow, needsWindow: true },
  { id: 'apps', label: 'Apps', icon: 'mdi:apps', group: 'owd', component: DebugBlockApps },
  { id: 'workspaces', label: 'Workspaces', icon: 'mdi:view-grid', group: 'owd', component: DebugBlockWorkspaces },
  { id: 'desktop-config', label: 'desktop.config', icon: 'mdi:tune-variant', group: 'owd', component: DebugBlockDesktopConfig },
  { id: 'app-config', label: 'app.config.ts', icon: 'mdi:file-code-outline', group: 'owd', component: DebugBlockAppConfig, needsWindow: true },
  { id: 'stores', label: 'Stores', icon: 'mdi:database-outline', group: 'owd', component: DebugBlockStores, needsWindow: true },
  { id: 'terminal', label: 'Terminal', icon: 'mdi:console', group: 'owd', component: DebugBlockTerminal },
  { id: 'pv-button', label: 'Button', icon: 'mdi:gesture-tap-button', group: 'primevue', component: DebugPvButton },
  { id: 'pv-form', label: 'Form', icon: 'mdi:form-textbox', group: 'primevue', component: DebugPvForm },
  { id: 'pv-data', label: 'Data', icon: 'mdi:table', group: 'primevue', component: DebugPvData },
  { id: 'pv-overlay', label: 'Overlay', icon: 'mdi:layers-outline', group: 'primevue', component: DebugPvOverlay },
  { id: 'pv-menu', label: 'Menu', icon: 'mdi:menu', group: 'primevue', component: DebugPvMenu },
  { id: 'pv-messages', label: 'Messages', icon: 'mdi:message-outline', group: 'primevue', component: DebugPvMessages },
  { id: 'pv-misc', label: 'Misc', icon: 'mdi:shape-outline', group: 'primevue', component: DebugPvMisc },
]

const activeId = ref('window')

const owdSections = computed(() => sections.filter((s) => s.group === 'owd'))
const primevueSections = computed(() => sections.filter((s) => s.group === 'primevue'))

const activeSection = computed(
  () => sections.find((s) => s.id === activeId.value) ?? sections[0],
)

const activeProps = computed(() =>
  activeSection.value.needsWindow ? { window: props.window } : {},
)
</script>

<template>
  <div class="debug-shell">
    <aside class="debug-shell__sidebar" aria-label="Debug sections">
      <div class="debug-shell__group">
        <span class="debug-shell__group-label">Desktop</span>
        <button
          v-for="section in owdSections"
          :key="section.id"
          type="button"
          class="debug-shell__item"
          :class="{ 'debug-shell__item--active': section.id === activeId }"
          @click="activeId = section.id"
        >
          <Icon :name="section.icon" :size="16" class="debug-shell__item-icon" />
          <span class="debug-shell__item-label">{{ section.label }}</span>
        </button>
      </div>

      <div class="debug-shell__group">
        <span class="debug-shell__group-label">PrimeVue</span>
        <button
          v-for="section in primevueSections"
          :key="section.id"
          type="button"
          class="debug-shell__item"
          :class="{ 'debug-shell__item--active': section.id === activeId }"
          @click="activeId = section.id"
        >
          <Icon :name="section.icon" :size="16" class="debug-shell__item-icon" />
          <span class="debug-shell__item-label">{{ section.label }}</span>
        </button>
      </div>
    </aside>

    <main class="debug-shell__main">
      <header class="debug-shell__main-head">
        <h2 class="debug-shell__main-title">{{ activeSection.label }}</h2>
        <Tag
          :value="activeSection.group === 'owd' ? 'OWD' : 'kit-primevue'"
          severity="secondary"
        />
      </header>

      <div class="debug-shell__content">
        <component :is="activeSection.component" v-bind="activeProps" />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.debug-shell {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--owd-surface-900, #0f172a);

  &__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 0;
    overflow-y: auto;
    padding: 0.625rem 0;
    border-right: 1px solid var(--owd-surface-700, #1d293d);
    background: rgba(0, 0, 0, 0.15);
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 0 0.375rem;
  }

  &__group-label {
    padding: 0.375rem 0.625rem 0.25rem;
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(200, 212, 228, 0.38);
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.4375rem 0.625rem;
    border: 0;
    border-left: 2px solid transparent;
    border-radius: 0 4px 4px 0;
    background: transparent;
    color: rgba(200, 212, 228, 0.72);
    font: inherit;
    font-size: 0.8125rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    transition:
      background 0.12s ease,
      color 0.12s ease,
      border-color 0.12s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.04);
      color: var(--owd-color, #e8eef6);
    }

    &--active {
      border-left-color: var(--owd-primary-color, #1a6caf);
      background: rgba(255, 255, 255, 0.06);
      color: var(--owd-color, #e8eef6);
    }
  }

  &__item-icon {
    flex-shrink: 0;
    opacity: 0.75;
  }

  &__item-label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__main {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }

  &__main-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    flex-shrink: 0;
    padding: 0.625rem 1rem;
    border-bottom: 1px solid var(--owd-surface-700, #1d293d);
  }

  &__main-title {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--owd-color, #e8eef6);
  }

  &__content {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0.875rem 1rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
    gap: 0.75rem;
    align-content: start;
  }
}
</style>
