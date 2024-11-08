export type TNavItems = {
    label: string;
    icon: string;
    link: string;
    submenu: Array<{
        label: string;
        link: string;
    }>;
};