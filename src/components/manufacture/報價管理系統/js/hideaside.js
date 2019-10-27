[...document.getElementById('hide').children].forEach((child, i) => {
    child.addEventListener('mouseover', () => {
        [...document.getElementsByClassName('hidden-menu')].forEach((that) => {
            that.style.display = 'none'
        })
        document.getElementById(`menu${i+1}`).style.display = 'block'
    })
});
this.addEventListener('click', () => {
    if (event.toElement.hide !== 'hide') {
        [...document.getElementsByClassName('hidden-menu')].forEach((that) => {
            that.style.display = 'none'
        })
    }
})