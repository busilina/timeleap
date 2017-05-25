var timeleap = (function(){
    var now = new Date();
    var OriginalDate = Date;

    var defaults = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate()
    }
    var configs = Object.assign({}, defaults);;

    var travel = function(date){
        configs = Object.assign({}, defaults, date);

        Date = function(){
            var args = Array.prototype.slice.apply(arguments);

            if(args.length === 0){
                return new OriginalDate(configs.year, configs.month - 1, configs.day);
            }

            return new (OriginalDate.bind.apply(OriginalDate, [null].concat(args)))();
        }
        Date.prototype = OriginalDate.prototype;
    }

    var reset = function(){
        configs = Object.assign({}, defaults);

        Date = OriginalDate;
        Date.prototype = OriginalDate.prototype;
    }

    return {
        goto: function(date){
            travel(date);
        },
        back: function(){
            reset();
        }
    }
})()

module.exports = timeleap;
