export interface PaginationConf {
    /** 每页条数 */
    pageSize: number;
    /** 回调函数 */
    onChange: (offset: number) => void;
}
export default class Pagination {
    private conf;
    total: number;
    $el: HTMLElement;
    $input: HTMLInputElement;
    inputTimer?: number;
    $prevBtn: HTMLElement;
    $nextBtn: HTMLElement;
    page: number;
    get pageSize(): number;
    get offset(): number;
    get maxPage(): number;
    constructor(total: number, conf: PaginationConf);
    update(offset: number, total: number): void;
    setInput(page: number): void;
    input(now?: boolean): void;
    prev(): void;
    next(): void;
    change(page: number): void;
    checkDisabled(): void;
    keydown(e: KeyboardEvent): void;
    /** 加载 */
    setLoading(isLoading: boolean): void;
}
