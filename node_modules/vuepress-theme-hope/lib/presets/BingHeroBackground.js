import { ClientOnly, usePageLang } from "@vuepress/client";
import { onClickOutside, useStorage } from "@vueuse/core";
import { Transition, computed, defineComponent, h, onMounted, ref, shallowRef, } from "vue";
import "./bing-hero-background.scss";
const bingStorage = useStorage("bing-image", {
    index: 0,
    data: [],
});
export default defineComponent({
    name: "BingHeroBackground",
    // TODO: Add download button, image description and copyright information
    // props: {
    //   download: Boolean,
    // },
    setup() {
        const lang = usePageLang();
        const bingInfo = shallowRef();
        const showInfo = ref(false);
        const currentWallpaper = computed(() => {
            const info = bingStorage.value.data[bingStorage.value.index];
            const langCode = lang.value.toLowerCase().split("-").shift();
            if (info) {
                const { url, wallpaper, downloadable, locales } = info;
                return {
                    url,
                    wallpaper,
                    downloadable,
                    ...(locales[langCode] ?? locales["en"]),
                };
            }
            return null;
        });
        const getImage = () => {
            return fetch("https://bing-wallpaper.vuejs.press/api/wallpaper").then((response) => response.json());
        };
        const prev = () => {
            bingStorage.value.index--;
        };
        const next = () => {
            bingStorage.value.index++;
        };
        onClickOutside(bingInfo, () => {
            showInfo.value = false;
        });
        onMounted(() => {
            void getImage().then((res) => {
                bingStorage.value.data = res;
            });
        });
        return () => {
            const { title, headline, url, backstage, quickFact, copyright } = currentWallpaper.value || {};
            return h(ClientOnly, () => url
                ? [
                    h("div", {
                        class: "vp-blog-mask",
                        style: {
                            background: `url(${url}) center/cover no-repeat`,
                        },
                    }),
                    h("div", {
                        class: "bing-switch",
                        onClick: () => {
                            showInfo.value = true;
                        },
                    }, [
                        h(Transition, { name: "fade" }, () => showInfo.value
                            ? h("div", { class: "bing-info", ref: bingInfo }, [
                                h("a", {
                                    href: backstage,
                                    target: "_blank",
                                    class: "bing-info-header",
                                }, headline),
                                h("hr"),
                                h("div", { class: "bing-info-body" }, quickFact),
                                h("div", { class: "bing-info-copyright" }, copyright),
                            ])
                            : null),
                        h("div", { class: "bing-location" }, [
                            h("span", { class: "bing-location-icon" }),
                            title,
                        ]),
                        h("button", {
                            class: "bing-switch-left",
                            disabled: bingStorage.value.index === 0,
                            onClick: () => prev(),
                        }),
                        h("button", {
                            class: "bing-switch-right",
                            disabled: bingStorage.value.index ===
                                bingStorage.value.data.length - 1,
                            onClick: () => next(),
                        }),
                    ]),
                ]
                : null);
        };
    },
});
//# sourceMappingURL=BingHeroBackground.js.map