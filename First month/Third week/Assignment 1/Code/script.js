var linkedListObject = {
  data: [{ value: 1 }, { value: 3 }, { value: 4 }, { value: 5 }],
  push: function (val) {
    this.data.forEach((elem) => {
      if (elem.value == val) {
        throw new Error("Repeated Value");
      } else if (elem.value > val) {
        throw new Error("This Value is smaller than last value in list");
      }
    });
    var newObj = { value: val };
    this.data.push(newObj);
  },
  insert: function (index, val) {
    currentIndex = this.data[index].value;
    preIndex = this.data[index - 1].value;
    if (val < currentIndex && val > preIndex) {
      var newObj = { value: val };
      this.data.splice(index, 0, newObj);
    } else {
      throw new Error("This value not suitable in this place");
    }
  },
  pop: function () {
    this.data.pop();
  },
  remove: function (val) {
    var arr = [];
    for (var elem in this.data) {
      arr.push(this.data[elem].value);
      if (this.data[elem].value == val) {
        this.data.splice(elem, 1);
      }
    }
    if (!arr.includes(val)) {
      throw new Error("This value not founded");
    }
  },
  dequeue:function(){
    this.data.shift()
  }
};

// linkedListObject.push(3);
// linkedListObject.insert(1,2);
// linkedListObject.pop()
// linkedListObject.remove(5)
// linkedListObject.dequeue()
// linkedListObject.desc = "This is linked lis object"
console.log(linkedListObject);
