module.exports = {
	title: 'webpack5 中文文档',
	description: 'webpack5 最新文档翻译',
	base: '/learn-webpack/',
	theme: 'reco',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
	],
	plugins: [
		'@vuepress/medium-zoom',
		'@vuepress-reco/vuepress-plugin-loading-page',
		[
			'dynamic-title',
			{
				showIcon: '/favicon.ico',
				showText: '(/≧▽≦/)咦！又好了！',
				hideIcon: '/failure.ico',
				hideText: '(●—●)喔哟，崩溃啦！',
				recoverTime: 2000,
			},
		],
		// 看板娘
		[
			"@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: ["blackCat"],
				clean: true,
				height: 260,
				modelStyle: {
					width: '100px',
					position: "fixed",
					right: "0px",
					bottom: "0px",
					opacity: "0.9",
					zIndex: 99999,
					objectFit: 'cover',
				}
			}
		],
		['vuepress-plugin-code-copy', true]
	],
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	themeConfig: {
		lastUpdated: '上次更新',
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
			// collapsable: false, // 不折叠
			children: [{
				title: "入口entry",
				path: "/handbook/entry"
			},
			{
				title: "输出output",
				path: "/handbook/output"
			},
			{
				title: "loader",
				path: "/handbook/loader"
			},
			{
				title: "插件(plugin)",
				path: "/handbook/plugin"
			},
			{
				title: "模式(mode)",
				path: "/handbook/mode"
			},
			{
				title: "浏览器兼容性(browser compatibility)",
				path: "/handbook/browser-compatibility"
			},
			{
				title: "环境(environment)",
				path: "/handbook/environment"
			},
			{
				title: "入口起点-单个入口（简写）语法",
				path: "/handbook/entry-points-1"
			},
			{
				title: "入口起点-对象语法",
				path: "/handbook/entry-points-2"
			},
			{
				title: "入口起点-常见场景",
				path: "/handbook/entry-points-3"
			},
			{
				title: "输出(output)-用法",
				path: "/handbook/output-1"
			},
			{
				title: "输出(output)-多个入口起点",
				path: "/handbook/output-2"
			},
			{
				title: "输出(output)-高级进阶",
				path: "/handbook/output-3"
			},
			{
				title: "loader-示例",
				path: "/handbook/loader-1"
			},
			{
				title: "loader-使用 loader",
				path: "/handbook/loader-2"
			},
			{
				title: "loader-loader 特性",
				path: "/handbook/loader-3"
			},
			{
				title: "loader-解析 loader",
				path: "/handbook/loader-4"
			},
			{
				title: "plugin-剖析",
				path: "/handbook/plugin-1"
			},
			{
				title: "plugin-用法",
				path: "/handbook/plugin-2"
			},
			{
				title: "配置（Configuration）",
				path: "/handbook/configuration"
			},
			{
				title: "模块（Modules）",
				path: "/handbook/modules"
			},
			{
				title: "模块解析（Module Resolution）",
				path: "/handbook/module-resolution"
			},
			{
				title: "Module Federation",
				path: "/handbook/module-federation"
			},
			{
				title: "依赖图(dependency graph)",
				path: "/handbook/dependency-graph"
			},
			{
				title: "target",
				path: "/handbook/target"
			},
			{
				title: "manifest",
				path: "/handbook/manifest"
			},
			{
				title: "模块热替换(hot module replacement)",
				path: "/handbook/hot-module-replacement"
			},
			{
				title: "揭示内部原理",
				path: "/handbook/reveal-inner-workings"
			}
			],
		},
		{
			title: '操作步骤',
			path: '/webpackdoc/start',
			children: [{
				title: "起步",
				path: "/webpackdoc/start"
			}]
		},
		{
			title: '精准配置',
			path: '/webpackconfig/configuration',
			children: [{
				title: "配置",
				path: "/webpackconfig/configuration"
			}]
		},
		{
			title: 'API使用',
			path: '/webpackapi/introduction',
			children: [{
				title: "简介",
				path: "/webpackapi/introduction"
			}]
		},
		]
	}
}
