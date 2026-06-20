<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Sample text')
const textarea = ref('Multi\nline')
const number = ref(42)
const password = ref('')
const checked = ref(true)
const unchecked = ref(false)
const radio = ref('a')
const toggle = ref(true)
const slider = ref(50)
const selectValue = ref<string | null>('b')
const multiValue = ref(['a'])

const selectOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]
</script>

<template>
  <DebugBlock
    id="pv-inputtext"
    title="InputText"
    category="Form"
    footer="Used in: Todo, Debug, Settings search"
  >
    <DebugPvVariantRow label="Default">
      <InputText v-model="text" placeholder="Placeholder" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Filled">
      <InputText v-model="text" variant="filled" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Disabled">
      <InputText model-value="Disabled" disabled />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Invalid">
      <InputText model-value="Invalid" invalid />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Sizes">
      <InputText model-value="Small" size="small" />
      <InputText model-value="Normal" />
      <InputText model-value="Large" size="large" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-textarea" title="Textarea" category="Form">
    <DebugPvVariantRow label="Default">
      <Textarea v-model="textarea" rows="3" auto-resize />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Disabled">
      <Textarea model-value="Disabled" disabled rows="2" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-inputnumber" title="InputNumber" category="Form">
    <DebugPvVariantRow label="Default">
      <InputNumber v-model="number" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Disabled">
      <InputNumber :model-value="10" disabled />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-password" title="Password" category="Form">
    <DebugPvVariantRow label="Default">
      <Password v-model="password" toggle-mask :feedback="false" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="With feedback">
      <Password v-model="password" toggle-mask />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-select" title="Select" category="Form" footer="Used in: Debug Apps launcher">
    <DebugPvVariantRow label="Default">
      <Select v-model="selectValue" :options="selectOptions" option-label="label" option-value="value" placeholder="Choose" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Disabled">
      <Select model-value="a" :options="selectOptions" option-label="label" option-value="value" disabled />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-multiselect" title="MultiSelect" category="Form">
    <DebugPvVariantRow label="Default">
      <MultiSelect v-model="multiValue" :options="selectOptions" option-label="label" option-value="value" placeholder="Choose" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-checkbox" title="Checkbox" category="Form" footer="Used in: Settings, Explorer">
    <DebugPvVariantRow label="Default">
      <Checkbox v-model="checked" binary input-id="cb1" />
      <label for="cb1">Checked</label>
      <Checkbox v-model="unchecked" binary input-id="cb2" />
      <label for="cb2">Unchecked</label>
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Disabled">
      <Checkbox :model-value="true" binary disabled input-id="cb3" />
      <label for="cb3">Disabled</label>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-radiobutton" title="RadioButton" category="Form">
    <DebugPvVariantRow label="Group">
      <div class="debug-pv-form__radio-group">
        <RadioButton v-model="radio" input-id="r1" value="a" />
        <label for="r1">A</label>
        <RadioButton v-model="radio" input-id="r2" value="b" />
        <label for="r2">B</label>
      </div>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-toggleswitch" title="ToggleSwitch" category="Form" footer="Used in: Settings appearance">
    <DebugPvVariantRow label="Default">
      <ToggleSwitch v-model="toggle" />
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Disabled">
      <ToggleSwitch :model-value="true" disabled />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-slider" title="Slider" category="Form" footer="Used in: Settings sound, Quick settings">
    <DebugPvVariantRow label="Default">
      <Slider v-model="slider" class="debug-pv-form__slider" />
      <span class="debug-pv-form__slider-value">{{ slider }}</span>
    </DebugPvVariantRow>
    <DebugPvVariantRow label="Disabled">
      <Slider :model-value="30" disabled class="debug-pv-form__slider" />
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-inputgroup" title="InputGroup" category="Form">
    <DebugPvVariantRow label="Default">
      <InputGroup>
        <InputGroupAddon>
          <span>https://</span>
        </InputGroupAddon>
        <InputText placeholder="domain" />
        <Button label="Go" />
      </InputGroup>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-floatlabel" title="FloatLabel" category="Form">
    <DebugPvVariantRow label="Default">
      <FloatLabel>
        <InputText id="float-email" v-model="text" />
        <label for="float-email">Email</label>
      </FloatLabel>
    </DebugPvVariantRow>
  </DebugBlock>

  <DebugBlock id="pv-iconfield" title="IconField" category="Form">
    <DebugPvVariantRow label="Default">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText placeholder="Search" />
      </IconField>
    </DebugPvVariantRow>
  </DebugBlock>
</template>

<style scoped lang="scss">
.debug-pv-form {
  &__radio-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__slider {
    flex: 1;
    min-width: 120px;
  }

  &__slider-value {
    font-size: 0.75rem;
    font-family: ui-monospace, monospace;
    color: rgba(200, 212, 228, 0.55);
  }
}
</style>
