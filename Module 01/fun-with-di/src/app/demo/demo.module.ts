import { NgModule } from "@angular/core";
import { NUMBER_TOKEN } from "../tokens/number-demo.token";

@NgModule({
    providers: [
        {
            provide: NUMBER_TOKEN,
            useValue: 100,
            multi: true
        }
    ]
})
export class DemoModule {

}