<script setup lang="ts">
import { computed, ref } from 'vue'
import { serializeForDebug } from '../../utils/utilSerialize'

const applicationManager = useApplicationManager()

type AppRow = {
  id: string
  title: string
  category: string
  running: boolean
  singleton: boolean
  windowCount: number
  entries: string[]
}

const selectedRow = ref<AppRow | null>(null)
const selectedEntry = ref<string | null>(null)
const commandInput = ref('')

const appsList = computed(() =>
  Array.from(applicationManager.apps.values()).map((app) => ({
    id: app.id,
    title: app.config.title,
    category: app.config.category ?? '—',
    running: app.isRunning,
    singleton: app.config.singleton ?? false,
    windowCount: app.windows.size,
    entries: Object.keys(app.config.entries ?? {}),
  })),
)

const selectedApp = computed(() =>
  selectedRow.value
    ? applicationManager.apps.get(selectedRow.value.id)
    : undefined,
)

const entryOptions = computed(() =>
  (selectedApp.value?.config.entries
    ? Object.entries(selectedApp.value.config.entries).map(([key, entry]) => ({
        label: entry.title ?? key,
        value: key,
      }))
    : []),
)

async function launchSelected() {
  if (!selectedRow.value || !selectedEntry.value) return
  await applicationManager.launchAppEntry(selectedRow.value.id, selectedEntry.value)
}

function closeSelected() {
  if (!selectedRow.value) return
  applicationManager.closeApp(selectedRow.value.id)
}

async function execCommand() {
  if (!selectedRow.value || !commandInput.value.trim()) return
  await applicationManager.execAppCommand(
    selectedRow.value.id,
    commandInput.value.trim(),
  )
}
</script>

<template>
  <DebugBlock
    id="apps"
    title="Applications"
    subtitle="Registered apps and launch controls"
    category="OWD"
    full
  >
    <DataTable
      v-model:selection="selectedRow"
      :value="appsList"
      selection-mode="single"
      data-key="id"
      size="small"
      striped-rows
      @row-select="selectedEntry = null"
    >
      <Column selection-mode="single" header-style="width: 3rem" />
      <Column field="id" header="ID" />
      <Column field="title" header="Title" />
      <Column field="category" header="Category" />
      <Column field="running" header="Running">
        <template #body="{ data }">
          <Tag :value="data.running ? 'yes' : 'no'" :severity="data.running ? 'success' : 'secondary'" />
        </template>
      </Column>
      <Column field="windowCount" header="Windows" />
    </DataTable>

    <div v-if="selectedApp" class="debug-apps__actions">
      <Select
        v-model="selectedEntry"
        :options="entryOptions"
        option-label="label"
        option-value="value"
        placeholder="Select entry"
        class="debug-apps__select"
      />
      <Button label="Launch entry" size="small" :disabled="!selectedEntry" @click="launchSelected" />
      <Button label="Close app" size="small" severity="danger" variant="outlined" @click="closeSelected" />
      <InputText v-model="commandInput" placeholder="Raw command…" class="debug-apps__command" />
      <Button label="Exec" size="small" severity="secondary" :disabled="!commandInput.trim()" @click="execCommand" />
    </div>

    <DebugCodeBlock
      v-if="selectedApp"
      :value="selectedApp.config"
      note="application.config — component imports omitted"
    />
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-apps {
  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
  }

  &__select {
    min-width: 180px;
  }

  &__command {
    flex: 1;
    min-width: 160px;
  }
}
</style>
