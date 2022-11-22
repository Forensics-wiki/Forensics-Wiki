export const data = JSON.parse("{\"key\":\"v-6e19edb7\",\"path\":\"/demo/page.html\",\"title\":\"Page Config\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Page Config\",\"order\":1,\"description\":\"Content before more comment is regarded as page excerpt.\\n\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/demo/page.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Page Config\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Content before more comment is regarded as page excerpt.\\n\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"<p>Content before <code v-pre>more</code> comment is regarded as page excerpt.</p>\\n\",\"headers\":[{\"level\":2,\"title\":\"Page Information\",\"slug\":\"page-information\",\"link\":\"#page-information\",\"children\":[]},{\"level\":2,\"title\":\"Page Content\",\"slug\":\"page-content\",\"link\":\"#page-content\",\"children\":[]},{\"level\":2,\"title\":\"Page Structure\",\"slug\":\"page-structure\",\"link\":\"#page-structure\",\"children\":[]}],\"readingTime\":{\"minutes\":0.78,\"words\":233},\"filePathRelative\":\"demo/page.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
