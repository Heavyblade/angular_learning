class SpeakerListController {
      constructor(speakerService) {
          this.speakerService = speakerService;
          this.speakers       = [];
          debugger;
          this.loadData();
      }

      loadData() {
        this.speakerService.getSpeakers()
          .then(response => {
              debugger;
              this.speakers = response.data;
          });
      }
}

SpeakerListController.$inject = ['speakerService'];

export default SpeakerListController;
