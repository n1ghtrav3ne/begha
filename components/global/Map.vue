<template>
  <div class="page ">
    <NeshanMap defaultType="neshan" mapKey="web.9d33412a9b3349059120bece99156441"
      serviceKey="web.9d33412a9b3349059120bece99156441" :center="{ latitude: 36.311559, longitude: 59.5870851 }"
      :zoom="4" :poi="true" :traffic="true" @on-init="onInit" />
  </div>
</template>
<script setup lang="ts">
import NeshanMap from "@neshan-maps-platform/vue3-openlayers";
import { Map } from "@neshan-maps-platform/ol";
import { fromLonLat } from "@neshan-maps-platform/ol/proj";

function onInit(map: Map) {
  const view = map?.getView();
  view?.animate({
    center: fromLonLat([59.5870851, 36.311559]),
    zoom: 11,
    duration: 1000,
  });
}
</script>
<style>
@import url("@neshan-maps-platform/vue3-openlayers/dist/style.css");

.page {
  width: 100%;
  height: 100vh;
  display: block;
  padding: 0;
  margin: 0;
}
</style>
