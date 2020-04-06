export const isFullPageNotScrolled = () => {
    return window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight;
};

export const delay = time => new Promise(resolve => setTimeout(()=>resolve(), time))
