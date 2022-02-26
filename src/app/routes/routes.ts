import { HomePageComponent } from '../pages/home-page/home-page.component';
import { LayoutComponent } from '../layout/layout.component';
export const routes = [
    {
        path:'', component: HomePageComponent},
    {
        path: 'history',
        component: LayoutComponent,
        children:[

        ]
    },
    {
        path: '**', redirectTo:'home'
    }
];