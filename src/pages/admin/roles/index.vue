<template>
    Đây là trang quản lý Roles
</template>

<script>
  import {useMenu} from '../../../stores/use-menu.js'
  export default {
    setup(){
        const store = useMenu();
        store.onselectedKeys(['adnin-roles']);
    }
  }
</script>