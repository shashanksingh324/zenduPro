
import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  public markers: any[];
  public zoom: number;
  data = [{
    title: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '06/12/2022',
    status: 'Uncomplete',
    status_flag: 'uncomplete'
  },{
    title: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '12/12/2022',
    status: 'Low Risk',
    status_flag: 'lowrisk'
  },{
    title: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '06/12/2022',
    status: 'Uncomplete',
    status_flag: 'uncomplete'
  },{
    title: 'Work Flow: Requires Location',
    from: 'denisgordiyenya@gmail.com',
    to: 'denisgordiyenya@gmail.com',
    dueDate: '06/12/2022',
    status: 'Need Reviews',
    status_flag: 'needreviews'
  }]
  constructor() { 
    this.markers = [];
    this.zoom = 2;
  }

  ngOnInit(): void {
    this.markers.push({
      position: {
        lat: 19.075983,
        lng: 72.877655
      },
      label: {
        color: "black",
        text: "Mumbai"
      }
    });

    this.markers.push({
      position: {
        lat: 28.613939,
        lng: 77.209023
      },
      label: {
        color: "black",
        text: "New Delhi"
      }
    });
  }

}
