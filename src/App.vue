<template>
  <CardForm/>
</template>

<script lang="ts">
import './App.css'
import { defineComponent } from 'vue';
import CardForm from "@/pages/CardForm.vue";

export default defineComponent({
  name: 'App',
  components: {
    CardForm
  }
});
</script>

<style lang="scss">

</style>
