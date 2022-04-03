import TwcaSeal from "@/components/TwcaSeal.vue"

const VueTwcaSeal = {
    install(Vue, twca_cn) {
        if (twca_cn) {
            window.twca_cn = window.twca_cn || twca_cn
        }
        Vue.component('twcaSeal', TwcaSeal)
    }
}

export default VueTwcaSeal
