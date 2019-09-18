import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: "app-viz1",
  templateUrl: "./viz1.component.html",
  styleUrls: ["./viz1.component.scss"]
})
export class Viz1Component implements OnInit {
  height: number = 500;
  pointCount: number = 100;
  radius: number = 8;
  svg: d3.Selection<SVGSVGElement, any, HTMLElement, any>;
  width: number = 700;

  constructor() {
    console.log("constructor()");
    this.svg = this.selectVisual();
  }

  ngOnInit() {
    console.log("ngOnInit()");
    if (this.svg.size() === 0) {
      this.svg = this.selectVisual();
    }
    this.svg.attr("width", this.width).attr("height", this.height);

    for (let i = 0; i < this.pointCount; i++) {
      this.svg
        .append("circle")
        .attr("r", this.radius)
        .attr(
          "cx",
          this.radius + Math.random() * (this.width - 2 * this.radius)
        )
        .attr(
          "cy",
          this.radius + Math.random() * (this.height - 2 * this.radius)
        )
        .attr("fill", d3.interpolateRainbow(i / this.pointCount))
        .attr("opacity", 0.6);
    }
  }

  selectVisual(): d3.Selection<SVGSVGElement, any, HTMLElement, any> {
    let visual = d3.select<SVGSVGElement, any>("#visual-1");
    console.log(`selectVisual(), found ${visual.size()} matching elements`);
    return visual;
  }
}
