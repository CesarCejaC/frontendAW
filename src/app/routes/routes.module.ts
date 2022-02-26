import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page.component';
import { routes } from './routes';
@NgModule({
    imports: [RouterModule.forRoot(routes,{
        useHash:true
    }),
    ],
    declarations:[
        LoginPageComponent
    ],
    exports:[RouterModule],
    entryComponents:[]
})

export class RoutesModule {}