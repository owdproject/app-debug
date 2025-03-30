<script setup lang="ts">

</script>

<template>
  <ul>
    <li>
      <b>Buttons</b>
    </li>
    <li>
      <Button>Button</Button>
      <div>
        <Textarea model-value='<Button>Button</Button>'/>
      </div>
    </li>
    <li>
      <Button rounded>Rounded</Button>
      <div>
        <Textarea model-value='<Button rounded>Button</Button>'/>
      </div>
    </li>
    <li>
      <Button label="primary">Primary</Button>
      <div>
        <Textarea model-value='<Button label="primary">Primary</Button>'/>
      </div>
    </li>
    <li>
      <Button disabled>Disabled</Button>
      <div>
        <Textarea model-value='<Button disabled>Disabled</Button>'/>
      </div>
    </li>
    <li>
      <Button>
        <Icon name="mdi:hexagon-multiple-outline" :size="16"/>
      </Button>
      <div>
        <Textarea model-value='<Button size="small"><Icon name="mdi:home"/></Button></textarea>'/>
      </div>
    </li>
    <li>
      <Button size="large">Size large</Button>
      <div>
        <Textarea model-value='<Button size="large">Size large</Button>' />
      </div>
    </li>
    <li>
      <Button size="large" rounded>Size large + rounded</Button>
      <div>
        <Textarea model-value='<Button size="large" rounded>Size large</Button>' />
      </div>
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
  <p class="m-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
  </p>
</template>

<style scoped lang="scss">

</style>