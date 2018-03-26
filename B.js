// import './staticB';

(() => {
    import('./dynamicB').then(module => module.default).then(console.log);
})();
