export default class APIService { 
    photosUrl:string = 'https://jsonplaceholder.typicode.com/photos';

    constructor() {
        
    }

    getPhotos() : any  {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', this.photosUrl);
            req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
            req.onerror = (e) => reject(Error(`ErrorMsg: ${e}`));
            req.send();
        }); 
    } 
}