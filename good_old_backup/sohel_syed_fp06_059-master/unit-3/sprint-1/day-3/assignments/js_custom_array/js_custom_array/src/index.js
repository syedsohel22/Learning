function MyArray() {
  // Write your code here
  let arr = Object.create(MyArray.prototype);
  Object.defineProperty(arr, "length", {
    value: 0,
    enumberble: false,
    writable: true,
  });
  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length++;
  }
  return arr;
}

MyArray.prototype.push = function (e) {
  this[this.length] = e;
  this.length++;
  return this.length;
};

MyArray.prototype.pop = function () {
  this.length--;
  var pel = this[this.length];
  delete this[this.length];
  return pel;
};

MyArray.prototype.map = function (cb) {
  let arr1 = new MyArray();
  for (let i = 0; i < this.length; i++) {
    arr1.push(cb(this[i], i, this));
  }
  return arr1;
};
MyArray.prototype.filter = function (cb) {
  let arr = new MyArray();
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};
// Do not change this
export default MyArray;
