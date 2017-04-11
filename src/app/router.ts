import * as prouter from 'prouter';
import APIService from './services/api.service';
import PhotoList from './components/photoList/photoList.module';
import Detail from './components/detail/detail.module';


export default class CllucRouter {
    router: prouter = prouter.Router;
    apiSrv = new APIService();
    photoList = new  PhotoList();
    detail = new Detail();


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
            .use('/detail/:id', (req) => {
                this.detail.render(req);
            })
    }

    init() {
        this.router.listen({
            root: '/', 
            usePushState: false, 
            hashChange: true, 
            silent: false 
        });
        this.router.navigate('/list');
    }

}
