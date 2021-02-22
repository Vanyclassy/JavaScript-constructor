import { block } from '../utils'
import { TextBlock, TitleBlock } from './blocks'

export class SideBar {
    constructor(selector, updateCallback) {
        this.$block = document.querySelector(selector)
        this.update = updateCallback

        this.init()
    }

    init() {
        this.$block.insertAdjacentHTML('afterbegin', this.template)
        this.$block.addEventListener('submit', this.addBlock.bind(this))
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const newBlock = type === 'text' ?
            new TextBlock(value, { styles }) :
            new TitleBlock(value, { styles })

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}