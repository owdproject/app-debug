<script setup lang="ts">
defineProps<{
  id: string
  title: string
  subtitle?: string
  category?: string
  full?: boolean
  footer?: string
}>()
</script>

<template>
  <section
    :id="id"
    class="debug-block"
    :class="{ 'debug-block--full': full }"
  >
    <header class="debug-block__header">
      <div class="debug-block__titles">
        <h3 class="debug-block__title">{{ title }}</h3>
        <p v-if="subtitle" class="debug-block__subtitle">{{ subtitle }}</p>
      </div>
      <Tag v-if="category" :value="category" severity="secondary" class="debug-block__badge" />
    </header>

    <div class="debug-block__body">
      <slot />
    </div>

    <p v-if="footer" class="debug-block__footer">{{ footer }}</p>
  </section>
</template>

<style scoped lang="scss">
.debug-block {
  height: fit-content;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid var(--owd-surface-700, #1d293d);
  border-radius: 8px;

  &--full {
    grid-column: 1 / -1;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.875rem;
    padding-bottom: 0.625rem;
    border-bottom: 1px solid var(--owd-surface-700, #1d293d);
  }

  &__titles {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    min-width: 0;
  }

  &__title {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--owd-color, #e8eef6);
  }

  &__subtitle {
    margin: 0;
    font-size: 0.75rem;
    color: rgba(200, 212, 228, 0.55);
  }

  &__badge {
    flex-shrink: 0;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__footer {
    margin: 0.75rem 0 0;
    font-size: 0.75rem;
    color: rgba(200, 212, 228, 0.45);
    font-style: italic;
  }
}
</style>
