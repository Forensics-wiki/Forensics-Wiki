export const getStatus = (themeOptions) => {
    const { plugins = {} } = themeOptions;
    return {
        enableBlog: Boolean(plugins.blog),
        enableEncrypt: Boolean(themeOptions.encrypt &&
            ("admin" in themeOptions.encrypt || "config" in themeOptions.encrypt)),
        enableSlide: Boolean(plugins.mdEnhance && plugins.mdEnhance.presentation),
        supportPageview: Boolean(plugins.comment && plugins.comment.provider === "Waline"),
    };
};
//# sourceMappingURL=status.js.map