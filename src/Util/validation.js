const validation = (condition, element) => {
  // Приводим в порядок строку
  let value = element.value.trim().toLowerCase();
  let parent = element.parentElement;
  if(condition.test(value)) {
    if(parent.classList.contains('fail')){
      parent.classList.remove('fail');
    }
    parent.classList.add('success');
  }
  else {
    if(parent.classList.contains('success')){
      parent.classList.remove('success');
    }
    parent.classList.add('fail');
  }
}

export {validation};