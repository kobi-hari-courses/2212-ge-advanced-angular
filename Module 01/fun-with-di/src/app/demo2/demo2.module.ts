import { NgModule } from "@angular/core";
import { NUMBER_TOKEN } from "../tokens/number-demo.token";

@NgModule({
    providers: [
        {
            provide: NUMBER_TOKEN,
            useValue: 200, 
            multi: true
        }
    ]
})
export class Demo2Module {

}