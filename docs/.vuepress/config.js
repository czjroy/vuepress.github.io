function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'html-standard',
            'css-standard',
            'js-standard',
            'git-standard'
        ]
    }]
}



module.exports = {
    title: 'Hello VuePress34534',
    description: 'Just playing around',
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
            { text: '后端', link: '/a/' },
            { text: '前端', link: '/development/' },
            { text: 'bi', link: '/notes/' },
            {
                text: 'Languages',
                
            },
            // 下拉列表的配置
            {
            text: 'Languages',
            items: [
                { text: 'Chinese', link: '/language/chinese' },
                { text: 'English', link: '/language/English' }
            ]
            }
        ],
        sidebar: {
            '/sdk/': [
                '',
                'roleLogin',
                {
                  title:'前端',
                  collapsable: true,
                  children:[
                    'README5',
                    'README1',
                    'README2',
                    'README3',
                    'README4',
                    'one'
                  ]
                },
                {
                    title:'后端',
                    collapsable: true,
                    children:[
                      'README5',
                      'README1',
                      'README2',
                      'README3',
                      'README4',
                      'one'
                    ]
                  }
              ],
              '': [
                {
                  title:'前端',
                  collapsable: true,
                  children:[
                    'README5',
                    'README1',
                    'README2',
                    'README3',
                    'README4',
                    'one'
                  ]
                },
                {
                    title:'后端',
                    collapsable: true,
                    children:[
                      'README5',
                      'README1',
                      'README2',
                      'README3',
                      'README4',
                      'one'
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