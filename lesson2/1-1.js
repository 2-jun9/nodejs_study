function first() {
  second();
  console.log('첫 번째');
}

function second(){
  second();
  console.log('두 번째'
  );
}

function third(){
  console.log('세 번째');
}

first();