<script setup lang="ts">
import { ref } from 'vue'
import { useConfirm } from 'primevue/useconfirm'

const dialogVisible = ref(false)
const drawerVisible = ref(false)
const confirm = useConfirm()

function showConfirm() {
  confirm.require({
    message: 'Sample confirm dialog from Debug.',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: { label: 'Cancel', severity: 'secondary', variant: 'text' },
    acceptProps: { label: 'Accept' },
  })
}
</script>

<template>
  <DebugBlock id="pv-dialog" title="Dialog" category="Overlay">
    <DebugPvVariantRow label="Default">
      <Button label="Open dialog" size="small" @click="dialogVisible = true" />
      <Dialog v-model:visible="dialogVisible" header="Dialog" modal :style="{ width: '24rem' }">
        <p>Dialog content for theme QA.</p>
        <template #footer>
          <Button label="Close" severity="secondary" variant="text" @click="dialogVisible = false" />
        </template>
      </Dialog>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-drawer" title="Drawer" category="Overlay">
    <DebugPvVariantRow label="Default">
      <Button label="Open drawer" size="small" @click="drawerVisible = true" />
      <Drawer v-model:visible="drawerVisible" header="Drawer">
        <p>Drawer panel content.</p>
      </Drawer>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-popover" title="Popover" category="Overlay">
    <DebugPvVariantRow label="Default">
      <Button v-tooltip="'Hover tooltip'" label="Tooltip target" size="small" />
      <Popover>
        <Button label="Popover" size="small" variant="outlined" />
        <template #content>
          <p class="debug-pv-overlay__popover">Popover content</p>
        </template>
      </Popover>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-confirmdialog" title="ConfirmDialog" category="Overlay" footer="Used in: theme-nova global provider">
    <DebugPvVariantRow label="Default">
      <Button label="Show confirm" size="small" severity="warn" @click="showConfirm" />
    </DebugPvVariantRow>
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-pv-overlay {
  &__popover {
    margin: 0;
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
