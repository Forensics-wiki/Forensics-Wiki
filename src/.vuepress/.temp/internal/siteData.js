export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Forensics-Wiki\",\"description\":\"电子数据取证综合文库\",\"head\":[[\"script\",{\"charset\":\"UTF-8\",\"id\":\"LA_COLLECT\",\"src\":\"//sdk.51.la/js-sdk-pro.min.js\"}],[\"script\",{},\"LA.init({id:\\\"K2xUaYGSFQf9s7gd\\\",ck:\\\"K2xUaYGSFQf9s7gd\\\"})\"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
