<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  window: IWindowController
}>()

const applicationManager = useApplicationManager()
const desktopWindowStore = useDesktopWindowStore()

const titleOverride = ref(props.window.title)
const posX = ref(props.window.state.position?.x ?? 0)
const posY = ref(props.window.state.position?.y ?? 0)
const sizeW = ref(props.window.state.size?.width ?? props.window.size.width)
const sizeH = ref(props.window.state.size?.height ?? props.window.size.height)

const windowsList = computed(() =>
  Array.from(applicationManager.windowsOpened.value.values()).map((win) => ({
    id: win.state.id,
    app: win.application.id,
    model: win.model,
    title: win.title,
    workspace: win.state.workspace,
    focused: win.state.focused,
    active: win.state.active,
  })),
)

const inspectorFields = computed(() => {
  const w = props.window
  const state = w.state
  return [
    { label: 'ID', value: state.id, mono: true },
    { label: 'Model', value: w.model },
    { label: 'Application', value: w.application.id, mono: true },
    { label: 'Workspace', value: state.workspace, mono: true },
    { label: 'Layout', value: state.layout ?? 'normal' },
    {
      label: 'Created',
      value: new Date(state.createdAt).toLocaleString(),
    },
    {
      label: 'Position',
      value: state.position
        ? `x: ${state.position.x}, y: ${state.position.y}, z: ${state.position.z ?? '—'}`
        : '—',
      mono: true,
    },
    {
      label: 'Size',
      value: state.size
        ? `${state.size.width}×${state.size.height}`
        : `${w.size.width}×${w.size.height}`,
      mono: true,
    },
    { label: 'Resizable', value: w.isResizable },
    { label: 'Draggable', value: w.isDraggable },
    { label: 'Destroyable', value: w.isDestroyable },
    { label: 'Minimizable', value: w.isMinimizable },
    { label: 'Maximizable', value: w.isMaximizable },
    { label: 'Maximized', value: w.isMaximized },
    { label: 'Active', value: state.active ?? false },
    { label: 'Focused', value: state.focused },
    { label: 'Work area', value: `${desktopWindowStore.workArea.width}×${desktopWindowStore.workArea.height}`, mono: true },
  ]
})

const layoutOptions: WindowLayout[] = [
  'left-half',
  'right-half',
  'bottom-half',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

function applyTitle() {
  props.window.actions.setTitleOverride(titleOverride.value || undefined)
}

function resetTitle() {
  titleOverride.value = props.window.application.config.title ?? 'Debug'
  props.window.actions.resetTitleOverride()
}

function applyPosition() {
  props.window.actions.setPosition({ x: posX.value, y: posY.value })
}

function applySize() {
  props.window.actions.setSize({ width: sizeW.value, height: sizeH.value })
}
</script>

<template>
  <DebugBlock
    id="window"
    title="Window"
    subtitle="Live window state and actions"
    category="OWD"
    full
  >
    <DebugFieldGrid :fields="inspectorFields" />

    <Divider />

    <div class="debug-window__controls">
      <div class="debug-window__group">
        <span class="debug-window__group-label">Actions</span>
        <div class="debug-window__buttons">
          <Button label="Bring to front" size="small" @click="window.actions.bringToFront()" />
          <Button label="Minimize" size="small" severity="secondary" @click="window.actions.minimize()" />
          <Button label="Toggle maximize" size="small" severity="secondary" @click="window.actions.toggleMaximize()" />
          <Button label="Clear layout" size="small" severity="secondary" variant="outlined" @click="window.actions.clearLayout()" />
        </div>
      </div>

      <div class="debug-window__group">
        <span class="debug-window__group-label">Snap layout</span>
        <div class="debug-window__buttons">
          <Button
            v-for="layout in layoutOptions"
            :key="layout"
            :label="layout"
            size="small"
            variant="outlined"
            severity="secondary"
            @click="window.actions.setLayout(layout)"
          />
        </div>
      </div>

      <div class="debug-window__group debug-window__group--inline">
        <span class="debug-window__group-label">Title override</span>
        <InputText v-model="titleOverride" class="debug-window__input" />
        <Button label="Apply" size="small" @click="applyTitle" />
        <Button label="Reset" size="small" severity="secondary" variant="text" @click="resetTitle" />
      </div>

      <div class="debug-window__group debug-window__group--inline">
        <span class="debug-window__group-label">Position</span>
        <InputNumber v-model="posX" input-class="debug-window__num" :min="0" />
        <InputNumber v-model="posY" input-class="debug-window__num" :min="0" />
        <Button label="Set" size="small" @click="applyPosition" />
      </div>

      <div class="debug-window__group debug-window__group--inline">
        <span class="debug-window__group-label">Size</span>
        <InputNumber v-model="sizeW" input-class="debug-window__num" :min="200" />
        <InputNumber v-model="sizeH" input-class="debug-window__num" :min="200" />
        <Button label="Set" size="small" @click="applySize" />
      </div>
    </div>

    <Divider />

    <div class="debug-window__table">
      <span class="debug-window__group-label">Open windows ({{ windowsList.length }})</span>
      <DataTable :value="windowsList" size="small" striped-rows>
        <Column field="id" header="ID" />
        <Column field="app" header="App" />
        <Column field="model" header="Model" />
        <Column field="title" header="Title" />
        <Column field="workspace" header="Workspace" />
        <Column field="focused" header="Focused">
          <template #body="{ data }">
            <Tag :value="String(data.focused)" :severity="data.focused ? 'success' : 'secondary'" />
          </template>
        </Column>
      </DataTable>
    </div>

    <DebugCodeBlock :value="window.state" note="window.state snapshot" />
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-window {
  &__controls {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    &--inline {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  &__group-label {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(200, 212, 228, 0.45);
    min-width: 100px;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  &__input {
    flex: 1;
    min-width: 160px;
  }

  &__num {
    width: 5rem;
  }

  &__table {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
