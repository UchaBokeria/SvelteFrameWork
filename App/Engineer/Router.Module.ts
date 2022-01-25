
export class RouterModule {
    Routers:any;
    Start:string;
    
	/**
	 * @param START Start Point For Application
     * @param ROUTERS Components' Map From ./App/Engineer/All.Module.ts
	 */

    constructor( START:string = "App" , ROUTERS:any) {
        this.Routers = ROUTERS;
        this.Route(START);
    }

	/**
	 * @param ROUTE Router's Name From ./App/Engineer/All.Module.ts
     * @param DESTINATION Dom Destination To Place Rendered Component
	 */

    Route = async (ROUTE:string, DESTINATION:any = document.body)=> {
        let Template = await this.Routers[ROUTE].Template();
        let Design = await this.Routers[ROUTE].Design();
        let Module = await this.Routers[ROUTE].Module();
        let Prop = new Module.default;
        //console.log(new Template.default());
        
        return {
            Render: new Template.default({
                target: DESTINATION,
                props:  Object.fromEntries([[Prop.constructor.name , Prop]])
            }),
            Template: Template,
            Module: Module,
            Prop: Prop
        }

    }


}