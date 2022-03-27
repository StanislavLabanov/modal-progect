import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextBlock, ColumsBlock} from './classes/blocks'

const text = `
Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
`

export const modal = [
   new TitleBlock('Конструктор сайтов на JavaScript', {
      tag: 'h1',
      styles:{
         background: 'linear-gradient(to right, #ff0099, #493240)',
         color:'#fff',
         'text-align': 'center',
         padding: '1.5rem',
      }
   }),
   new ImageBlock(image, {
      styles: {
         padding: '2rem 0',
         display: 'flex',
         'justify-content': 'center'
      },
      imageStyles: {
         width: '500px',
         height: 'auto'
      },
      alt: 'Это картинка'
   }),
   new ColumsBlock([
      'Quickly design and customize responsive mobile-first sites with Bootstrap',
      'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular',
      'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular'
      ],{
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      } 
   }),
   new TextBlock(text, {
      styles: {
         background: 'linear-gradient(to left, #f2994a, #f2c94c)',
         padding: '1rem',
         'font-weight': 'bold'
      }
   })
   
]




