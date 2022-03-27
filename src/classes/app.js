import {Site} from './site'
import {Sitebar} from './sitebar'

export class App {
   constructor(modal){
      this.modal = modal

   }

   init(){
      const site = new Site('#site')

      site.render(this.modal)

      const updateCallBack = newBlock => {
         this.modal.push(newBlock)
         site.render(this.modal)
      }

      new Sitebar('#panel', updateCallBack)
   }
}