'use strict';
  var slideShow = (function () {
  return function (selector, config) {
  var
  _slider = document.querySelector(selector),  
  _sliderContainer = _slider.querySelector('.design-mansecus'),  
  _sliderItems = _slider.querySelectorAll('.design-mansecu'),  
  _sliderControls = _slider.querySelectorAll('.educas-nsution'),  
  _currentPosition = 0,
  _transformValue = 0,
  _transformStep = 100,
  _itemsArray = [],  
  _timerId,
  _indicatorItems,
  _indicatorIndex = 0,
  _indicatorIndexMax = _sliderItems.length - 1,
  _stepTouch = 50,
  _config = {
  isAutoplay: false,
  directionAutoplay: 'next',  
  delayAutoplay: 2000,  
  isPauseOnHover: true  
  };

  for (var key in config) {
  if (key in _config) {
  _config[key] = config[key];
  }
  }

  for (var i = 0, length = _sliderItems.length; i < length; i++) {
  _itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });
  }

  var position = {
  getItemIndex: function (mode) {
  var index = 0;
  for (var i = 0, length = _itemsArray.length; i < length; i++) {
  if ((_itemsArray[i].position < _itemsArray[index].position && mode === 'min') || (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')) {
  index = i;
  }
  }
  return index;
  },
  getItemPosition: function (mode) {
  return _itemsArray[position.getItemIndex(mode)].position;
  }
  };

  var _move = function (direction) {
  var nextItem, currentIndicator = _indicatorIndex;;
  if (direction === 'next') {
  _currentPosition++;
  if (_currentPosition > position.getItemPosition('max')) {
  nextItem = position.getItemIndex('min');
  _itemsArray[nextItem].position = position.getItemPosition('max') + 1;
  _itemsArray[nextItem].transform += _itemsArray.length * 100;
  _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
  }
  _transformValue -= _transformStep;
  _indicatorIndex = _indicatorIndex + 1;
  if (_indicatorIndex > _indicatorIndexMax) {
  _indicatorIndex = 0;
  }
  } else {
  _currentPosition--;
  if (_currentPosition < position.getItemPosition('min')) {
  nextItem = position.getItemIndex('max');
  _itemsArray[nextItem].position = position.getItemPosition('min') - 1;
  _itemsArray[nextItem].transform -= _itemsArray.length * 100;
  _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
  }
  _transformValue += _transformStep;
  _indicatorIndex = _indicatorIndex - 1;
  if (_indicatorIndex < 0) {
  _indicatorIndex = _indicatorIndexMax;
  }
  }
  _sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';
  _indicatorItems[currentIndicator].classList.remove('kunovenas');
  _indicatorItems[_indicatorIndex].classList.add('kunovenas');
  };

  var _moveTo = function (index) {
  var i = 0, direction = (index > _indicatorIndex) ? 'next' : 'prev';
  while (index !== _indicatorIndex && i <= _indicatorIndexMax) {
  _move(direction);
  i++;
  }
  };

  var _startAutoplay = function () {
  if (!_config.isAutoplay) {
  return;
  }
  _stopAutoplay();
  _timerId = setInterval(function () {
  _move(_config.directionAutoplay);
  }, _config.delayAutoplay);
  };

  var _stopAutoplay = function () {
  clearInterval(_timerId);
  };

  var _addIndicators = function () {
  var indicatorsContainer = document.createElement('ol');
  indicatorsContainer.classList.add('coevened-ucadional');
  for (var i = 0, length = _sliderItems.length; i < length; i++) {
  var sliderIndicatorsItem = document.createElement('li');
  if (i === 0) {
  sliderIndicatorsItem.classList.add('kunovenas');
  }
  sliderIndicatorsItem.setAttribute("data-slide-to", i);
  indicatorsContainer.appendChild(sliderIndicatorsItem);
  }
  _slider.appendChild(indicatorsContainer);
  _indicatorItems = _slider.querySelectorAll('.coevened-ucadional > li')
  };

  var _isTouchDevice = function () {
  return !!('ontouchstart' in window || navigator.maxTouchPoints);
  };

  var _setUpListeners = function () {
  var _startX = 0;
  if (_isTouchDevice()) {
  _slider.addEventListener('touchstart', function (e) {
  _startX = e.changedTouches[0].clientX;
  _startAutoplay();
  });
  _slider.addEventListener('touchend', function (e) {
  var
  _endX = e.changedTouches[0].clientX,
  _deltaX = _endX - _startX;
  if (_deltaX > _stepTouch) {
  _move('prev');
  } else if (_deltaX < -_stepTouch) {
  _move('next');
  }
  _startAutoplay();
  });
  } else {
  for (var i = 0, length = _sliderControls.length; i < length; i++) {
  _sliderControls[i].classList.add('educas-nsution_show');
  }
  }
  _slider.addEventListener('click', function (e) {
  if (e.target.classList.contains('educas-nsution')) {
  e.preventDefault();
  _move(e.target.classList.contains('educas-nsution_next') ? 'next' : 'prev');
  _startAutoplay();
  } else if (e.target.getAttribute('data-slide-to')) {
  e.preventDefault();
  _moveTo(parseInt(e.target.getAttribute('data-slide-to')));
  _startAutoplay();
  }
  });
  document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "hidden") {
  _stopAutoplay();
  } else {
  _startAutoplay();
  }
  }, false);
  if (_config.isPauseOnHover && _config.isAutoplay) {
  _slider.addEventListener('mouseenter', function () {
  _stopAutoplay();
  });
  _slider.addEventListener('mouseleave', function () {
  _startAutoplay();
  });
  }
  };

  _addIndicators();
  _setUpListeners();
  _startAutoplay();

  return {
  next: function () {
  _move('next');
  },
   
  left: function () {
  _move('prev');
  },
   
  stop: function () {
  _config.isAutoplay = false;
  _stopAutoplay();
  },
   
  cycle: function () {
  _config.isAutoplay = true;
  _startAutoplay();
  }
  }
  }
  }());

  slideShow('.pedenus-slaidera', {
  isAutoplay: true
  });


  /////////////////////////////////////////////////////////////////////////////////



  window.onload = look("link1"),look("link1"),look("link2"),look("link3"),look("link4"),look("link5"),look("link6"),izmeVid('redblock1'),izmVidMin('redMin1');


      function look(elemId) {
        var elems = document.getElementById(elemId);
        if (elems.style.display === "none") {elems.style.display = "block"
          } else {elems.style.display = "none"}
      }



  function izmeVid(elemID){
      var elem = document.getElementById(elemID);
        elem.style.visibility === "hidden" ?
          elem.style.visibility = "visible" : elem.style.visibility = "hidden";
      }
      
function izmVidMin(elemID){
      var elem = document.getElementById(elemID);
        elem.style.visibility === "visible" ?
          elem.style.visibility = "hidden" : elem.style.visibility = "visible";
      }

      
      function rem(elemId) {
        var elems = document.getElementById(elemId);
        var elemmso = document.getElementById('#two');
        if (elems.style.display === "none") {elems.style.display = "block"
          } else {elems.style.width = 100 + "%"; elemmso.style.display = "none"}
      }