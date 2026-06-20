<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="debug-pv-row">
    <span class="debug-pv-row__label">{{ label }}</span>
    <div class="debug-pv-row__items">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.debug-pv-row {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  &__label {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(200, 212, 228, 0.45);
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
