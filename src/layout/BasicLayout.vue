<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="content">
        <RouterView/>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="http://github.com/junjie0550" target="_blank">版权作者 by Blame</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
#basicLayout .header{
  padding-inline: 20px;
  color: unset;
  margin-bottom: 16px;
  background: white;
}

#basicLayout .content {
  padding: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
}

#basicLayout .footer {
  background: #efefef;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}

</style>
