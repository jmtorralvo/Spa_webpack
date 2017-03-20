
export default class PhotoList {
    constructor() {
        
    }

    render(photos){
      let albumListTmpl = require("./photoList.tmpl.html"),
          view = document.getElementById('main-view')
                 .innerHTML = albumListTmpl({ photos:photos });
    }
}

