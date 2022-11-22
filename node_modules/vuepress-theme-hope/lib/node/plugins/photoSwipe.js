import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
export const getPhotoSwipePlugin = (options) => {
    if (options === false)
        return null;
    return photoSwipePlugin({
        selector: ".theme-hope-content :not(a) > img",
        ...options,
    });
};
//# sourceMappingURL=photoSwipe.js.map