import ApiBase from './api-base';
/**
 * 上传 API
 */
export default class UploadApi extends ApiBase {
    /** 图片上传 */
    imgUpload(file: File): Promise<{
        img_file: string;
        img_url: string;
    }>;
}
