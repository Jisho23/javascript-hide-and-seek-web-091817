function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let deepest = document.getElementById('grand-node')
  let next = deepest.children[0]
  while (next){
    deepest = next
    next = deepest.children[0]
  }
  return deepest;
}

function increaseRankBy(num){
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (const aList of rankedLists){
    let listOfChildren = aList.children;
    for(const child of listOfChildren){
      child.innerHTML = parseInt(child.innerHTML)+ num;
    }
  }
}
