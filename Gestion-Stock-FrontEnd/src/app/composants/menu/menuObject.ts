export interface MenuObject {
    id?: string;
    titre?: string;
    icon?: string;
    url?: string;
    sousMenu?: Array<MenuObject>;
}