declare type Window = {
    matchMedia: any;
    matches: any;
};
declare const isMobile: (device: Window) => boolean;
declare const isTablet: (device: Window) => boolean;
declare const isDesktop: (device: Window) => boolean;
export { isMobile, isTablet, isDesktop };
