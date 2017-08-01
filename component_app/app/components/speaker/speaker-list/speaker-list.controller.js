class SpeakerListController {
    constructor(SpeakerService) {
          debugger;
          this.speakerService = SpeakerService;
          this.speakers = [ {
                "id": 1,
                "name": "Todd Motto",
                "country": "UK",
                "talk": "From .component() to @Component",
                "photo": "//angularcamp.org/img/people/ToddMotto.jpg"
              },
              {
                "id": 2,
                "name": "Maxim Salnikov",
                "country": "Norway",
                "talk":"'Angular Material 2: Reward your app with high-quality UI in minutes",
                "photo": "//angularcamp.org/img/people/MaximSalnikov.jpg"
              }
            ];
    }

    loadData () {
        debugger;
        this.speakerService.getSpeakers()
        .then(response => {
              this.speakers = response.data;
        });
    }
}

SpeakerListController.$inject = ['SpeakerService'];

export default SpeakerListController;
