import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../service/language.service';
import { EventService } from '../service/event.service';
import { Project } from '../interfaces/Product.interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit, OnDestroy {
  info: any;
  projects: Project[] | null = null;
  selectedProject: Project | null = null;
  private languageChangeSubscription: Subscription | null = null;

  constructor(
    private languageService: LanguageService,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
    this.loadInfo();
    this.eventService.languageChanged.subscribe(() => {
      this.loadInfo();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectName = params['projectName'];
      if (projectName) {
        this.selectProjectByName(projectName);
      }
    });
  }

  loadInfo() {
    this.info = this.languageService.getInfo();
    this.projects = this.info.projects;
    this.updateSelectedProject();
  }

  selectProjectByName(name: string) {
    if (this.projects) {
      this.selectedProject = this.projects.find(project => project.name === name) || null;
    }
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.languageChangeSubscription = this.eventService.languageChanged.subscribe(() => {
      this.updateSelectedProject();
    });
  }

  backToProjects() {
    this.selectedProject = null;
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
      this.languageChangeSubscription = null;
    }
  }

  updateSelectedProject() {
    if (this.selectedProject && this.projects) {
      const updatedProject = this.projects.find(proj =>
        proj.name === this.selectedProject!.name
      );
      if (updatedProject) {
        this.selectedProject = updatedProject;
      }
    }
  }

  ngOnDestroy() {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }
}
