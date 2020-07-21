import data from '../data_react.json'

class page {
    constructor(){
        const this.data = data.map()
    }

    present() {
        return 'I have a data: ' + this.data;
    }
}

var mobily = new page ()
console.log(mobily.present())