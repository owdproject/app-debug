<script setup lang="ts">

</script>

<template>
  <ul>
    <li>
      <b>Cards</b>
    </li>
    <li>
      <Card class="p-card--border px-2 py-6">
        <template #content>
          Card
        </template>
      </Card>
      <div>
        <Textarea model-value='<Card class="p-card--border"><template #content>Card</template></Button>' />
      </div>
    </li>
    <li>
      <Card class="p-card--inset p-1">
        <template #content>
          Card inset
        </template>
      </Card>
      <div>
        <Textarea model-value='<Card class="inset p-1"><template #content>Card inset</template></Button>' />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">

</style>