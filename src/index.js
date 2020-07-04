// 面向对象实例
class jQuery {
  constructor(selector) {
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(selector))
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i ++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }

  append(node) {
    // ...
  }

  addClass(name) {
    // ...
  }

  html(data) {
    // ...
  }

  // 省略N个API
}

window.$ = function(selector) {
  // 工厂模式
  return new jQuery(selector)
}

// 获取p标签
var $p = $('p')
console.log($p)
console.log($p.addClass)