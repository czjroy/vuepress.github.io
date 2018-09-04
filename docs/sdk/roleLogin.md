---
home: "123"
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Evan You
---


# 角色登录
---

## 接口描述：

{{ 1 + 1 }}
{{ $page }}


<script>


    export default {
        mounted () {
            // import('../.vuepress/config').then(module => {
            //     console.log(module)

            //     module.default.title = "!23123"
            // })

            var a = this.$site
            a.title = "1234234"
            this.$site = a
            
            console.log(a.title)
            
        }
    }
    // import config from "../.vuepress/config"
    // console.log(config)
    // config.title = "!23123"
</script>

::: v-pre
`{{ This will be displayed as-is }}`
:::