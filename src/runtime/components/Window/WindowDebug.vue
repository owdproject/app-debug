<script setup lang="ts">
import WindowDebugState from './WindowDebugState.vue'
import WindowDebugConfig from './WindowDebugConfig.vue'

defineProps<{
  window: WindowController
}>()
</script>

<template>
  <DesktopWindow v-bind="$props" :content="{ padded: true }">
    <Tabs value="0">
      <TabList>
        <Tab value="0">State</Tab>
        <Tab value="1">Config</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <WindowDebugState :window="window" />
        </TabPanel>

        <TabPanel value="1">
          <WindowDebugConfig :window="window" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </DesktopWindow>
</template>

<style scoped lang="scss">
.p-tabs {
  :deep(.p-tablist) {
    background: transparent !important;
    margin: calc(var(--owd-card-body-padding) * -1 + 1px)
      calc(var(--owd-card-body-padding) * -1)
      0
      calc(var(--owd-card-body-padding) * -1);
    padding: 0;
    border: 0;
  }

  :deep(.p-tablist-content) {
    background: transparent;
    border-bottom: 1px solid var(--owd-surface-700, #1d293d);
  }

  :deep(.p-tablist-tab-list) {
    border: 0;
  }

  :deep(.p-tab) {
    background: transparent !important;
    border: 0 !important;
    border-radius: 0;
    margin: 0;
    padding: 0.5rem 1.25rem;
    font-weight: 600;
    color: rgba(200, 212, 228, 0.55);
    box-shadow: none !important;

    &:hover {
      background: transparent !important;
      color: rgba(232, 238, 246, 0.9);
    }

    &.p-tab-active,
    &[data-p-active='true'] {
      background: transparent !important;
      color: var(--owd-color, #e8eef6);
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 -2px 0 var(--owd-primary-color, #1a6caf);
    }
  }

  :deep(.p-tablist-active-bar) {
    height: 2px;
    bottom: 0;
    background: var(--owd-primary-color, #1a6caf);
  }

  :deep(.p-tabpanels),
  :deep(.p-tabpanel) {
    background: transparent;
  }

  :deep(.p-tabpanels) {
    padding: var(--owd-tabs-tabpanel-padding, 1.25rem 0 0 0);
  }

  :deep(.p-tabpanel) {
    padding: 0;

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        line-height: 20px;
        margin-bottom: 16px;
      }
    }

    textarea {
      margin-top: 12px;
      width: 100%;
    }
  }
}
</style>
