function sequenceList(start, steps, end) {
  this.start = start;
  this.steps = steps;
  this.end = end;
  var arr = [];
  for (var i = this.start; i <= this.end; i = i + this.steps) {
    arr.push(i);
  }

  this.getArr = function () {
    return arr;
  };
  this.setArr = function (list) {
    arr = list;
  };
}

sequenceList.prototype.append = function (val) {
    const list = this.getArr();
  var lastIndex = list[list.length - 1] + this.steps;
  if (lastIndex == val) {
    list.push(val);
    this.setArr(list);
  } else {
    throw new Error("This value it not at sequence");
  }
};

sequenceList.prototype.prepend = function (val) {
  const list = this.getArr();
  var firstIndex = list[0] - this.steps;
  if (firstIndex == val) {
    list.unshift(val);
    this.setArr(list);
  } else {
    throw new Error("This value it not at sequence");
  }
  console.log(list);
};

sequenceList.prototype.dequeue = function () {
  const list = this.getArr();
  list.shift();
  this.setArr(list);
};

sequenceList.prototype.pop = function () {
  const list = this.getArr();
  if (list.length > 1) {
    list.pop();
    this.setArr(list);
  } else {
    throw new Error("The list is empty");
  }
};

var list1 = new sequenceList(0, 2, 10);


// list1.append(12);
// list1.prepend(-2);
list1.dequeue();
list1.pop()


console.log(list1.getArr());
