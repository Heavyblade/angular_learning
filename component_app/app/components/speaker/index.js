import angular from 'angular';

import { SpeakerItemComponent } from "./speaker-list/speaker-item.component";
import { SpeakerListComponent } from "./speaker-list/speaker-list.component";
import { SpeakerDetailComponent } from "./speaker-detail/speaker-detail.component";
import { TestComponent } from "../test/test_component";

import { speakerService } from "./speaker.service";

const speaker = angular
      .module("speakers", [])
      .service("speakerService", speakerService)
      .component("SpeakerItem", SpeakerItemComponent)
      .component("SpeakerList", SpeakerListComponent)
      .component("SpeakerDetail", SpeakerDetailComponent)
      .component("TestComponent", TestComponent)
      .config(($stateProvider, $urlRouterProvider) => {
          $stateProvider
            .state("test2", {
              url: "/test2",
              component: "TestComponent"
            })
            .state("speakers", {
              url: "/",
              component: "SpeakerList",
              resolve: {
                speakers: (speakerService, $stateParams) => speakerService.getSpeakers()
              }
            })
            .state("speaker", {
              url: "/speakers/:id",
              component: "SpeakerDetail",
              resolve: {
                speaker: (speakerService, $stateParams) => speakerService.getSpeaker($stateParams.id)
              }
            });

          $urlRouterProvider.otherwise("/");
      })
      .name;

export default speaker;
