import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: [ './profile-picture.component.scss' ]
})
export class ProfilePictureComponent implements OnInit {

  private colorIndex = 0;
  private pictureIndex = 0;

  private static readonly IMAGE_SRC_BASE = 'https://randomuser.me/api/portraits/women';

  private static readonly FRAME_COLORS = [
    'white',
    'green',
    'blue',
    'red'
  ];

  frameColor = 'white';
  pictureUrl = `${ProfilePictureComponent.IMAGE_SRC_BASE}/${this.pictureIndex}.jpg`;


  constructor() {

  }

  ngOnInit(): void {

  }

  onMouseEnter(): void {
    this.frameColor = ProfilePictureComponent.FRAME_COLORS[ ++this.colorIndex % ProfilePictureComponent.FRAME_COLORS.length ];
  }

  onPictureClicked(): void {
    this.pictureUrl = `${ProfilePictureComponent.IMAGE_SRC_BASE}/${++this.pictureIndex}.jpg`;
  }

}