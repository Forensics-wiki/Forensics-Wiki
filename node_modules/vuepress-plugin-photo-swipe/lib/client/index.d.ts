import { PhotoSwipeOptions as PhotoSwipeOptions$1 } from 'photoswipe';

type PhotoSwipeOptions = Omit<PhotoSwipeOptions$1, "dataSource" | "index">;
declare const definePhotoSwipeConfig: (options: PhotoSwipeOptions) => void;

export { definePhotoSwipeConfig };
