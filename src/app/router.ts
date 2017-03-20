import * as prouter from 'prouter';
import APIService from './services/api.service';
import PhotoList from './components/photoList/photoList.module';


export default class CllucRouter {
    router: prouter = prouter.Router;
    apiSrv = new APIService();
    photoList = new  PhotoList();


    constructor() {
        this.apiSrv = new APIService();

        this.router
            .use('/home', (req) => {

            })
            .use('/list', (req) => {
                this.apiSrv.getPhotos()
                    .then((resp) => {
                        this.photoList.render(JSON.parse(resp))
                    })
            })
            .use('/detail/:id/:url/', (req) => {
                debugger;
            })
    }

    init() {
        this.router.listen({
            root: '/', 
            usePushState: false, 
            hashChange: true, 
            silent: false 
        });
    }

}
