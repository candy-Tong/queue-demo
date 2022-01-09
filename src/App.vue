<template>
  <div v-for="item in routes" :key="item.path">
    <router-link :to="item.path">{{ item.path }}</router-link>
  </div>
  <div style="margin-top: 50px">
    <router-view></router-view>
  </div>
</template>
<script setup lang='ts'>
import {routes} from "./router";

</script>
