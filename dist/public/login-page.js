var LoginPage = {
  setup() {
    const email = Vue.ref("");
    const password = Vue.ref("");
    const rememberme = Vue.ref(false);

    const router = VueRouter.useRouter();
    const route = VueRouter.useRoute();

    const login = () => {
      localStorage.setItem("LoggedUser", "1");
      setTimeout(() => {
        if (route.query.replace) router.replace(route.query.replace);
        else router.replace("/");
      }, 1000);
    };
    return { email, login, password, rememberme };
  },
  template: /*html*/ `
  <div class="flex align-items-center justify-content-center h-screen w-screen ">
    <div class="surface-card p-4 shadow-2 border-round xl:w-3 lg:w-6">
        <div class="text-center mb-5">
            <img src="https://blocks.primevue.org/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span class="text-600 font-medium line-height-3">Don't have an account?</span>
            <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>
    
        <div>
            <label for="email" class="block text-900 font-medium mb-2">Email</label>
            <p-inputtext v-model="email"  type="text" class="w-full mb-3" />
    
            <label for="password" class="block text-900 font-medium mb-2">Password</label>
            <p-inputtext  v-model="password"  type="password" class="w-full mb-3" />
    
            <div class="flex align-items-center justify-content-between mb-6">
                <div class="flex align-items-center">
                    <p-checkbox :binary="true" v-model="rememberme" id="rememberme" class="mr-2"></p-checkbox>
                    <label for="rememberme">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
            </div>
    
            <p-button label="Sign In" @click="login" icon="pi pi-user" class="w-full"></p-button>
        </div>
    </div>
  </div>`,
  components: {
    "p-button": primevue.button,
    "p-inputtext": primevue.inputtext,
    "p-checkbox": primevue.checkbox,
  },
};
