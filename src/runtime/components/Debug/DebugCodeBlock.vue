<script setup lang="ts">
import { computed, ref } from 'vue'
import { serializeForDebug } from './utils/utilSerialize'

const props = defineProps<{
  value: unknown
  note?: string
}>()

const copied = ref(false)

const text = computed(() => {
  if (typeof props.value === 'string') {
    return props.value
  }
  return serializeForDebug(props.value)
})

async function copy() {
  try {
    await navigator.clipboard.writeText(text.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch {
    // clipboard unavailable
  }
}
</script>

<template>
  <div class="debug-code-block">
    <div class="debug-code-block__toolbar">
      <span v-if="note" class="debug-code-block__note">{{ note }}</span>
      <Button
        type="button"
        size="small"
        severity="secondary"
        variant="text"
        :label="copied ? 'Copied' : 'Copy'"
        @click="copy"
      />
    </div>
    <pre class="debug-code-block__pre">{{ text }}</pre>
  </div>
</template>

<style scoped lang="scss">
.debug-code-block {
  &__toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  &__note {
    font-size: 0.75rem;
    color: rgba(200, 212, 228, 0.55);
  }

  &__pre {
    margin: 0;
    padding: 0.75rem;
    max-height: 320px;
    overflow: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.75rem;
    line-height: 1.45;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid var(--owd-surface-700, #1d293d);
    border-radius: 6px;
    color: var(--owd-color, #e8eef6);
    white-space: pre-wrap;
    word-break: break-word;
  }
}
</style>
