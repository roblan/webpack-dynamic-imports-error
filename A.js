(() => {
    import('./dynamicA').then(module => module.default).then(console.log);
})();
