<script setup lang="ts">
import { ref } from 'vue'

const tabValue = ref('0')
const accordionValue = ref(['0'])

const meters = ref([
  { label: 'CPU', value: 65, color: '#34d399' },
  { label: 'Memory', value: 40, color: '#60a5fa' },
  { label: 'Disk', value: 85, color: '#fbbf24' },
])
</script>

<template>
  <DebugBlock id="pv-badge" title="Badge" category="Misc">
    <DebugPvVariantRow label="Default">
      <Badge value="2" />
      <Badge value="8" severity="success" />
      <Badge value="!" severity="warn" />
      <Badge value="×" severity="danger" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-chip" title="Chip" category="Misc">
    <DebugPvVariantRow label="Default">
      <Chip label="Default" />
      <Chip label="Removable" removable />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-tag" title="Tag" category="Misc" footer="Used in: Debug dashboard">
    <DebugPvVariantRow label="Severity">
      <Tag value="Primary" />
      <Tag value="Success" severity="success" />
      <Tag value="Warn" severity="warn" />
      <Tag value="Danger" severity="danger" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-avatar" title="Avatar" category="Misc">
    <DebugPvVariantRow label="Default">
      <Avatar label="OW" shape="circle" />
      <Avatar icon="pi pi-user" shape="circle" />
      <Avatar label="SQ" shape="square" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-progressbar" title="ProgressBar" category="Misc">
    <ProgressBar :value="65" />
    <ProgressBar :value="40" :show-value="false" />
  </DebugBlock>

  <DebugBlock id="pv-progressspinner" title="ProgressSpinner" category="Misc">
    <ProgressSpinner style="width: 2rem; height: 2rem" />
  </DebugBlock>

  <DebugBlock id="pv-skeleton" title="Skeleton" category="Misc">
    <Skeleton width="100%" height="1rem" class="mb-2" />
    <Skeleton width="75%" height="1rem" class="mb-2" />
    <Skeleton width="50%" height="1rem" />
  </DebugBlock>

  <DebugBlock id="pv-divider" title="Divider" category="Misc">
    <Divider />
    <Divider align="center">Center</Divider>
    <Divider layout="vertical" />
  </DebugBlock>

  <DebugBlock id="pv-panel" title="Panel" category="Misc" footer="Used in: Debug blocks">
    <Panel header="Sample panel" toggleable>
      Panel body content for theme check.
    </Panel>
  </DebugBlock>

  <DebugBlock id="pv-fieldset" title="Fieldset" category="Misc">
    <Fieldset legend="Legend" toggleable>
      Fieldset content.
    </Fieldset>
  </DebugBlock>

  <DebugBlock id="pv-accordion" title="Accordion" category="Misc">
    <Accordion v-model:value="accordionValue" multiple>
      <AccordionPanel value="0">
        <AccordionHeader>Section 1</AccordionHeader>
        <AccordionContent>Content one</AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Section 2</AccordionHeader>
        <AccordionContent>Content two</AccordionContent>
      </AccordionPanel>
    </Accordion>
  </DebugBlock>

  <DebugBlock id="pv-tabs" title="Tabs" category="Misc" footer="Used in: Debug (legacy), Settings">
    <Tabs v-model:value="tabValue" class="debug-pv-tabs">
      <TabList>
        <Tab value="0">Tab 1</Tab>
        <Tab value="1">Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">Panel one</TabPanel>
        <TabPanel value="1">Panel two</TabPanel>
      </TabPanels>
    </Tabs>
  </DebugBlock>

  <DebugBlock id="pv-card" title="Card" category="Misc">
    <Card>
      <template #title>Card title</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        Card body for surface and border QA.
      </template>
      <template #footer>
        <Button label="Action" size="small" />
      </template>
    </Card>
  </DebugBlock>

  <DebugBlock id="pv-metergroup" title="MeterGroup" category="Misc">
    <MeterGroup :value="meters" />
  </DebugBlock>
</template>

<style scoped lang="scss">
.mb-2 {
  margin-bottom: 0.5rem;
}

.debug-pv-tabs {
  :deep(.p-tablist),
  :deep(.p-tabpanels),
  :deep(.p-tabpanel) {
    background: transparent;
  }

  :deep(.p-tabpanels) {
    padding-top: 0.75rem;
  }

  :deep(.p-tabpanel) {
    color: var(--owd-color, #e8eef6);
  }
}
</style>
