import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProfileCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-card',
  templateUrl: 'profile-card.html'
})
export class ProfileCardComponent {
  @Input() profile: any;
  text: string;

  constructor() {
    console.log('Hello ProfileCardComponent Component');
    this.text = 'Hello World';
  }

}
