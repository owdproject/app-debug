<script setup lang="ts">
defineProps<{
  window: IWindowController
}>()
</script>

<template>
  <DesktopWindow v-bind="$props" :content="{ padded: false }">
    <DebugDashboard :window="window" />
  </DesktopWindow>
</template>
