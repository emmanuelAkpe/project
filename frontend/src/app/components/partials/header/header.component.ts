import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  dropNavItems = [
    {
      name: 'signIn',
      link: '',
    },
    {
      name: 'signOut',
      link: '',
    },
    {
      name: 'My orders',
      link: '',
    },
  ];

  smallSCreenItems = [
    {
      name: 'Home',
      link: '',
    },
    {
      name: 'Shop',
      link: '',
    },
    {
      name: 'Categories',
      link: '',
    },
    {
      name: 'Blog',
      link: '',
    },
  ];
  contactItems = [
    {
      name: 'Contact',
      link: '',
      icon: '',
    },
    {
      name: '(+233) -54287-9063',
      link: '',
      icon: '',
    },
  ];

  ngOnInit(): void {}

  openNav: boolean = false;

  toggleNav() {
    this.openNav = !this.openNav;
  }

  dropDown: boolean = false;

  toggleDropDown() {
    this.dropDown = !this.dropDown;
    console.log(this.dropDown);
  }
}
