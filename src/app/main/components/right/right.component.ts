import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [NgFor],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {
  projects = [
    {
      img: 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2023/11/Thumbnail-Version-2.png',
      title: 'Proyecto',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      img: 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2023/11/Thumbnail-Version-2.png',
      title: 'Proyecto2',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      img: 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2023/11/Thumbnail-Version-2.png',
      title: 'Proyecto3',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      img: 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2023/11/Thumbnail-Version-2.png',
      title: 'Proyecto4',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      img: 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2023/11/Thumbnail-Version-2.png',
      title: 'Proyecto5',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    }
  ]

}
