<template lang="pug">
    //- pre {{center}}
    div.border.border-3.rounded-4.overflow-hidden
        GoogleMap(api-key="AIzaSyAmqmnMKDFq1urlcUYWXaMynmXTWIxbggg"
            mapId="DEMO_MAP_ID"
            style="width: 100%; height: 500px"
            :center="center"
            @click='handleMapClick'
            :zoom="3")
            Marker(:options='markerOptions')
</template>

<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";

const latitude = ref<number>(25);
const longitude = ref<number>(25);

const center = ref({ lng: longitude.value, lat: latitude.value });
const markerOptions = ref({ position: center.value });

const emit = defineEmits(["markerChange"]);
const handleMapClick = function (event: any) {
  const { lat, lng } = event.latLng.toJSON();
  latitude.value = lat;
  longitude.value = lng;

  center.value = { lat, lng };
  markerOptions.value = { position: center.value };

  emit("markerChange", center);
};
</script>

<style lang="scss" scoped></style>
