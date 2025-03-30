<script setup lang="ts">
defineProps<{
  window: WindowController
}>()
</script>

<template>
  <Window v-bind="$props" :content="{padded: true}">

    <Tabs value="0">
      <TabList>
        <Tab value="0">State</Tab>
        <Tab value="1">Buttons</Tab>
        <Tab value="2">Cards</Tab>
      </TabList>
      <TabPanels>

        <TabPanel value="0">
          <WindowDebugState :window="window" />
        </TabPanel>

        <TabPanel value="1">
          <WindowDebugComponentsButton />
        </TabPanel>

        <TabPanel value="2">
          <WindowDebugComponentsCard />
        </TabPanel>

      </TabPanels>
    </Tabs>
  </Window>
</template>

<style scoped lang="scss">
.p-tabs {
  :deep(.p-tabpanel) {
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