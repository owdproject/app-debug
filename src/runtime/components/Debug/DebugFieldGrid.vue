<script setup lang="ts">
defineProps<{
  fields: Array<{
    label: string
    value?: string | number | boolean | null | undefined
    mono?: boolean
  }>
}>()
</script>

<template>
  <dl class="debug-field-grid">
    <template v-for="field in fields" :key="field.label">
      <dt class="debug-field-grid__label">{{ field.label }}</dt>
      <dd class="debug-field-grid__value" :class="{ 'debug-field-grid__value--mono': field.mono }">
        <template v-if="typeof field.value === 'boolean'">
          <Tag :value="field.value ? 'true' : 'false'" :severity="field.value ? 'success' : 'secondary'" />
        </template>
        <template v-else>
          {{ field.value ?? '—' }}
        </template>
      </dd>
    </template>
  </dl>
</template>

<style scoped lang="scss">
.debug-field-grid {
  display: grid;
  grid-template-columns: minmax(120px, 160px) 1fr;
  gap: 0.5rem 1rem;
  margin: 0;

  &__label {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: rgba(200, 212, 228, 0.55);
  }

  &__value {
    margin: 0;
    font-size: 0.875rem;
    color: var(--owd-color, #e8eef6);
    word-break: break-word;

    &--mono {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.8125rem;
    }
  }
}
</style>
