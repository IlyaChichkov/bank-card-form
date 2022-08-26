<template>
  <InteractiveCard/>
  <!--<CardForm/>-->
</template>

<script lang="ts">
import './App.css'
import { defineComponent } from 'vue';
import CardForm from "@/pages/CardForm.vue";
import InteractiveCard from "@/components/InteractiveCard.vue";

export default defineComponent({
  name: 'App',
  components: {
    InteractiveCard,
    // eslint-disable-next-line vue/no-unused-components
    CardForm
  }
});
</script>

<style lang="scss">

</style>
