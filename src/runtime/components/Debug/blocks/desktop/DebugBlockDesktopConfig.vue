<script setup lang="ts">
const desktopConfig = useDesktopConfig()
</script>

<template>
  <DebugBlock
    id="desktop-config"
    title="desktop.config"
    subtitle="Merged runtime desktop configuration"
    category="OWD"
    full
  >
    <DebugCodeBlock :value="desktopConfig" />
  </DebugBlock>
</template>
