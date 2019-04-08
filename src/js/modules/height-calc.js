const heightCalc = (($) => {
  const $newsContent = $('.news-content');
  const $newsHeader = $newsContent.find('.header-wrap');
  const $textWrap = $newsContent.find('.text-wrap');

  function findMaxHeight(elem) {
    let maxHeight = 0;

    elem.each(function () {
      if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });

    elem.height(maxHeight);
  }

  const init = () => {
    findMaxHeight($newsHeader);
    findMaxHeight($textWrap);
  };
  return { init };
})(jQuery);

export default heightCalc;
