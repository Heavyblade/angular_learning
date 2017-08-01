import { SpeakerListController } from "./speaker-list.controller";

export const SpeakerListComponent = {
    bindings: { speakers: "<" },
    controller: SpeakerListController,
    template: `<h1> Hola speakers </h1>`
};
