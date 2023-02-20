var RenderMicroApp = {
  setup() {
    const route = VueRouter.useRoute();
    const id = route.params.appName;

    Vue.onMounted(() => {
      System.import("http://localhost:9090/app.js");
    });

    Vue.onBeforeUnmount(() => {
      System.delete("http://localhost:9090/app.js");
    });

    return { id: id[0] };
  },
  template: `<div :id="id">Loading...</div>`,
};
