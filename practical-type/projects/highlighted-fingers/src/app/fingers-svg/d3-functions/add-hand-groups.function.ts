

export function addHandGroups(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
  const svgHeight = +svg.attr('height');
  const svgWidth = +svg.attr('width');

  // left hand is left side
  const leftHandGroup = svg
    .append('g')
    .attr('id', 'left-hand-group')
    .attr('transform', `translate(0, ${0})`)
    .attr('width', svgWidth / 2)
    .attr('height', svgHeight)

  leftHandGroup.append('rect').attr('width', svgWidth / 2).attr('height', svgHeight).attr('fill', 'green').attr('stroke', 'black').attr('stroke-width', 1);



  const rightHandGroup = svg
    .append('g')
    .attr('id', 'right-hand-group')
    .attr('transform', `translate(${svgWidth / 2}, ${0})`)
    .attr('width', svgWidth / 2)
    .attr('height', svgHeight)

  rightHandGroup.append('rect').attr('width', svgWidth / 2).attr('height', svgHeight).attr('fill', 'blue').attr('stroke', 'black').attr('stroke-width', 1);

  return {
    leftHandGroup,
    rightHandGroup
  }
}
