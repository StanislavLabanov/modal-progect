
export function row (content, styles){
   return `<div class="row" style="${styles}">${content}</div>`
}

export function col (content){
   return `<div class="col-sm">${content}</div>`
}

export function css(styles){
   if(typeof styles === 'string') return styles
   const key = []
   for(let keys in styles) key.push(keys + ': ' + styles[keys])
   return key.join('; ')
}


export function block(type){
   return `
   <form name="${type}">
      <h5>${type}</h5>
         <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value" style="margin-bottom: 20px">  
         </div>
         <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles" style="margin-bottom: 20px">  
         </div>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
   </form>
   <hr />
   `
}