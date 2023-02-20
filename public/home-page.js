var HomePage = {
  setup() {
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

    const menu = Vue.ref();

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    const apps = Vue.ref([
      {
        name: "The New York Times",
        icon: "https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg=s256-rw",
        path: "/app/react-app-01",
        author: "App team",
      },
      {
        name: "Coursera: Learn career skills",
        icon: "https://play-lh.googleusercontent.com/swfNDX3jEjWj_jvAOyv-ifeggaySH1AViujt9XDQfWXxn1lFT8XRRCZ2bngYo_KmrA=s256-rw",
        path: "/app/react-app-01",
        author: "App team",
      },
    ]);
    const router = VueRouter.useRouter();
    const enterApp = (path) => {
      router.push({ path });
    };

    return { items, toggle, menu, apps, enterApp };
  },
  template: /*html*/ `
  <div style="background-color:#f8f7fa;" class="w-screen h-screen">
  <div style="inline-size: 100%;margin-inline: auto; max-inline-size: 1440px;" class="pt-4">
    <p-toolbar class="border-round-xl border-none py-2 px-4 bg-white">
      <template #start>
        <span class="p-input-icon-left">
          <i class="fa-light fa-magnifying-glass"></i>
          <p-inputtext class="border-none" type="text" v-model="value3" placeholder="Search application"></p-inputtext>
        </span>
        </span>
      </template>
      </template>
      <template #end>
      <i style="font-size: 24px;height: 24px;width: 24px;" class="fa-light fa-gear mr-3 cursor-pointer"></i>
      <i style="font-size: 24px;height: 24px;width: 24px;" class="fa-light fa-bell mr-3 cursor-pointer"></i>
        <p-avatar aria-controls="overlay_menu" aria-haspopup="true" @click="toggle" class="cursor-pointer" image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1.129659bb.png" size="large" shape="circle"></p-avatar>
        <p-menu id="overlay_menu" ref="menu" :model="items" :popup="true"></p-menu>
      </template>
    </p-toolbar>
  </div>
  <div style="inline-size: 100%;margin-inline: auto; max-inline-size: 1440px;" class="pt-6">
    <div style="flex-wrap: wrap" class="flex gap-4">
      <div style="width:130px; max-width: 130px" class="cursor-pointer" @click="enterApp(item.path)" v-for="(item, index) in apps">
        <div>
          <img width="130" height="130" class="" style="border-radius: 20%;box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);" :src="item.icon" />
        </div>
        <div style="height:60px;overflow: hidden;">
          <div class="mt-2" style="font-size: .8rem;font-weight: 400;color: rgb(32,33,36);"> {{ item.name }}</div>
          <div style="font-size: .8rem;font-weight: 400;color: rgb(32 33 36 / 70%);"> {{ item.author }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  components: {
    "p-toolbar": primevue.toolbar,
    "p-menu": primevue.menu,
    "p-avatar": primevue.avatar,
    "p-inputtext": primevue.inputtext,
  },
};
