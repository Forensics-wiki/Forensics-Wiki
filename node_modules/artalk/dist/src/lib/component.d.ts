import ArtalkConfig from '../../types/artalk-config';
import Context from '../../types/context';
import { I18n } from '../i18n';
export default abstract class Component {
    $el: HTMLElement;
    ctx: Context;
    readonly conf: ArtalkConfig;
    constructor(ctx: Context);
    $t(key: keyof I18n, args?: {
        [key: string]: string;
    }): string;
}
