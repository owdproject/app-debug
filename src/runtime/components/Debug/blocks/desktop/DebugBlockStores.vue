<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  window: IWindowController
}>()

const desktopStore = useDesktopStore()
const desktopWorkspaceStore = useDesktopWorkspaceStore()
const desktopWindowStore = useDesktopWindowStore()
const appWindowsStore = useApplicationWindowsStore(props.window.application.id)
const accordionValue = ref(['0'])

const storePanels = computed(() => [
  {
    label: 'desktop',
    value: desktopStore.state,
  },
  {
    label: 'desktop/workspace',
    value: {
      active: desktopWorkspaceStore.active,
      overview: desktopWorkspaceStore.overview,
      list: desktopWorkspaceStore.list,
    },
  },
  {
    label: 'desktop/window',
    value: {
      positionZ: desktopWindowStore.positionZ,
      workArea: desktopWindowStore.workArea,
    },
  },
  {
    label: `application/${props.window.application.id}/windows`,
    value: appWindowsStore.$state,
  },
])
</script>

<template>
  <DebugBlock
    id="stores"
    title="Pinia stores"
    subtitle="Read-only store snapshots"
    category="OWD"
    full
  >
    <Accordion v-model:value="accordionValue" multiple>
      <AccordionPanel v-for="(panel, index) in storePanels" :key="panel.label" :value="String(index)">
        <AccordionHeader>{{ panel.label }}</AccordionHeader>
        <AccordionContent>
          <DebugCodeBlock :value="panel.value" />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </DebugBlock>
</template>
