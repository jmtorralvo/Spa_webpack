
export default class Detail {

    constructor() {

    }

    render(detail){ 
      let detailTmpl = require("./detail.tmpl.html"),
          view = document.getElementById('main-view')
                 .innerHTML = detailTmpl({ detail:detail });
    }
}

