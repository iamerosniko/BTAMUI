export class AppSettings {
    // public static CURRENT_URL = "http://localhost:52271/4399a480-e29b-4f6e-9408-962bad10991e/"
    public static CURRENT_URL = "http://btamweb.azurewebsites.net/4399a480-e29b-4f6e-9408-962bad10991e/"
    public static GETAPIURL(controller:string):string{
        return this.CURRENT_URL+controller;
    }
    
    public static handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        //return Promise.reject(error.message || error);
        return new Promise<any>((resolve)=>resolve(null))
    }


}
