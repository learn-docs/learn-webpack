module.exports = {
	title: 'webpack5 文档',
	description: 'webpack5 最新文档翻译',
	base: '/learn-webpack/',
	theme: 'reco',
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		subSidebar: 'auto',
		nav: [{
				text: '首页',
				link: '/'
			},
			{
		 	text: '哪吒的博客',
				items: [{
						text: 'Github',
						link: 'https://github.com/webVueBlog'
					},
					{
						text: '博客',
						link: 'https://1024bibi.com'
					}
				]
			}
		],
		sidebar: [{
				title: '欢迎学习',
				path: '/',
				collapsable: false, // 不折叠
				children: [{
					title: "学前必读",
					path: "/"
				}]
			},
			{
				title: "基础学习",
				path: '/handbook/ConditionalTypes',
				collapsable: false, // 不折叠
				children: [{
						title: "条件类型",
						path: "/handbook/ConditionalTypes"
					},
					{
						title: "泛型",
						path: "/handbook/Generics"
					}
				],
			}
		]
	}
}
