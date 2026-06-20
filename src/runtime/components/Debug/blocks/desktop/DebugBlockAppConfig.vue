<script setup lang="ts">
const props = defineProps<{
  window: IWindowController
}>()
</script>

<template>
  <DebugBlock
    id="app-config"
    title="app.config.ts"
    subtitle="Window model and application definition"
    category="OWD"
    full
  >
    <div class="debug-app-config__section">
      <span class="debug-app-config__label">Window model: {{ window.model }}</span>
      <DebugCodeBlock
        :value="props.window.config"
        note="window.config — component imports omitted"
      />
    </div>

    <Divider />

    <div class="debug-app-config__section">
      <span class="debug-app-config__label">Application: {{ window.application.id }}</span>
      <DebugCodeBlock
        :value="props.window.application.config"
        note="application.config — component imports omitted"
      />
    </div>
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-app-config {
  &__section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__label {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--owd-color, #e8eef6);
  }
}
</style>
