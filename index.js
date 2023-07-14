function writeCards(names, eventName) {
  var messages = [];
  for (var i = 0; i < names.length; i++) {
    var message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }
  return messages;
}

var names = ["Charlie", "Samip", "Ali"];
var eventName = "birthday";
var result = writeCards(names, eventName);
console.log(result);

// second portion to be tested

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);
