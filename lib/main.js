import DOMNodeCollection from './dom_node_collection.js';

const $m = selector => {

  if(typeof selector === 'string'){
    const nodeList = document.querySelectorAll(selector);
    return new DOMNodeCollection(Array.from(nodeList));
  } else if (selector instanceof HTMLElement){
    return new DOMNodeCollection([selector]);
  } else if (typeof selector === 'function'){
    document.addEventListener('DOMContentLoaded', selector);
  }
};

window.$m = $m;

$m.ajaxCore = function(){
  return {
    type: 'GET',
    url: window.location.href,
    success(){
      console.log('successful');
    },
    fail(){
      console.log('fail');
    }
  };
};

$m.extend = function(...JSObjects){
  const extendObj = {};
  JSObjects.forEach( object => {
    object.forEach( key => {
      extendObj[key] = object[key];
    });
  });
  return extendObj;
};

$m.ajax = function(options){
};


export default $m;
