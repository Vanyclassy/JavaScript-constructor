export class Site {
    constructor(selector) {
        this.$block = document.querySelector(selector)
    }

    render(model) {
        this.$block.innerHTML = ''
        model.forEach(el => {
            this.$block.insertAdjacentHTML('beforeend', el.toHTML())
        })
    }
}