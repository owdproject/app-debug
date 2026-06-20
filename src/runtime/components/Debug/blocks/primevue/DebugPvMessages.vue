<script setup lang="ts">
import { useToast } from 'primevue/usetoast'

const toast = useToast()

function showToast(severity: string) {
  toast.add({
    severity,
    summary: `${severity} toast`,
    detail: 'Theme QA sample message',
    life: 3000,
  })
}
</script>

<template>
  <DebugBlock id="pv-message" title="Message" category="Messages">
    <DebugPvVariantRow label="Severity">
      <Message severity="success">Success message</Message>
      <Message severity="info">Info message</Message>
      <Message severity="warn">Warn message</Message>
      <Message severity="error">Error message</Message>
      <Message severity="secondary">Secondary message</Message>
      <Message severity="contrast">Contrast message</Message>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-inlinemessage" title="InlineMessage" category="Messages">
    <DebugPvVariantRow label="Severity">
      <InlineMessage severity="info">Inline info</InlineMessage>
      <InlineMessage severity="warn">Inline warn</InlineMessage>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-toast" title="Toast" category="Messages">
    <DebugPvVariantRow label="Trigger">
      <Button label="Success" size="small" severity="success" @click="showToast('success')" />
      <Button label="Info" size="small" severity="info" @click="showToast('info')" />
      <Button label="Warn" size="small" severity="warn" @click="showToast('warn')" />
      <Button label="Error" size="small" severity="danger" @click="showToast('error')" />
    </DebugPvVariantRow>
    <Toast />
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-pv-messages :deep(.p-message) {
  width: 100%;
}
</style>
