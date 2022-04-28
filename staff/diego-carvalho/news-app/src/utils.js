//the utils.js is the tool that automate (pt:automatiza) a process of the inheritance between parent and child.
function chainPrototypes(parent, child){
    //its means child prototype was created from the parents.
    child.prototype = Object.create(parent.prototype)
     //..but the child (here) would be a independent constructor.
    child.prototype.constructor = child

}