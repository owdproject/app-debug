<script setup lang="ts">
import { computed, ref } from 'vue'

const terminalManager = useTerminalManager()
const commandInput = ref('')
const lastOutput = ref<{ message: string; isError?: boolean } | null>(null)

const commands = computed(() =>
  terminalManager.getAllCommands().map((cmd) => ({
    name: cmd.name,
    app: cmd.applicationId,
    description: cmd.description ?? '—',
  })),
)

async function runCommand() {
  const input = commandInput.value.trim()
  if (!input) return
  const result = await terminalManager.execCommand(input)
  if (result?.message) {
    lastOutput.value = result
  } else {
    lastOutput.value = { message: '(no output)' }
  }
}
</script>

<template>
  <DebugBlock
    id="terminal"
    title="Terminal"
    subtitle="Registered shell commands"
    category="OWD"
    full
  >
    <DataTable :value="commands" size="small" striped-rows>
      <Column field="name" header="Command" />
      <Column field="app" header="Application" />
      <Column field="description" header="Description" />
    </DataTable>

    <div class="debug-terminal__run">
      <InputText
        v-model="commandInput"
        placeholder="Type a command…"
        class="debug-terminal__input"
        @keyup.enter="runCommand"
      />
      <Button label="Run" size="small" @click="runCommand" />
    </div>

    <DebugCodeBlock
      v-if="lastOutput"
      :value="lastOutput.message"
      :note="lastOutput.isError ? 'Error output' : 'Command output'"
    />
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-terminal {
  &__run {
    display: flex;
    gap: 0.5rem;
  }

  &__input {
    flex: 1;
  }
}
</style>
