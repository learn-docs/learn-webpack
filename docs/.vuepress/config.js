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
				text: '星星♥',
				link: 'https://github.com/webVueBlog/learn-webpack'
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
				path: '/handbook/entry',
				collapsable: false, // 不折叠
				children: [{
						title: "入口entry",
						path: "/handbook/entry"
					},
					{
						title: "输出output",
						path: "/handbook/output"
					}
				],
			}
		]
	}
}
