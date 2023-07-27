import ApiBase from './api-base';
/**
 * 验证码 API
 */
export default class CaptchaApi extends ApiBase {
    /** 验证码 · 获取 */
    captchaGet(): Promise<string>;
    /** 验证码 · 检验 */
    captchaCheck(value: string): Promise<string>;
    /** 验证码 · 状态 */
    captchaStatus(): Promise<{
        is_pass: boolean;
    }>;
}
