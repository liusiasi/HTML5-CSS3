var _object = {
  get: "pdd",
  func1() {
    var self = this;
    setTimeout(() => {
     (function(){
       console.log(`3:${this.get}`);
       console.log(`4:${this.get}`);
     })() 
    });
    console.log(`1:${this.get}`);
    console.log(`2:${this.get}`);
  },
  func2:()=>{
    console.log(`5:${this.get}`);
  }
}
_object.func1();
_object.func2();