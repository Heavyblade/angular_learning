class SpeakerListController {
      constructor(speakerService) {
          this.speakerService = speakerService;
          this.speakers       = [];
      }

      loadData() {
        this.speakerService.getSpeakers()
          .then(response => {
              this.speakers = response.data;
          });
      }
}

SpeakerListController.$inject = ['speakerService'];

export default SpeakerListController;
