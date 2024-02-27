// YT Subscribe Button Project
function subscribeBtn() {
  const btnElement = document.querySelector('.js-btn');
  if (btnElement.innerText === 'Subscribe') {
    btnElement.innerHTML = 'Subscribed';
  } else {
    btnElement.innerHTML = 'Subscribe';
  }
}