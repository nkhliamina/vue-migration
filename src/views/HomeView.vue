<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue 3 App" />
    <button @click="changeValue()">Change value</button>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { useValueStore } from '@/store/ValueStore';

const valueStore = useValueStore();

const changeValue = () => {
  valueStore.updateActionValue()
}
</script>

<style lang="scss" scoped>

</style>
