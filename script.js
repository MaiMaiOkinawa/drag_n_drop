const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)

}

function dragStart() {
  this.className += ' hold'
  //Clears up the bg in the box as you drag out the image
  setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(event) {
  //Switch off the default setting
  event.preventDefault()
  //in the dragover event handler for the target container, we call event.preventDefault(), which enables it to receive drop events.
}

function dragEnter(event) {
  //Switch off the default setting
  event.preventDefault()
  //Add hovered class
  this.className += ' hovered'
}

function dragLeave() {
   //Clear image after leaving
  this.className = 'empty'
}

function dragDrop() {
  //Clear image before dropping an image
  this.className = 'empty'
  this.append(fill)
}

/* 
<<--- dragenter event --->>
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragenter_event
*/

/* 
<<--- dragover event --->>
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event
*/

