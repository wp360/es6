function loadImg(src) {
  let promise = new Promise(function (resolve, reject) {
    let img = document.createElememt('img')
    img.onload = function() {
      resolve(img)
    }

    img.onerror = function() {
      reject('图片加载失败')
    }

    img.src = src
  })

  return promise
}

// 图片地址
let src = 'https://vuepress.vuejs.org/hero.png'
let result = loadImg(src)

// 调用
result.then(function (img) {
  alert(`width: ${img.width}`)
  return img
}).then(function (img) {
  alert(`height: ${img.height}`)
}).catch(function (err) {
  alert(err)
})