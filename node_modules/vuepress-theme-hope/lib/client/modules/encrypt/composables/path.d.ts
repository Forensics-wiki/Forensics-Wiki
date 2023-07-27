import type { ComputedRef } from "vue";
export interface EncryptStatus {
    isEncrypted: boolean;
    isDecrypted: boolean;
}
export interface PathEncrypt {
    status: ComputedRef<EncryptStatus>;
    getStatus: (path: string) => EncryptStatus;
    validate: (token: string, keep?: boolean) => void;
}
export declare const usePathEncrypt: () => PathEncrypt;
