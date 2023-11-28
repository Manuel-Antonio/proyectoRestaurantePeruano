import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeRecipesComponent } from './home-recipes/home-recipes.component';
import { HomeReviewsComponent } from './home-reviews/home-reviews.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent, 
    HomeBannerComponent,
    HomeRecipesComponent, 
    HomeReviewsComponent,
    HomeTeamComponent,
    HeaderComponent,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
