<template lang="pug">
    div.container.pt-5.pb-5.mt-5
        .row
            .col-lg-8
                Map(@markerChange='updateCenter')
            .col-lg-4
                form
                    pre {{errorBag}}
                    .row 
                        .col-md-12
                            InputText(:label="t('location')" :placeholder="t('chooseLocation')" bindingOptions='location')
                    .row.mt-2
                        .col-md-6
                            InputText(:label="t('longitude')" :placeholder="t('longitude')" bindingOptions='lng' :value='lng')
                        .col-md-6
                            InputText(:label="t('latitude')" :placeholder="t('latitude')" bindingOptions='lat' :value='lat')
                    .row.mt-2
                        .col-md-6
                            InputText(:label="t('country')" :placeholder="t('country')" bindingOptions='country')
                        .col-md-6
                            InputText(:label="t('state')" :placeholder="t('state')" bindingOptions='state')
                    .row
                        .col-md-12.mt-3
                            button.btn.btn-success.rounded-4.w-100.p-2 {{t('submit')}}
                    .row.mt-2
                        .col-md-6
                            .rounded-4.text-center
                                button.btn.btn-outline-secondary.w-100.m-0.rounded-4(type='button' @click="switchLanguage('en')") English
                        .col-md-6
                            .rounded-4.text-center.border.border-2-rounded-4
                                button.btn.btn-outline-secondary.w-100.m-0.rounded-4(type='button' @click="switchLanguage('ar')") العربيه
</template>

<script lang="ts" setup>
const { t, locale } = useI18n();

const lng = ref<number>(25);
const lat = ref<number>(25);

const updateCenter = function (center: any) {
  console.log(center);
  lng.value = center.value.lng;
  lat.value = center.value.lat;
};

const switchLanguage = function (loc: String) {
  locale.value = loc;
  console.log(locale.value);
  console.log(t("location"));
};
</script>

<style scoped></style>
