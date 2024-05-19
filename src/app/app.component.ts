import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
// jhipster-needle-angular-add-module-import JHipster will add new module here

// import { ApplicationConfigService } from 'app/core/config/application-config.service';
// import { fontAwesomeIcons } from './config/font-awesome-icons';
// import MainComponent from './layouts/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-base\>',
  imports: [
    // MainComponent
  ],
  styles:''
})
export default class AppComponent {
  // constructor(applicationConfigService: ApplicationConfigService, iconLibrary: FaIconLibrary, dpConfig: NgbDatepickerConfig) {
  //   // applicationConfigService.setEndpointPrefix(SERVER_API_URL);
  //   registerLocaleData(locale);
  //   // iconLibrary.addIcons(...fontAwesomeIcons);

  // }
}
