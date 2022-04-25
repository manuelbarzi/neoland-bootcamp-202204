//the utils.js is the tool that automate (pt:automatiza) a process of the inheritance between parent and child.
function chainPrototypes(parent, child){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child

}