import * as d3 from 'd3';
import {SVG_BACKGROUND_COLOR} from '../finger-svg.constants';

export function insertSVG(hostElement: HTMLElement) {

  hostElement.innerHTML = '';

  const svg = d3.select(hostElement)
    .append('svg');

  const {svgWidth, svgHeight} = resizeSVGtoHost(hostElement, svg);

  svg
    // .style('border', '1px solid black')
    .style('background-color', 'none')
  return svg
}

function resizeSVGtoHost(hostElement: HTMLElement, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
  const width = hostElement.clientWidth;
  const height = hostElement.clientHeight;

  svg.attr('width', width)
    .attr('height', height);
  svg.attr('viewBox', `0 0 ${width} ${height}`)

  return {
    svgWidth: width,
    svgHeight: height
  }

}
