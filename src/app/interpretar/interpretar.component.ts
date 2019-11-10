import { Component, OnInit } from "@angular/core";
import { HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from "@angular/animations";

@Component({
  selector: "app-interpretar",
  templateUrl: "./interpretar.component.html",
  styleUrls: ["./interpretar.component.scss"],
  animations: [
    trigger("photoState", [
      state(
        "move",
        style({
          transform: "translateX(-100%) "
        })
      ),
      state(
        "enlarge",
        style({
          transform: "scale(1.5) translateY(15%) translateX(14%)",

          position: "absolute"
        })
      ),
      state("enshort", style({})),
      state(
        "spin",
        style({
          transform: "rotateY(180deg) rotateZ(90deg) translateX(15%)"
        })
      ),
      transition("enshort => enlarge", [animate("0.5s")]),
      transition("enlarge => enshort", [animate("0.5s")]),
      transition("* => *", [animate("0.5s")])
    ])
  ]
})
export class InterpretarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isZoom = 0;

  toggleZoom() {
    this.isZoom = 1;
  }
  toggleRotate() {
    this.isZoom = 2;
  }
  toggleReset() {
    this.isZoom = 0;
  }
}
