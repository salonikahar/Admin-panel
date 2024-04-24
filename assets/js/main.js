// apex chart
var options = {
  series: [
    {
      name: 'income',
      data: [16.8, 16.8 , 15.5, 17.8, 15.5, 17, 19, 16, 15,17,14,17]
    }, {
      name: 'expence',
      data: [16.5, 17.5, 16.2, 17.5, 16, 19.5, 16,17, 16, 19,18,19]
    }
  ],
  colors:['#1B55E2','#E7515A'],

  chart: {
    type: "area",
    width: "100%",
    height: "100%",
    background: "#fff",
    dropShadow: {
      enabled: true,
      color: "#fff"
    },
    toolbar:{
      show:false
    },
    zoom: {
      enabled: false
    },
    
  },
  grid:{
    show:true,
    yaxis:{
      lines:{
        show:false
      }
    },
    xaxis:{
      lines:{
        show:true
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    colors: [ '#1B55E2','#E7515A']
  },
  stroke: {
    curve: "smooth",
    width: 3,
    fill: {
      type: "solid",
      colors:[ '#1B55E2','#E7515A'],

    }
  },
  legend:{
    horizontalAlign: 'right',
    position: 'top'

  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      type: "vertical",
      colorStops: [
        [
          {
            offset: 0,
            color: "red",
            opacity: 0.7
          },
          {
            offset: 70,
            color: "red",
            opacity: 0.5
          },
          {
            offset: 97,
            color: "red",
            opacity: 0
          }
        ]
      ]
    }
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  
   yaxis: {
      min:13,
   },
   
      fill: {
        opacity: 5,
      },
      
    }; 



// // Initialize the chart with the data
const achart = new ApexCharts(document.querySelector("#chart"), options);
achart.render();



// pie chart

var options = {
  series: [270, 100, 100, 285, 237],
  chart: {
  // width: 380,
  height:'100%',
  type: 'donut',
},
dataLabels: {
  enabled: false
},
labels: ["Apparel", "Sports", "Test", "Others","Test_1"],
colors:["#E2A03F","#5C1AC3","#E2A03F","#E7515A","#5C1AC3"],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      show: false
    }
  }
}],
legend: {
  position: 'bottom',
  horizontalAlign: 'center',
  // offsetY: ,
  // height: 230,
  onItemClick: {
    toggleDataSeries: true
  }
}
};


  var chart = new ApexCharts(document.querySelector("#piechart"), options);
chart.render();

// chart3

var options = {
  series: [{
  name: 'Sales',
  data: [44, 55, 41, 67, 22, 43, 21]
},
{
  name: 'Last week',
  data: [13, 23, 20, 8, 13, 27, 33]
}],
  chart: {
  type: 'bar',
  stacked: true,
  height:"80%",
  // width:"100%", 
  stackType: '100%',  
  toolbar:{
    show:false
  },  
   
},
dataLabels: {
  enabled: false
},
grid:{
  show:true,
  yaxis:{
    lines:{
      show:false
    }
  },
},
colors:["#E2A03F","#EAEAEC"],

xaxis: {
  categories: [
    "sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],
},
yaxis:{
  show:false
},
fill: {
  opacity: 1
},
legend :{
  show:false
}, 
};

var bar = new ApexCharts(document.querySelector("#bar"), options);
bar.render();

// last chart
var options = {
  series: [
    {
      name: 'income',
      data: [28, 40 , 36, 52, 38, 60, 38, 52, 36, 40]
    }
  ],
  colors:['#00AB55'],

  chart: {
    type: "area",
    width: "100%",
    // height: "100%",
    background: "#fff",
    dropShadow: {
      enabled: true,
      color: "#fff"
    },
    toolbar:{
      show:false
    },
    zoom: {
      enabled: false
    },
    
  },
  grid:{
    show:true,
    yaxis:{
      lines:{
        show:false
      }
    },
    xaxis:{
      lines:{
        show:false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    colors: [ '#00AB55']
  },
  stroke: {
    curve: "smooth",
    width: 2,
    
  },
  legend:{
    horizontalAlign: 'right',
    position: 'top'

  },
  
  xaxis: {
    show:false
  },
  
   yaxis: {
      show:false
   },
   
      fill: {
        opacity: 1,
      },
      
    }; 



// // Initialize the chart with the data
const fifth = new ApexCharts(document.querySelector("#fifth"), options);
fifth.render();
// jqury code
$(document).ready(function(){
    $('.menu_li').click(function(){
        $(this).next('.sub_li').slideToggle();
        $(".sub_li").not($(this).next('.sub_li')).slideUp();   
        $(this).children().eq(1).toggleClass('rotate');
        $(".rotate").not($(this).children().eq(1)).toggleClass('rotate');    
    });
    

    $('.logo i').click(function() {
        $('aside').addClass('w-0');
        $('.header').addClass('ml-0');
        $('.content').addClass('ml-0');
        $('.bar').addClass('hidden');
        $('.main_logo .logo_img img').addClass('hidden');
        $('.main_logo span').addClass('hidden');
        $('.head_logo').addClass('show');
        $('.pb').addClass('w-400');
        $('aside').removeClass('w-260');
        $('header').removeClass('ml-260');
        $('.content').removeClass( 'ml-260' );
        $('.head_logo').removeClass( 'hidden' );
        $(this).addClass('hidden');
    });
    

    $('.head_logo i').click(function () {
        $('aside').removeClass('w-0');
        $('.header').removeClass('ml-0');
        $('.content').removeClass('ml-0');
        $('.bar').removeClass('hidden');
        $('.main_logo .logo_img img').removeClass('hidden');
        $('.main_logo span').removeClass('hidden');
        $('.head_logo').removeClass('show');
        $('.pb').removeClass('w-400');
        $('aside').addClass('w-260');
        $('header').addClass('ml-260');
        $('.content').addClass( 'ml-260' )  ;
        $('.head_logo').addClass( 'hidden' );
        $('.logo i').removeClass('hidden');
    });
   
    $('.ri-sun-line').click(function(){
        $(this).addClass('hidden');
        $('.ri-moon-line').addClass('show');
        $('aside').addClass('dark');
    });
    
    $('.ri-moon-line').click(function(){
        $(this).removeClass('show');
        $('.ri-sun-line').removeClass('hidden');
        $('aside').removeClass('dark');
        
    });
    
    $('.ri-global-line').click(function(){
        $('.language').toggleClass('hidden');
    });
    $('.user').click(function(){
      $('.up').toggleClass('hidden');
  });
   
});