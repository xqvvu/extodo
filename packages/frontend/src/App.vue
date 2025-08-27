<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="bg-blueGray text-ellipsis text-lg h-screen">
    <p class="text-emerald">
      Hi via Vue {{ count }}
    </p>
  </div>
</template>
