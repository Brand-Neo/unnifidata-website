(function ($) {
    "use strict";

    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    };

})(jQuery);