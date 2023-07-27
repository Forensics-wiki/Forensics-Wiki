import type { ComputedRef } from "vue";
export interface GlobalEncrypt {
    isEncrypted: ComputedRef<boolean>;
    isDecrypted: ComputedRef<boolean>;
    validate: (token: string, keep?: boolean) => void;
}
export declare const useGlobalEncrypt: () => GlobalEncrypt;
