<script setup lang="ts">
import { uuidv7 } from "@extodo/shared";
import consola from "consola";
import { signIn } from "@/apis/auth";

consola.success(uuidv7());

signIn();
</script>

<template>
  <div class="text-lg text-emerald-500 flex items-center justify-center">
    Home
  </div>
</template>
