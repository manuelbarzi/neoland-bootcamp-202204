console.log('%cSmart Components v1', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')


function Component(template) {
    const temp = document.createElement('div')
    temp.innerHTML = template
    this.container = temp.firstChild
}