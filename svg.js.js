/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "heart": {
        "strokepath": [
            {
                "path": "M116.8,44.8c4.6-5.9,17.7-21,37.6-23.2c30.1-3.3,60.8,24.5,64.8,51.2c1.6,11-0.9,23.9-70.4,111.2  c-9.7,12.2-17.8,22.2-23.2,28.8c-10.8-5.2-26.9-14-44-28C71.2,176.2,1.1,118.6,16.8,68C22.1,51,36.9,35.3,56,29.6  C87.9,20,114.8,43.1,116.8,44.8z",
                "duration": 1000
            }
        ],
        "dimensions": {
            "width": 237,
            "height": 225
        }
    }
};


/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('#heart').lazylinepainter(
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint');
 });
