import {row, col, css} from '../utilis'

class Block{
   constructor(value, options){
      this.value = value
      this.options = options
   }
   toHtml(){
      throw new Error('Метод toHTML должен быть реализован')
   }
}


export class TitleBlock extends Block{
   constructor(value, options){
      super(value, options)
   }
   toHtml(){
      const tag = this.options.tag
      const styles = this.options.styles
      return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
   }
}


export class ImageBlock extends Block{
   constructor(value, options){
      super(value, options)
   }
   toHtml(){
      const imageStyles = this.options.imageStyles
      const alt = this.options.alt
      const styles = this.options.styles
      return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`, css(styles))
   }
}


export class ColumsBlock extends Block{
   constructor(value, options){
      super(value, options)
   }
   toHtml(){
      const html = this.value.map(item => col(item))
      return row(html.join(''), css(this.options.styles))
   }
}


export class TextBlock extends Block{ 
   constructor(value, options){
      super(value, options)
   }
   toHtml(){
      return row(col(`<p>${this.value}</p>`), css(this.options.styles))
   }
}