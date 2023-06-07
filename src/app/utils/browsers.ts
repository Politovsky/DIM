// Utilities for browser detection. In general we avoid browser detection but
// some bugs are not directly detectable. Keep user-agent detection here.

const appStoreVersion = navigator.userAgent.includes('DIM AppStore');
/** Is this the App Store wrapper version of DIM? */
export function isAppStoreVersion() {
  return appStoreVersion;
}

const iOS = appStoreVersion || (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
/**
 * Is this an iOS mobile browser (which all use Safari under the covers)?
 */
export function isiOSBrowser() {
  return iOS;
}

const windows = navigator.platform.includes('Win');

/** Is this a Windows machine? */
export function isWindows() {
  return windows;
}

const steam = navigator.userAgent.includes('Steam');
export function isSteamBrowser() {
  return steam;
}

const mac = appStoreVersion || /Mac|iPod|iPhone|iPad/.test(navigator.platform);
export function isMac() {
  return mac;
}

export const isNativeDragAndDropSupported = () => 'draggable' in document.createElement('div');
