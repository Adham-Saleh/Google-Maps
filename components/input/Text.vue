<template lang="pug">
    //- pre {{errorBag}}
    //- pre {{bindingOptions}}
    label.form-label.ms-2 {{label}} 
    input.form-control.p-2.rounded-4(:placeholder='placeholder' v-modal='inputText' v-bind='validationValue' :class="{'input-error': getError(bindingOptions)}" :value='value')
    p.text-danger.ms-2.error-label(v-if="getError(bindingOptions)") {{getError(bindingOptions)}}
</template>

<script setup lang="ts">
import { locationFormSchema } from "~/schema/formSchema";

const inputText = ref();

const props = defineProps(["label", "placeholder", "bindingOptions", "value"]);

const { defineInputBinds, values, errorBag, handleSubmit } = useForm({
  validationSchema: locationFormSchema,
});

const validationValue = defineInputBinds(props.bindingOptions);

const getError = function (name: string) {
  const err = errorBag.value[name];
  return err ? err[0] : false;
};
</script>

<style scoped>
.form-label {
  font-size: 14px;
}

.error-label {
  font-size: 12px;
}

.input-error {
  outline: 1px solid red;
}
</style>
