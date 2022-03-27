import {block} from '../utilis'
import {TextBlock} from './blocks'
import {TitleBlock} from './blocks'

export class Sitebar {
   constructor(selector, updateCallBack){
      this.el = document.querySelector(selector)
      this.init()
      this.update = updateCallBack
   }

   init(){
      this.el.insertAdjacentHTML('afterbegin', this.template)
      this.el.addEventListener('submit', this.add.bind(this))
   }

   get template() {
      return [
         block('text'),
         block('title'),
      ].join('')
   }

   add(event){
      event.preventDefault()
      const type = event.target.name
      const value = event.target.value.value
      const styles = event.target.styles.value


      let newBlock = type === 'text'
         ? newBlock = new TextBlock(value, {styles})
         : newBlock = new TitleBlock(value, {styles})


      this.update(newBlock)

      event.target.value.value = ''
      event.target.styles.value = ''
      
   }
}

