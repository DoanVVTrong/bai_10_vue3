<template>
    <div class="containter-fluid">
      <div
        class="row text-white"
        style="background-color: #0c713d; padding: 1rem"
      >
        <div
          class="col-1 d-flex d-sm-none align-items-center justify-content-center"
        >
          <span @click="showDrawer()">
            <font-awesome-icon icon="align-justify" />
          </span>
        </div>
  
        <div
          class="
            col-10 col-sm-9
            d-flex
            align-items-center
            justify-content-center justify-content-sm-start
          "
        >
          <img
            src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/393770747_885806859777765_8775986495022015385_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UJWrCFvhLoAX-FtEIQ&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBbzHWsVeIiFw6O8O6ijxI10XvhST__2pfaqj-aAhbArA&oe=6534C932"
            alt="Logo"
            height="32"
            width="34"
            class="ms-3 me-3"
          />
          <span class="d-none d-sm-flex">QUẢN TRỊ</span>
        </div>
  
        <div
          class="
            col-sm-3
            d-none d-sm-flex
            align-items-center
            justify-content-sm-end
          "
        >
          <span>Admin</span>
        </div>
  
        <div
          class="col-1 d-flex d-sm-none align-items-center justify-content-center"
        >
          <span @click="showDrawerUser()">
            <font-awesome-icon icon="user" />
          </span>
        </div>
      </div>
    </div>
  
    <a-drawer v-model:visible="visible" title="DANH MỤC" placement="left">
      <TheMenu />
    </a-drawer>
  
    <a-drawer v-model:visible="visible_user" title="ADMIN" placement="right">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </template>
  
  <script>
  import TheMenu from "../components/theMenu.vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    components: {
      TheMenu,
    },
    setup() {

  
      const showDrawer = () => {
        visible.value = true;
      };
  
      const showDrawerUser = () => {
        visible_user.value = true;
      };
  
      return {
       
        showDrawer,
        showDrawerUser,
      };
    },
  });
  </script>