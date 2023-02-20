var AppLayout = {
  setup() {
    const menu = Vue.ref([
      {
        header: "React Applications 01",
        hiddenOnCollapse: true,
      },
      {
        href: "/",
        title: "Apps",
        icon: "fa-light fa-folder-grid",
      },
      {
        href: "/app/react-app-01",
        title: "Home",
        icon: "fa-light fa-house-chimney",
        child: [
          {
            href: "/app/react-app-01/demo",
            title: "Demo page",
            icon: "fa-light fa-code",
            class: "pl-5",
          },
          {
            href: "/app/react-app-01/demo2",
            title: "Demo page2",
            icon: "fa-light fa-code",
            class: "pl-5",
          },
        ],
      },
    ]);
    const items = Vue.ref([
      {
        label: "Options",
        items: [
          {
            label: "Profile",
            icon: "fa-light fa-user",
          },
          {
            label: "Setting",
            icon: "fa-light fa-gear",
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: "Logout",
        icon: "fa-light fa-right-from-bracket",
      },
    ]);

    const menu2 = Vue.ref();

    const toggle = (event) => {
      menu2.value.toggle(event);
    };

    return { menu, items, toggle, menu2 };
  },
  template: /*html*/ `<div class='flex surface-100'>
              <div >
                <sidebar-menu width="240px" height="100vh" :relative="true" theme="white-theme" :menu="menu"></sidebar-menu>
              </div>
              <div class="flex-grow-1">
                <div class="mx-4 mt-4  border-round">
              <p-toolbar class="border-round-xl border-none p-2 bg-white" >
                <template #start></template>
                </template>

                <template #end>
                <i style="font-size: 24px;height: 24px;width: 24px;" class="fa-light fa-bell mr-3 cursor-pointer"></i>
                <p-avatar aria-controls="overlay_menu" aria-haspopup="true" @click="toggle" class="cursor-pointer" image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1.129659bb.png" size="large" shape="circle"></p-avatar>
                <p-menu id="overlay_menu" ref="menu2" :model="items" :popup="true"></p-menu>

                </template>
            </p-toolbar>
            </div>
              <div class=" p-4">
                <slot></slot>
              </div>
              </div>
             
          </div>`,
  components: {
    "sidebar-menu": VueSidebarMenu.SidebarMenu,
    "p-toolbar": primevue.toolbar,
    "p-avatar": primevue.avatar,
    "p-button": primevue.button,
    "p-menu": primevue.menu,
  },
};
