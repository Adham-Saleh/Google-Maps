<template lang="pug">
    //- pre {{errorBag}}
    //- pre {{bindingOptions}}
    //- pre {{locationFormSchema}}
    label.form-label.ms-2(:class="{'error-label': getError(bindingOptions)}" style="font-size: 15px;") {{label}} 
    input.form-control.p-2.rounded-4(:placeholder='placeholder' v-bind='validationValue' :class="{'input-error': getError(bindingOptions)}")
    p.text-danger.ms-2.error-label(v-if="getError(bindingOptions)") {{getError(bindingOptions)}}
</template>

<script setup lang="ts">
import { locationForm } from "~/schema/formSchema";

const locationFormSchema = locationForm();

const props = defineProps(["label", "placeholder", "bindingOptions"]);

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
  color: red;
}

.input-error {
  outline: 1px solid red;
}
</style>
