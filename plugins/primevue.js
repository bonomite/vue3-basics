import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
// import Divider from 'primevue/divider'
// import InputText from 'primevue/inputtext'
// import Image from 'primevue/image'
// import InputSwitch from 'primevue/inputswitch'
// import Menubar from 'primevue/menubar'
// import Menu from 'primevue/menu'
// import MegaMenu from 'primevue/megamenu'
// import Dropdown from 'primevue/dropdown'
// import Sidebar from 'primevue/sidebar'
// import Paginator from 'primevue/paginator'
// import Skeleton from 'primevue/skeleton'
// import Carousel from 'primevue/carousel'
// import Tooltip from 'primevue/tooltip'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.component('Button', Button)
    // nuxtApp.vueApp.component('Divider', Divider)
    // nuxtApp.vueApp.component('InputText', InputText)
    // nuxtApp.vueApp.component('Image', Image)
    // nuxtApp.vueApp.component('InputSwitch', InputSwitch)
    // nuxtApp.vueApp.component('Menubar', Menubar)
    // nuxtApp.vueApp.component('Menu', Menu)
    // nuxtApp.vueApp.component('MegaMenu', MegaMenu)
    // nuxtApp.vueApp.component('Dropdown', Dropdown)
    // nuxtApp.vueApp.component('Sidebar', Sidebar)
    // nuxtApp.vueApp.component('Paginator', Paginator)
    // nuxtApp.vueApp.component('Skeleton', Skeleton)
    // nuxtApp.vueApp.component('Carousel', Carousel)
    // nuxtApp.vueApp.component('Tooltip', Tooltip)
    // nuxtApp.vueApp.directive('tooltip', Tooltip)

})