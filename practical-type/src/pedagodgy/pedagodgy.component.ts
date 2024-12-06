import {Component} from '@angular/core';
const PEDAGODGY_TEXT = `
1. Using the same sequence of keys.
   - Makes speed measurements more meaningful.
   - Allows for fair competition between typists.
   - Focuses the mind on the key strokes and improves mind, muscle memory, and myelination.
   - Should result in higher typing speeds due to the lack of time wasted on determining the next key to press.
2. Non readable text is used to focus the mind on the key strokes and not the content.
3. Focused on young learners, but can be used by all ages.
4. Isolate different types of keys to focus on specific areas of improvement.
`;

@Component({
  standalone: true,
  selector: 'practical-pedagodgy',
  imports: [],
  templateUrl: './pedagodgy.component.html',
  styleUrl: './pedagodgy.component.scss'
})
export class PedagodgyComponent {
  pedagodgyText = PEDAGODGY_TEXT;

}
