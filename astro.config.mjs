import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import overrideIntegration from "./src/overrideIntegration.mjs";

// https://astro.build/config
export default defineConfig({
	integrations: [
		overrideIntegration(),
		starlight({
			plugins: [starlightImageZoom()],
			title: 'Forensics-Wiki',
			social: {
				github: 'https://github.com/Forensics-wiki/Forensics-Wiki',
			},
			sidebar: [
				{
					label: '首页',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '项目介绍', link: 'guides' },
						{ label: '加入我们👥', link: '/guides/join/'},
					],
				},
				{
					label: '引入',
					autogenerate: { directory: 'index' },
				},
				{
					label: '取证基础',
					autogenerate: { directory: 'base' },
				},
				{
					label: 'Windows取证',
					autogenerate: { directory: 'windows' },
				},
				{
					label: 'Linux取证',
					autogenerate: { directory: 'linux' },
				},
				{
					label: '内存取证',
					autogenerate: { directory: 'volatility' },
				},
				{
					label: '安卓取证',
					autogenerate: { directory: 'android' },
				},
				{
					label: '开源程序分析',
					autogenerate: { directory: 'open' },
				},
				{
					label: '赛题Writeup',
					autogenerate: { directory: 'writeup' },
				},
			],
		}),
	],
});
