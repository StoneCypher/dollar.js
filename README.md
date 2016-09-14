## dollar.js
jQuery like selectors without using jQuery

## Example

#### HTML
    <ul class="test">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>

#### Selector (Single Element)
    $('.test');
    
#### Selector (Multiple Elements)
    $('.test li'); //returns Array of li elements
    
#### Complex selectors
    $('.test li:first-child + li'); //returns element