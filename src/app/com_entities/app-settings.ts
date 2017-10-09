export class AppSettings {
    public static CURRENT_URL = "http://localhost:52271/4399a480-e29b-4f6e-9408-962bad10991e/"
    // private static CURRENT_URL = "http://projectworkplaceazure2.azurewebsites.net/api/"; 
    //public static CURRENT_URL = "https://x.azurewebsites.net/api/"; 
    //public static CURRENT_URL = "https://x.azurewebsites.net/api/"; 
    public static GETAPIURL(controller:string):string{
        return this.CURRENT_URL+controller;
    }
    public static handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
