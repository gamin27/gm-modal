/**モーダルのDOM生成 */
const img_modal = document.querySelectorAll('[modal-image]');
/*activeクラスを付与*/
img_modal.forEach(function(index) {
  index.addEventListener('click', openModal);
});

/**
 * DOM生成の後、activeクラスを追加
 */
function openModal() {
  this.parentElement.appendChild(makeModal(this));
  window.setTimeout(() => {
    this.parentElement.getElementsByClassName('gm-modal')[0].classList.add('active');
  }, 10);
  const el_modal = document.querySelectorAll('.js_close');
  el_modal.forEach(function(index) {
    index.addEventListener('click', closeModal);
  });
}

/**
 * activeクラスの削除の後、DOM削除
 */
function closeModal() {
  let gmModal = document.getElementsByClassName('gm-modal')[0];
  gmModal.classList.remove('active');
  window.setTimeout(() => {
    gmModal.parentNode.removeChild(gmModal);
  }, 500);
}

/**
 * モダールのDOMを生成する
 * @param el_img modal-image属性をもった要素
 */
function makeModal(el_img) {
  let DOM = {
    modal : document.createElement('article'),
    overlay : document.createElement('div'),
    content : document.createElement('div'),
    close : document.createElement('button'),
    divImg : document.createElement('div'),
    img : document.createElement('img'),
  }
  const cl_name = 'gm-modal';
  //.modal
  DOM.modal.classList.add(cl_name);
  //&__overlay
  DOM.overlay.classList.add(cl_name + '__overlay', 'js_close');
  //&__content
  DOM.content.classList.add(cl_name + '__content');
  DOM.divImg .classList.add(cl_name + '__img');
  DOM.close.setAttribute('aria-label', 'Close modal');
  DOM.close.classList.add(cl_name + '__close', 'js_close');
  DOM.close.innerHTML = '&times;';
  //altに値があるなら引き継ぐ
  const altValue = el_img.getAttribute('alt');
  if (altValue!='') {
    DOM.img.alt = altValue;
  }
  let modalImage = el_img.getAttribute('modal-image');
  //属性値が空ならsrcと同じ画像を表示
  DOM.img.setAttribute('src', (modalImage=='')? el_img.getAttribute('src') : modalImage);
  DOM.divImg.appendChild(DOM.img);
  DOM.content.appendChild(DOM.close);
  DOM.content.appendChild(DOM.divImg);
  DOM.modal.append(DOM.overlay);
  DOM.modal.append(DOM.content);

  return DOM.modal;
}