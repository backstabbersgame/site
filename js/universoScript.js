function changeStory(){
  let story = document.getElementById('storyselect');

  for(var key in level){
    let newOption = new Option(level[key], key);
    cardSelect.add(newOption);
  }
};

function changeStory(){
  document.getElementById('storyDisplay').src = 'universo/' +  document.getElementById('storyselect').value + '.html';
};