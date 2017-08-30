import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfileCardComponent } from './profile-card';

@NgModule({
  declarations: [
    ProfileCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProfileCardComponent
  ]
})
export class ProfileCardComponentModule {}
