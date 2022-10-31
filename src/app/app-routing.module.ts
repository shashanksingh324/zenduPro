import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { FormsComponent } from './forms/forms.component';
import { HistoryComponent } from './history/history.component';
import { ReportsComponent } from './reports/reports.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'submissions',
    component: SubmissionsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'workflow',
    component: WorkflowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
