class Config{
    constructor() {
        this.src = 'HelloWorld1';
        
    }

    getSrc(){
        return `./src/components/${this.src}`;
    }
}

module.exports = Config;