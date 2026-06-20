<script setup lang="ts">
import { computed, ref } from 'vue'

const tableData = [
  { code: 'A001', name: 'Alpha', qty: 12 },
  { code: 'B002', name: 'Beta', qty: 8 },
  { code: 'C003', name: 'Gamma', qty: 24 },
]

const treeNodes = ref([
  {
    key: '0',
    label: 'Documents',
    children: [
      { key: '0-0', label: 'Work' },
      { key: '0-1', label: 'Home' },
    ],
  },
  {
    key: '1',
    label: 'Pictures',
    children: [{ key: '1-0', label: 'Vacation' }],
  },
])

const picklist = ref([
  [
    { name: 'Item 1', code: '1' },
    { name: 'Item 2', code: '2' },
  ],
  [{ name: 'Item 3', code: '3' }],
])
const orderList = ref([
  { name: 'First', code: '1' },
  { name: 'Second', code: '2' },
  { name: 'Third', code: '3' },
])
</script>

<template>
  <DebugBlock id="pv-datatable" title="DataTable" category="Data" footer="Used in: Debug dashboard">
    <DataTable :value="tableData" size="small" striped-rows paginator :rows="2">
      <Column field="code" header="Code" sortable />
      <Column field="name" header="Name" sortable />
      <Column field="qty" header="Qty" />
    </DataTable>
  </DebugBlock>

  <DebugBlock id="pv-tree" title="Tree" category="Data">
    <Tree :value="treeNodes" />
  </DebugBlock>

  <DebugBlock id="pv-treetable" title="TreeTable" category="Data">
    <TreeTable :value="treeNodes" table-style="min-width: 20rem">
      <Column field="label" header="Name" expander />
    </TreeTable>
  </DebugBlock>

  <DebugBlock id="pv-paginator" title="Paginator" category="Data">
    <Paginator :rows="10" :total-records="120" />
  </DebugBlock>

  <DebugBlock id="pv-orderlist" title="OrderList" category="Data">
    <OrderList v-model="orderList" data-key="code">
      <template #option="{ option }">
        {{ option.name }}
      </template>
    </OrderList>
  </DebugBlock>

  <DebugBlock id="pv-picklist" title="PickList" category="Data">
    <PickList v-model="picklist" data-key="code">
      <template #option="{ option }">
        {{ option.name }}
      </template>
    </PickList>
  </DebugBlock>
</template>
