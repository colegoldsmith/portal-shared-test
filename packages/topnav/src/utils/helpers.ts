export const isMacSystem = (): boolean =>
    /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
