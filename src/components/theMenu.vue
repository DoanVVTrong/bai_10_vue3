<template>
  <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
    <a-menu-item key="admin-users">
      <RouterLink :to="{ name: 'admin-users' }">
        <span>Tài khoản</span>
      </RouterLink>
    </a-menu-item>
    <a-menu-item key="admin-roles">
      <RouterLink :to="{ name: 'admin-roles' }">
        <span>Vai trò</span>
      </RouterLink>
    </a-menu-item>
    <a-menu-item key="admin-settings">
      <RouterLink :to="{ name: 'admin-settings' }">
        <span>Cài đặt</span>
      </RouterLink>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useMenu } from "../stores/use-menu.js";
export default defineComponent({
  setup() {
   const state = useMenu();
  //  selectedKeys :["admin-roles"],
  //  openKeys : [] ,

    return {
      ...storeToRefs(state),
    };
  },
});
</script>

