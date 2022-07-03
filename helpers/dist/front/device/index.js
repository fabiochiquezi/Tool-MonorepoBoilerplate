"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDesktop = exports.isTablet = exports.isMobile = void 0;
var deviceEnum;
(function (deviceEnum) {
    deviceEnum[deviceEnum["mobile"] = 1] = "mobile";
    deviceEnum[deviceEnum["tablet"] = 2] = "tablet";
    deviceEnum[deviceEnum["desktop"] = 3] = "desktop";
})(deviceEnum || (deviceEnum = {}));
const defineDevice = (device) => {
    const mediaQuery = (width) => device.matchMedia(width).matches;
    const mobile = '(max-width: 640px)';
    const tablet = '(min-width: 641px) and (max-width: 1024px)';
    const desktop = '(min-width: 1025px)';
    if (mediaQuery(mobile))
        return deviceEnum.mobile;
    if (mediaQuery(tablet))
        return deviceEnum.tablet;
    if (mediaQuery(desktop))
        return deviceEnum.desktop;
};
const isMobile = (device) => defineDevice(device) === deviceEnum.mobile;
exports.isMobile = isMobile;
const isTablet = (device) => defineDevice(device) === deviceEnum.tablet;
exports.isTablet = isTablet;
const isDesktop = (device) => defineDevice(device) === deviceEnum.desktop;
exports.isDesktop = isDesktop;
