<script setup lang="ts">
import { ref } from 'vue'
import { useConfirm } from 'primevue/useconfirm'

const desktopWorkspaceStore = useDesktopWorkspaceStore()
const { removeWorkspace } = useWorkspaceManager()
const confirm = useConfirm()

const selectedWorkspace = ref(desktopWorkspaceStore.active)

function switchWorkspace(id: string) {
  desktopWorkspaceStore.setWorkspace(id)
  selectedWorkspace.value = id
}

function addWorkspace() {
  desktopWorkspaceStore.createWorkspace()
}

function toggleOverview() {
  desktopWorkspaceStore.setOverview(!desktopWorkspaceStore.overview)
}

function confirmRemove(id: string) {
  confirm.require({
    message: `Remove workspace ${id}? Windows will migrate to another desktop.`,
    header: 'Remove workspace',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: { label: 'Cancel', severity: 'secondary', variant: 'text' },
    acceptProps: { label: 'Remove', severity: 'danger' },
    accept: () => {
      removeWorkspace(id)
    },
  })
}
</script>

<template>
  <DebugBlock
    id="workspaces"
    title="Workspaces"
    subtitle="Virtual desktops state"
    category="OWD"
    full
  >
    <DebugFieldGrid
      :fields="[
        { label: 'Active', value: desktopWorkspaceStore.active, mono: true },
        { label: 'Overview', value: desktopWorkspaceStore.overview },
        { label: 'Count', value: desktopWorkspaceStore.list.length },
        { label: 'Active index', value: desktopWorkspaceStore.workspaceActiveIndex },
      ]"
    />

    <div class="debug-workspaces__actions">
      <Button label="New workspace" size="small" @click="addWorkspace" />
      <Button
        :label="desktopWorkspaceStore.overview ? 'Exit overview' : 'Enter overview'"
        size="small"
        severity="secondary"
        variant="outlined"
        @click="toggleOverview"
      />
    </div>

    <DataTable :value="desktopWorkspaceStore.list.map((id) => ({ id, active: id === desktopWorkspaceStore.active }))" size="small">
      <Column field="id" header="ID" />
      <Column field="active" header="Active">
        <template #body="{ data }">
          <Tag :value="data.active ? 'active' : '—'" :severity="data.active ? 'success' : 'secondary'" />
        </template>
      </Column>
      <Column header="Actions">
        <template #body="{ data }">
          <div class="debug-workspaces__row-actions">
            <Button label="Switch" size="small" variant="text" @click="switchWorkspace(data.id)" />
            <Button
              label="Remove"
              size="small"
              severity="danger"
              variant="text"
              :disabled="desktopWorkspaceStore.list.length <= 2"
              @click="confirmRemove(data.id)"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-workspaces {
  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__row-actions {
    display: flex;
    gap: 0.25rem;
  }
}
</style>
