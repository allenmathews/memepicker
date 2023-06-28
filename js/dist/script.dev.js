"use strict";

var catsData = [{
  emotionTags: ["moody"],
  isGif: false,
  image: "angry.jpeg",
  alt: "A cat looking moody"
}, {
  emotionTags: ["moody", "insomniac"],
  isGif: false,
  image: "angry2.jpeg",
  alt: "A cat looking moody"
}, {
  emotionTags: ["moody"],
  isGif: false,
  image: "angry3.jpeg",
  alt: "A cat looking moody"
}, {
  emotionTags: ["confused", "sad"],
  isGif: false,
  image: "confused.jpeg",
  alt: "A cat looking confused"
}, {
  emotionTags: ["dominant", "moody"],
  isGif: false,
  image: "dominant.jpeg",
  alt: "A cat looking dominant"
}, {
  emotionTags: ["happy", "relaxed"],
  isGif: false,
  image: "happy.jpeg",
  alt: "A cat looking happy"
}, {
  emotionTags: ["hungry"],
  isGif: false,
  image: "hungry.jpeg",
  alt: "A cat looking hungry"
}, {
  emotionTags: ["hungry"],
  isGif: false,
  image: "hungry1.jpeg",
  alt: "A cat looking hungry"
}, {
  emotionTags: ["insomniac"],
  isGif: false,
  image: "insomnia.jpeg",
  alt: "A cat looking insomniac"
}, {
  emotionTags: ["insomniac"],
  isGif: false,
  image: "insomnia1.jpeg",
  alt: "A cat looking insomniac"
}, {
  emotionTags: ["relaxed"],
  isGif: false,
  image: "lazy.jpeg",
  alt: "A cat looking lazy"
}, {
  emotionTags: ["scared"],
  isGif: false,
  image: "nervous.jpeg",
  alt: "A cat looking nervous"
}, {
  emotionTags: ["sad"],
  isGif: false,
  image: "sad.jpeg",
  alt: "A cat looking sad"
}, {
  emotionTags: ["sad", "moody"],
  isGif: false,
  image: "sad1.jpeg",
  alt: "A cat looking sad"
}, {
  emotionTags: ["moody"],
  isGif: true,
  image: "angry.gif",
  alt: "A cat looking moody"
}, {
  emotionTags: ["moody"],
  isGif: true,
  image: "angry2.gif",
  alt: "A cat looking angry"
}, {
  emotionTags: ["confused"],
  isGif: true,
  image: "confused2.gif",
  alt: "A cat looking confused"
}, {
  emotionTags: ["dominant"],
  isGif: true,
  image: "dominant.gif",
  alt: "A cat looking dominant"
}, {
  emotionTags: ["happy"],
  isGif: true,
  image: "happy.gif",
  alt: "A cat looking happy"
}, {
  emotionTags: ["hungry", "sad", "confused"],
  isGif: true,
  image: "confused.gif",
  alt: "A cat looking hungry"
}, {
  emotionTags: ["hungry"],
  isGif: true,
  image: "hungry.gif",
  alt: "A cat looking hungry"
}, {
  emotionTags: ["hungry"],
  isGif: true,
  image: "hungry2.gif",
  alt: "A cat looking hungry"
}, {
  emotionTags: ["insomniac", "scared"],
  isGif: true,
  image: "insomnia2.gif",
  alt: "A cat looking insomniac"
}, {
  emotionTags: ["relaxed"],
  isGif: true,
  image: "lazy.gif",
  alt: "A cat looking relaxed"
}, {
  emotionTags: ["relaxed"],
  isGif: true,
  image: "relaxed2.gif",
  alt: "A cat looking relaxed"
}, {
  emotionTags: ["scared", "sad"],
  isGif: true,
  image: "nervous.gif",
  alt: "A cat looking nervous"
}, {
  emotionTags: ["scared"],
  isGif: true,
  image: "nervous2.gif",
  alt: "A cat looking scared"
}, {
  emotionTags: ["sad"],
  isGif: true,
  image: "sad.gif",
  alt: "A cat looking sad"
}];
var emotionRadios = document.getElementById('emotion-radios');
var getImageBtn = document.getElementById('get-image-btn');
var gifsOnlyOption = document.getElementById('gifs-only-option');
var memeModalInner = document.getElementById('meme-modal-inner');
var memeModal = document.getElementById('meme-modal');
var memeModalCloseBtn = document.getElementById('meme-modal-close-btn');
emotionRadios.addEventListener('change', highlightCheckedOption);
memeModalCloseBtn.addEventListener('click', closeModal);
getImageBtn.addEventListener('click', renderCat);

function highlightCheckedOption(e) {
  var radios = document.getElementsByClassName('radio');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = radios[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var radio = _step.value;
      radio.classList.remove('highlight');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function closeModal() {
  memeModal.style.display = 'none';
}

function renderCat() {
  var catObject = getSingleCatObject();
  memeModalInner.innerHTML = "\n        <img \n        class=\"cat-img\" \n        src=\"./images/".concat(catObject.image, "\"\n        alt=\"").concat(catObject.alt, "\"\n        >\n        ");
  memeModal.style.display = 'flex';
}

function getSingleCatObject() {
  var catsArray = getMatchingCatsArray();

  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    var randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    var selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
    var isGif = gifsOnlyOption.checked;
    var matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCatsArray;
  }
}

function getEmotionsArray(cats) {
  var emotionsArray = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = cats[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var cat = _step2.value;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = cat.emotionTags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var emotion = _step3.value;

          if (!emotionsArray.includes(emotion)) {
            emotionsArray.push(emotion);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  var radioItems = "";
  var emotions = getEmotionsArray(cats);
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = emotions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var emotion = _step4.value;
      radioItems += "\n        <div class=\"radio\">\n            <label for=\"".concat(emotion, "\">").concat(emotion, "</label>\n            <input\n            type=\"radio\"\n            id=\"").concat(emotion, "\"\n            value=\"").concat(emotion, "\"\n            name=\"emotions\"\n            >\n        </div>");
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);