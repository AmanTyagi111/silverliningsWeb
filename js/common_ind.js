function openNav() {

  document.getElementById("mySidenav").style.right = "0px";
}

function closeNav() {
 document.getElementById("mySidenav").style.right = "-200px";
}





 $(function () {

    var $container = $('#container').masonry({
        itemSelector: '.ite',
        columnWidth: 200
    });

    // reveal initial images
    $container.masonryImagesReveal($('#images').find('.ite'));
});

$.fn.masonryImagesReveal = function ($items) {
    var msnry = this.data('masonry');
    var itemSelector = msnry.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append($items);
    $items.imagesLoaded().progress(function (imgLoad, image) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $(image.img).parents(itemSelector);
        // un-hide item
        $item.show();
        // masonry does its thing
        msnry.appended($item);
    });

    return this;
};