# markDOM

![todo-demo](./screenshots/todoapp-demo.gif)

<a target='_blank' href='http://sunnygwong.com/markDOM/'>Live Demo</a>

markDOM is a Javascript library used to simplify client scripting of HTML. A todo-app was built using markDOM to highlight it's ability in manipulating the DOM.

markDOM has many features to manipulate HTML. Methods include adding/removing event listeners,

``` javascript

on(eventType, callback){
  this._eachElement(el => {
    el.addEventListener(eventType, callback);
    el[eventType] = callback;
  });
  return this;
}

off(eventType){
  this._eachElement(el => {
    el.removeEventListener(eventType, el[eventType]);
  });
  return this;
}

```

adding/removing class

``` javascript

addClass(className){
  this._eachElement( el => {
    el.classList.add(className);
  });
  return this;
}

removeClass(className){
  this._eachElement( el => {
    el.classList.remove(className);
  });
  return this;
}

```

DOM traversal

``` javascript
children(){
  let childArray = [];
  this._eachElement( parentNode => {
    Array.from(parentNode.children).forEach(child => {
      if(!childArray.includes(child)){
        childArray.push(child);
      }
    });
  });
  return new DOMNodeCollection(childArray);
}

parent(){
  let parentArray = [];
  this._eachElement(childNode => {
    if(!parentArray.includes(childNode.parentNode)){
      parentArray.push(childNode.parentNode);
    }
  });
  return new DOMNodeCollection(parentArray);
}

```

markDOM can also perform ajax requests which in turn return Javascript promises. 
