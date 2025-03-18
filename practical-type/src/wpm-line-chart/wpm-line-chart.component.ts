/**
  * Angular Material Yellow
  */
export const YELLOW = 'rgb(255, 235, 59)'
export const CHART_POINT_LIMIT = 7;
export const AXIS_WIDTH = 1
export const WIDTH = 500
export const HEIGHT = 500
export const PADDING = 70
import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {WordsPerMinute} from '../scores/scores.service';
import {JsonPipe} from '@angular/common';
import * as d3 from 'd3';
import {GlobalEventEmitter, SEND_RUN_DATA} from '../eventz/global.event-emitter'

// const MOCK_DATA = [
//   80, 30, 20, 40, 53, 36, 73, 38, 39, 11, 110, 19, 33, 84, 115
// ]
const MOCK_DATA = [
  200, 400
]

@Component({
  selector: 'practical-wpm-line-chart',
  standalone: true,
  imports: [JsonPipe,],
  templateUrl: './wpm-line-chart.component.html',
  styleUrl: './wpm-line-chart.component.scss'
})
export class WpmLineChartComponent {

  @ViewChild('chartContainer') chartContainer: ElementRef;

  sendRunEventRegistered = false;
  constructor() {

    if (!this.sendRunEventRegistered) {
      GlobalEventEmitter.on(SEND_RUN_DATA, (data) => {
        setTimeout(() => {
          this.createChart()
        }, 1000)
      })
      this.sendRunEventRegistered = true

    }

  }
  @Input() title: string = 'Words Per Minute'
  @Input() data: WordsPerMinute[] = MOCK_DATA
  ngOnChanges() {
    console.log('data changed', this.data)

    this.removeChart()
    this.createChart()
  }
  removeChart() {
    if (this.chartContainer && this.chartContainer.nativeElement) {
      this.chartContainer.nativeElement.innerHTML = ''

    }
  }

  ngAfterViewChecked() {
    this.createChart()
  }
  createChart() {
    this.removeChart()
    // this.data = MOCK_DATA

    if (!this.data || !this.chartContainer) return;

    if (this.data.length > CHART_POINT_LIMIT) {
      const end = this.data.length
      const start = end - CHART_POINT_LIMIT
      this.data = this.data.slice(start, end)
    }
    this.data = this.data.filter((d) => typeof d === 'number')

    const svgContainer =
      d3.select(this.chartContainer.nativeElement)

    const svg = svgContainer.append('svg')
    const mainGroup =
      svg
        .attr('width', 500)
        .attr('height', 500)
        .append('g')

    // svg.style('border', '1px solid white')

    let xAxis = d3.scaleLinear()
      .domain([0, this.data.length])
      .range([0, WIDTH - PADDING * 2])


    let xAxisGroup = mainGroup.append('g')
      .attr('transform', `translate(${PADDING}, ${HEIGHT - PADDING})`)
      .call(d3.axisBottom(xAxis))

    let xAxisPath = xAxisGroup.select('path')
    let d = xAxisPath.attr('d')
    d = d.replace(/6/g, '0')
    xAxisPath.attr('d', d)
    xAxisPath.attr('stroke', YELLOW)

    xAxisGroup.selectAll('.tick').remove()

    let max = d3.max(this.data)
    //@ts-ignore
    let yAxis;
    if (typeof max === 'number') {
      yAxis = d3.scaleLinear()
        .domain([0, max])
        .range([HEIGHT - PADDING, PADDING])
      let yAxisGroup = mainGroup.append('g')
        .attr('transform', `translate(${PADDING}, 0)`)
        .call(d3.axisLeft(yAxis))



      yAxisGroup.selectAll('.tick').remove()
      // debugger;
      let yAxisPath =
        yAxisGroup.select('path')
      let d = yAxisPath.attr('d')
      d = d.replace(/6/g, '0')
      yAxisPath.attr('d', d)
      yAxisPath.attr('stroke', YELLOW)

    }

    let path = mainGroup.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', YELLOW)
      .attr('stroke-width', 2)
      //@ts-ignore
      .attr('d', d3.line()
        .curve(d3.curveMonotoneX)
        .x((d, i) => xAxis(i))
        //@ts-ignore
        .y((d) => yAxis(d))
      )



    path
      .attr('transform', `translate(${PADDING}, 0)`)


    // add points
    mainGroup.selectAll("dot")
      .data(this.data)
      .enter()
      //add text saying the wpm value
      .append('text')
      .text((d: number) => {
        return d.toFixed(0)
      })
      //@ts-ignore
      .attr('x', (d, i) => xAxis(i) + PADDING)
      //@ts-ignore
      .attr('y', (d) => yAxis(d) - 10)
      .attr('fill', YELLOW)
      .attr('font-size', '14px')
      .attr('text-anchor', 'middle')
      .attr('letter-spacing', '1px')
      .attr('font-weight', 'light')
      .attr('stroke', YELLOW)
    // .attr("cx", function (d, i) {return xAxis(i) + PADDING})
    //@ts-ignore
    // .attr("cy", function (d) {return yAxis(d)})
    // .attr("r", 1.2)
    // .attr('fill', YELLOW)
    // .attr('stroke', YELLOW)
    // .attr('stroke-width', 1.5)

    //add title
    //
    const title =
      mainGroup.append('text')
        .attr('x', WIDTH / 2)
        .attr('y', PADDING / 3)
        .attr('text-anchor', 'middle')
        .attr('font-size', '20px')
        .attr('fill', YELLOW)
        .text(this.title)


    // add character spacing
    title.attr('letter-spacing', '2px')
  }

}


