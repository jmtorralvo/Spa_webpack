import CllucRouter from './router';
import APIService from './services/api.service';
import PhotoList from './components/photoList/photoList.module';

//styles
import 'material-design-lite';
require('./styles/main.scss');



class SpaApp {
    router:CllucRouter;
    list: PhotoList;

    constructor() {
        this.list = new PhotoList();
        this.router = new CllucRouter();
        this.router.init(); 
    }
}

var app = new SpaApp(); 