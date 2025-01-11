import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {EmployersComponent} from "./pages/employers/employers.component";
import {HubsComponent} from "./pages/hubs/hubs.component";
import {FolderComponent} from "./pages/folder/folder.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import { ROUTES } from "./core/constants/routes";
import { PlanningComponent } from './pages/planning/planning.component';


export const routes: Routes = [
  { path: ROUTES.Dashboard, component: DashboardComponent },
  { path: ROUTES.ListEmployer, component: EmployersComponent },
  { path: ROUTES.ListHubs, component: HubsComponent },
  { path: ROUTES.Folder, component: FolderComponent },
  { path: ROUTES.Chat, component: ChatComponent },
  { path: ROUTES.Project, component: ProjectsComponent },
  { path: ROUTES.Planning, component: PlanningComponent },
  { path: '', redirectTo: `/${ROUTES.Dashboard}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${ROUTES.Dashboard}` }
];
