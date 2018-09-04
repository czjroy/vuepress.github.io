module.exports = {
    title: '奥飞文档',
    description: '随意些点描述',
    base: '/vuepress.github.io/' ,
    sidebarDepth:2,
    head: [
        ['link', { rel: 'icon', href: '/logo.ico' }]
      ],
    themeConfig: {

        // sidebarDepth:0,
        nav: [
            { 
                text: 'sdk', 
                items: [
                    { text: '融合SDK', link: '/language/chinese' },
                    { text: '海外融合SDK', link: '/sdk/' }
                ] 
            },
            // { text: '后端', link: '/a/' }, 
            {   text: '前端',
                items: [
                    { text: '前端规范', link: '/web/' },
                    // { text: '海外融合SDK', link: '/sdk/' }
            ]
            }
        ],
        sidebar: {
            '/sdk/':[
                {
                  title:'海外融合SDK',
                  collapsable: false,
                  children: [
                      '',
                      'roleLogin',
                      
                  ]
                }
              ],
              '/web/':[
                //   "",
                {
                  title:'前端规范',
                  collapsable: false,
                  children: [
                      ''
                  ]
                }
              ]
           
        }

        // sidebar: {
        //     '/sdk/': [
        //             'README5',
        //             'README1',
        //             'README2',
        //             'README3',
        //             'README4',
        //             'one'
        //         ],
        //         '/sdk/': [
        //             'README5',
        //             'README1',
        //             'README2',
        //             'README3',
        //             'README4',
        //             'one'
        //         ]
        // }
    }
}

