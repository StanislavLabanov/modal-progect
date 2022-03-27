export class Site{
   constructor(selector){
      this.el = document.querySelector(selector)
   }

   render(modal){
      this.el.innerHTML = ''
      modal.forEach(block => { 
         this.el.insertAdjacentHTML('beforeend', block.toHtml())
      })
   }
}