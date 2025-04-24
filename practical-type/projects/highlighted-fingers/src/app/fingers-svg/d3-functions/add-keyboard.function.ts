

export function addKeyboard(svg: d3.Selection<SVGGElement, unknown, null, undefined>) {
  const keyboardWidth = 200;
  const keyboardHeight = 100;
  const keyboardX = 0;
  const keyboardY = 0;
  const SVG_WIDTH = +svg.attr('width');
  const SVG_HEIGHT = +svg.attr('height');

  const keyboardGroup = svg
    .append('g')
    .attr('id', 'keyboard')
    .attr('transform', `translate(${SVG_WIDTH / 2 - keyboardWidth / 2}, ${SVG_HEIGHT / 2 - keyboardHeight})`);

  keyboardGroup
    .append('rect')
    .attr('width', keyboardWidth)
    .attr('height', keyboardHeight)
    .attr('fill', 'lightgray')
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  // Add keys to the keyboard
  const keyWidth = keyboardWidth / 10;
  const keyHeight = keyboardHeight / 4;

}
