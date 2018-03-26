import './staticC';

(() => {
    import('./dynamicC').then(module => module.default).then(console.log);
})();
