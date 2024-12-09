import {isNull} from "lodash";
import {KeyboardComponent} from "./keyboard.component";
import {COLOR, FONT_FAMILY} from "./keyboard.constants";

export function handleKeyHover(this: KeyboardComponent, keyName: string, keyGroup: d3.Selection<SVGGElement, unknown, null, any>) {
  let text: d3.Selection<SVGTextElement, unknown, null, undefined> | null = null;

  keyGroup.on('mouseover', () => {
    text =
      displayTimeToPress.call(this, keyName)
    console.log('keyName', keyName);
    console.log('mouseover');
  })

  keyGroup.on('mouseout', () => {
    text?.remove()
  })

}


export function displayTimeToPress(this: KeyboardComponent, keyName: string) {
  const hoverGroup = this.svg.append('g')
    .attr('transform', `translate(0, 20)`)

  const background =
    hoverGroup.append('rect')
  // .attr('width', 100)
  // .attr('height', 30)
  // .attr('fill', 'white')

  const text = hoverGroup
    .append('text')
    .attr('fill', COLOR)
    .attr('x', 0)
    .attr('y', 0)
    .attr('font-size', '20px')
    .attr('font-family', FONT_FAMILY)
    .text(createDisplayText(getTimeToPress.call(this, keyName)))

  const {width, height} = text.node()?.getBBox() || {width: 0, height: 0}
  background
    .attr('width', width)
    .attr('height', height + 10)
    // .attr('fill', 'black')
    .attr('fill', 'black')
    .attr('x', 0)
    .attr('y', 0)
    .attr('transform', `translate(0, -20)`)
  background.raise;

  return text
}
export function createDisplayText(timeToPressValue: number | null) {
  if (isNull(timeToPressValue)) {
    const myText = `NO DATA. Must use key as second key in sequence to have valid data.
`
    return myText;
  }
  return `Time to press: ${timeToPressValue} seconds`

}

export function getTimeToPress(this: KeyboardComponent, keyName: string) {
  let timeToPress: number | null =
    this.timeToPresses[keyName]
  if (!timeToPress) {
    timeToPress = null;
  }
  return timeToPress;
}
