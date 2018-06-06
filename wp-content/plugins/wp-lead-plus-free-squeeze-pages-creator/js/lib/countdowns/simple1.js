/**
 * Created by luis on 02/08/17.
 */
(function($){

    $(function(){


        /**
         * c.type
         * c.to //for type countTo
         * c.hours
         * c.minutes
         * c.seconds
         */
        //the c37Countdown1 array contains all the
        if (typeof c37Countdown1 == 'undefined')
            return;
        //run countdown on every
        _.each(c37Countdown1, function(c) {
            if (c.type == 'countTo')
            {
                $('#' + c.id).countdown(c.to, function(e){

                    $(this).html('<div class="c37-countdown-1" class="color-full">'+e.strftime('<span class="item"> %H</span>:<span class="item">%M</span>:<span class="item">%S</span>')+'</div><div class="countdown-label">'+ c.text+'</div>');

                });
            } else
            {
                var toDate = new Date();
                toDate.setHours(toDate.getHours() + c.hours);
                toDate.setHours(toDate.getMinutes() + c.minutes);
                toDate.setHours(toDate.getSeconds() + c.seconds);
                $('#' + c.id).countdown(toDate, function(e){

                    $(this).html('<div class="c37-countdown-1" class="color-full">'+e.strftime('<span class="item"> %H</span>:<span class="item">%M</span>:<span class="item">%S</span>')+'</div><div class="countdown-label">'+ c.text+'</div>');

                });
            }

            var countTo = new Date();
        });



    });

})(jQuery);

