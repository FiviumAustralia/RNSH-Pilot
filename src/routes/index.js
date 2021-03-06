import React from 'react';
import { Route, IndexRoute } from 'react-router';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';
import AddPatientView from 'views/AddPatientView';
import PatientView from 'views/PatientView';
import UnderMaintenanceView from 'views/UnderMaintenanceView';
import QuestionnaireView from 'views/QuestionnaireView';
import FollowUpView from 'views/FollowUpView';
import PatientOverview from 'views/PatientOverview';
import RadiotherapyView from 'views/RadiotherapyView';
import BackgroundHistoryView from 'views/BackgroundHistoryView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='addPatient' component={AddPatientView}/>
    <Route path='patient/:id' component={PatientView}>
      <IndexRoute component={PatientOverview} />
      <Route path='background-history' component={BackgroundHistoryView} />
      <Route path='pathology' component={UnderMaintenanceView} />
      <Route path='imaging' component={UnderMaintenanceView} />
      <Route path='mdt' component={UnderMaintenanceView} />
      <Route path='blood-test' component={UnderMaintenanceView} />
      <Route path='surgery' component={UnderMaintenanceView} />
      <Route path='chemotherapy' component={UnderMaintenanceView} />
      <Route path='radiotherapy' component={RadiotherapyView} />
      <Route path='follow-up' component={FollowUpView} />
      <Route path='questionnaires' component={QuestionnaireView} />
      <Route path='clinical-trials' component={UnderMaintenanceView} />
    </Route>
  </Route>
);
