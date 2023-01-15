export class Lab11 {
  constructor(param1) {
    console.log("lab11 constructor");
  }

 

  testDefaultParameters(param1, param2=100){
    this.p1 = param1;
    this.p2 = param2;
    console.log("TestDefaultParameters: "+this.p1+", "+this.p2);
    let jsonObject = {
        first: param1,
        second: param2,
    };
    return jsonObject;
  }
  testTemplateLiterals(firstName, middleName, lastName){
    return `${firstName},${middleName},${lastName}`;
  }
  testMultilineStrings(){
    return `This is
a
    test of
              multiline strings`;
  }
  testSortWithArrowFunction(arr){
    return arr.sort((n,i) => i-n);
  }
}