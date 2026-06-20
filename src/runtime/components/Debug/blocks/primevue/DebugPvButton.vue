<script setup lang="ts">
const severities = ['primary', 'secondary', 'success', 'info', 'warn', 'danger', 'contrast'] as const

const splitItems = [
  { label: 'Update', icon: 'pi pi-refresh', command: () => {} },
  { label: 'Delete', icon: 'pi pi-trash', command: () => {} },
]

const speedDialItems = [
  { label: 'Add', icon: 'pi pi-plus', command: () => {} },
  { label: 'Edit', icon: 'pi pi-pencil', command: () => {} },
  { label: 'Delete', icon: 'pi pi-trash', command: () => {} },
]
</script>

<template>
  <DebugBlock id="pv-button" title="Button" category="Button" footer="Used in: Explorer, Settings, Todo">
    <DebugPvVariantRow label="Severity">
      <Button v-for="s in severities" :key="s" :label="s" :severity="s" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Outlined">
      <Button v-for="s in severities.slice(0, 4)" :key="`o-${s}`" :label="s" :severity="s" variant="outlined" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Text">
      <Button label="Text" variant="text" />
      <Button label="Text danger" variant="text" severity="danger" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Sizes">
      <Button label="Small" size="small" />
      <Button label="Normal" />
      <Button label="Large" size="large" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="States">
      <Button label="Disabled" disabled />
      <Button label="Loading" loading />
      <Button icon="pi pi-check" rounded aria-label="Icon only" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-splitbutton" title="SplitButton" category="Button">
    <DebugPvVariantRow label="Default">
      <SplitButton label="Save" :model="splitItems" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Outlined">
      <SplitButton label="Save" :model="splitItems" variant="outlined" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-speeddial" title="SpeedDial" category="Button">
    <DebugPvVariantRow label="Default">
      <SpeedDial :model="speedDialItems" direction="up" />
    </DebugPvVariantRow>
  </DebugBlock>
</template>

<style scoped lang="scss">
:deep(.p-speeddial) {
  position: relative;
  height: 4rem;
}
</style>
