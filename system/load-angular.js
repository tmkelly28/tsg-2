System.config({
    packages: {        
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('/boot.js')
.then(null, console.error.bind(console));
