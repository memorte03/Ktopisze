class Config{
    constructor() {
        this.src = 'HelloWorld1';
        
    }

    getSrc(){
        return `./src/components/${this.src}`;
    }
    getPublic(){
        return `./public/css/${this.src}`;
    }
}

module.exports = Config;