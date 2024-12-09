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
    // text?.remove()
  })

}

export function displayTimeToPress(this: KeyboardComponent, keyName: string) {
  const text = this.baseGroup
    .append('text')
    .attr('x', 0)
    .attr('y', 0)
    .attr('fill', COLOR)
    .attr('font-size', '10px')
    .attr('font-family', FONT_FAMILY)
    .style('white-space', 'pre')
    .text(createDisplayText(getTimeToPress.call(this, keyName)))
  return text
}
export function createDisplayText(timeToPressValue: number | null) {
  if (isNull(timeToPressValue)) {
    const myText = `This key has no time to press data.
Must use key
`
    return myText;
  }
  return `Time to press: ${timeToPressValue}`;

}

export function getTimeToPress(this: KeyboardComponent, keyName: string) {
  let timeToPress: number | null =
    this.timeToPresses[keyName]
  if (!timeToPress) {
    timeToPress = null;
  }
  return timeToPress;
}
