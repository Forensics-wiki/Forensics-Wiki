import { usePageData } from "@vuepress/client";
import { isPlainObject } from "@vuepress/shared";
import { useSessionStorage, useStorage } from "@vueuse/core";
import { computed } from "vue";
import { keys, startsWith } from "vuepress-shared/client";
import { checkToken } from "@theme-hope/modules/encrypt/utils/index";
import { useEncryptData } from "./utils.js";
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
export const usePathEncrypt = () => {
    const page = usePageData();
    const encryptData = useEncryptData();
    const localToken = useStorage(STORAGE_KEY, {});
    const sessionToken = useSessionStorage(STORAGE_KEY, {});
    const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config)
        ? keys(encryptData.value.config)
            .filter((key) => startsWith(decodeURI(path), key))
            .sort((a, b) => b.length - a.length)
        : [];
    const getStatus = (path) => {
        const matchedKeys = getPathMatchedKeys(path);
        if (matchedKeys.length > 0) {
            const { config = {} } = encryptData.value;
            return {
                isEncrypted: true,
                isDecrypted: matchedKeys.some((key) => (localToken.value[key] &&
                    config[key].some((token) => checkToken(localToken.value[key], token))) ||
                    (sessionToken.value[key] &&
                        config[key].some((token) => checkToken(sessionToken.value[key], token)))),
            };
        }
        return {
            isDecrypted: false,
            isEncrypted: false,
        };
    };
    const status = computed(() => getStatus(page.value.path));
    const validate = (inputToken, keep = false) => {
        const { config = {} } = encryptData.value;
        const matchedKeys = getPathMatchedKeys(page.value.path);
        // some of the tokens matches
        for (const hitKey of matchedKeys)
            if (config[hitKey].filter((token) => checkToken(inputToken, token))) {
                (keep ? localToken : sessionToken).value[hitKey] = inputToken;
                break;
            }
    };
    return {
        status,
        getStatus,
        validate,
    };
};
//# sourceMappingURL=path.js.map