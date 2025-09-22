<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.jpg" alt="logo" />
            <h1 class="title">XXXXX</h1>
          </div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick" />
      </a-col>
      <a-col flex="120px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ loginUserStore.loginUser.username ?? '无名'}}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore()

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/admin/userManage',
    label: 'XX管理',
    title: 'XX管理',
  },
  {
    key: '/admin/pictureManage',
    label: 'XX管理',
    title: 'XX管理',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://github.com/junjie0550', target: '_blank' }, '个人主页'),
    title: '个人主页',
  },
])

const router = useRouter();
// 路由跳转事件
const doMenuClick = ({key} : {key: string}) => {
  router.push({
    path: key
  })
}

// 当前高亮菜单项
const current = ref<string[]>([])
// 路由监听 跳转后更新高亮菜单项
router.afterEach((to, from) => {
  current.value = [to.path]
})

</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: 40px;
}

.title {
  color: black;
  margin-left: 15px;
}
</style>
