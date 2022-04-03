<template>
  <div id="twcaseal" :class="{ MINI: sealLogoType === 'MINI', SMALL: sealLogoType !== 'MINI' }">
    <img :src="src || require(`@/assets/${sealVer}-${sealLogoType.toLowerCase()}.png`)"/>
  </div>
</template>
<script>
export default {
  name: 'twcaSeal',
  props: {
    src: String,
    version: {
      type: String,
      default: 'v4'
    },
    logoType: {
      type: String,
      default: 'MINI'
    },
    cn: String
  },
  data: () => ({
    twcaSealJsUrl: {
      'v3': '//ssllogo.twca.com.tw/twcaseal_v3.js',
      'v4': '//ssllogo.twca.com.tw/v4/twcaseal_v4.js'
    }
  }),
  mounted () {
    window.twca_cn = window.twca_cn || this.cn
    this.attachTwcasealJs()
  },
  methods: {
    attachTwcasealJs () {
      let that = this
      if (typeof window.twcasealcb === 'function') {
        // twcaseal script has already loaded.
        that.runTwcaSeal()
      } else {
        let js = document.createElement('script')
        js.src = this.twcaSealJsUrl[this.version] || this.twcaSealJsUrl['v4']
        js.onload = () => {
          that.runTwcaSeal()
        }
        document.body.appendChild(js)
      }
    },
    runTwcaSeal () {
      setTimeout(() => {
        if (document.querySelector('#twcaseal #twcad1') === null) {
          // trigger window load event ref by twcaseal_v4.js
          dispatchEvent(new Event('load'))
        }
      }, 300)
    }
  },
  computed: {
    sealVer () {
      return ((this.version === 'v3') ? 'v3' : 'v4')
    },
    sealLogoType () {
      return ((this.logoType === 'MINI') ? 'MINI' : 'SMALL')
    }
  }
}
</script>
