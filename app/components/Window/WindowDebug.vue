<script setup lang="ts">
import {UseTimeAgo} from "@vueuse/components";

defineProps<{
  window: WindowController
}>()
</script>

<template>
  <Window v-bind="$props">
    <div class="container">
      <ul>
        <li>
          <b>ID</b><br/>
          {{ window.state.id }}
        </li>
        <li>
          <b>Title</b><br/>
          <input type="text" v-model="window.state.title"/>
        </li>
        <li>
          <b>Created at</b><br/>
          <UseTimeAgo  v-slot="{ timeAgo }" :time="window.state.createdAt">
            <input type="text" :value="timeAgo.toString()" />
          </UseTimeAgo>
        </li>
        <li>
          <b>Position</b><br/>
          {{ window.state.position }}
        </li>
        <li>
          <b>Size</b><br/>
          {{ window.state.size }}
        </li>
        <li>

          <label><input type="checkbox" v-model="window.state.resizable"/> Resizable</label>
        </li>
        <li>
          <label><input type="checkbox" v-model="window.state.draggable"/> Draggable</label>
        </li>
        <li>
          <label><input type="checkbox" v-model="window.state.destroyable"/> Destroyable</label>
        </li>
        <li>
          <label><input type="checkbox" v-model="window.state.active" readonly/> Active</label>
        </li>
        <li>
          <label><input type="checkbox" v-model="window.state.focused" readonly/>Focused</label>
        </li>
        <li>
          <label><input type="checkbox" v-model="window.state.overflow"/>Overflow</label>
        </li>
      </ul>
    </div>

  </Window>
</template>

<style scoped lang="scss">
.container {
  padding: 8px;
  max-height: 100%;
  overflow-y: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    line-height: 20px;
    margin-bottom: 16px;
  }
}

input[type="checkbox"] {
  margin-right: 12px;
}
</style>