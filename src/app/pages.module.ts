import { NgModule } from '@angular/core';
import { HomePageModule } from './pages/home-page/home-page.module';
import { CommonModule } from '@angular/common';
import {CommunityPageModule} from "./pages/community-page/community-page.module";
import {ReviewPageModule} from "./pages/review-page/review-page.module";
@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        HomePageModule,
        CommunityPageModule,
        ReviewPageModule,
    ]
})
export class PagesModule {}
