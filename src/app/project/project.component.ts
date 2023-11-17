import { Component } from '@angular/core';

import { PROJECT_OBJ } from './constants/project-object.constant';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projectObj = PROJECT_OBJ;
}
