<script setup lang="ts">
defineProps<{
  window: WindowController
}>()
</script>

<template>
  <Window v-bind="$props">

    <Tabs value="0">
      <TabList>
        <Tab value="0">Components</Tab>
        <Tab value="1">State</Tab>
      </TabList>
      <TabPanels>

        <TabPanel value="0">
          <WindowDebugComponentsButton />
        </TabPanel>

        <TabPanel value="1">
          <WindowDebugState :window="window" />
        </TabPanel>

      </TabPanels>
    </Tabs>
  </Window>
</template>

<style scoped lang="scss">
.p-tabs {
  max-height: 100%;
  overflow-y: auto;
  padding: 12px;

  :deep(.p-tabpanel) {
    padding: 8px;
    overflow-y: auto;

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