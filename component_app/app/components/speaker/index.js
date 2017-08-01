import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import { SpeakerItemComponent }   from "./speaker-list/speaker-item.component";
import { SpeakerListComponent }   from "./speaker-list/speaker-list.component";
import { SpeakerDetailComponent } from "./speaker-detail/speaker-detail.component";
import { SpeakerService }         from "./speaker.service";
import { TestComponent }          from "../test/test_component";

const speaker = angular
      .module("speakers", [uiRouter])
      .service("SpeakerService",  SpeakerService)
      .component("speakerList",   SpeakerListComponent)
      .component("speakerItem",   SpeakerItemComponent)
      .component("speakerDetail", SpeakerDetailComponent)
      .component("testComponent", TestComponent)
      .config(($stateProvider, $urlRouterProvider) => {
          $stateProvider
            .state("tests", {
              url: "/",
              component: "testComponent"
            })
            .state("speakers", {
              url: "/speakers",
              component: "speakerList",
              resolve: { speakers: [] }
            })
            .state("speaker", {
              url: "/speakers/:id",
              component: "speakerDetail",
              resolve: {
                speaker: (SpeakerService, $stateParams) => SpeakerService.getSpeaker($stateParams.id)
              }
            });

          $urlRouterProvider.otherwise("/");
      })
      .name;

export default speaker;
