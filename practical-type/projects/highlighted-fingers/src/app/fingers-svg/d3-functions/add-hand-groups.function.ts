

export function addHandGroups(svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) {
  const svgHeight = +svg.attr('height');
  const svgWidth = +svg.attr('width');

  // left hand is left side
  const leftHandGroup = svg
    .append('g')
    .attr('id', 'left-hand-group')
    .attr('transform', `translate(0, 0)`)
    .attr('width', svgWidth / 2)
    .attr('height', svgHeight)




  const rightHandGroup = svg
    .append('g')
    .attr('id', 'right-hand-group')
    .attr('transform', `translate(${svgWidth}, 0)`)
    .attr('width', svgWidth / 2)
    .attr('height', svgHeight)

  return {
    leftHandGroup,
    rightHandGroup
  }
}
