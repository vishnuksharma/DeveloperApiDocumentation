export const isFullPageNotScrolled = () => {
    return window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight;
};