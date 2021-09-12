function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
    
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}

function animateValuePercentage(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
    
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value+"%";
        if (value == end) {
            clearInterval(timer);
        }
    }
        
    timer = setInterval(run, stepTime);
    run();
}

var scrolled = false;
var count = 0;
window.addEventListener('scroll', function () {
    // the page was scrolled (horizontally or vertically)
    // var obj = document.getElementById("satisfied-client-count");
    // var pos = obj.scrollHeight - obj.clientHeight;
    var pos = 1000;
    if (window.pageYOffset > pos){
        scrolled = true;
        count +=1;
    }
    if ((scrolled = true) && (count === 1)){
        animateValue("projects-counter", 0, 4789, 2000);
        animateValue("customer-counter", 0, 6400, 2000);
        animateValue("success-counter", 0, 960, 2000);
        animateValue("awards-counter",0,448,2000);
        scrolled = false
    }
});

