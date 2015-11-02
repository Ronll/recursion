// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
    var result = [];
    var classNames = className.split(' ');

    checkClass(document);

    function checkClass(obj){
        var children = obj.children;
        for(var i = 0; i < children.length ; i++){
            if( children[i].classList.contains(className)){
                result.push(children[i]);
            }
                checkClass(children[i]);
        }
    }
    return result;
};
