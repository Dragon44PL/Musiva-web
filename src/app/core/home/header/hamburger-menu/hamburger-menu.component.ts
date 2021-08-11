import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  @Input("translation")
  hamburger: any;

  @ViewChild("first")
  first: ElementRef;

  @ViewChild("second")
  second: ElementRef;

  @ViewChild("third")
  third: ElementRef;

  @ViewChild("menu")
  menu: ElementRef;

  @ViewChild("background")
  background: ElementRef;

  opened : boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.opened = !this.opened;
    (this.opened) ? this.openMenu() : this.closeMenu();
  }

  private openMenu() {
    this.renderer.addClass(this.first.nativeElement, "transition-move-down");
    this.renderer.addClass(this.second.nativeElement, "transition-disappear");
    this.renderer.addClass(this.third.nativeElement, "transition-move-up");
    this.renderer.addClass(this.menu.nativeElement, "menu-opened");
    this.renderer.addClass(this.background.nativeElement, "background-show");
    this.renderer.setStyle(document.body, "overflow", "hidden");
  }

  private closeMenu() {
    this.renderer.removeClass(this.first.nativeElement, "transition-move-down");
    this.renderer.removeClass(this.second.nativeElement, "transition-disappear");
    this.renderer.removeClass(this.third.nativeElement, "transition-move-up");
    this.renderer.removeClass(this.menu.nativeElement, "menu-opened")
    this.renderer.removeClass(this.background.nativeElement, "background-show");
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
}
