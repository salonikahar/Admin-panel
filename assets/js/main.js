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
            opacity: 0
          },
          {
            offset: 70,
            color: "red",
            opacity: 0
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
    });
    

    $('.head_logo i').click(function () {
        $('aside').removeClass('w-0');
        $('.header').removeClass('ml-0');
        $('.content').removeClass('ml-0');
        $('.bar').removeClass('hidden');
        $('.main_logo .logo_img img').removeClass('hidden');
        $('.main_logo span').removeClass('hidden');
        $('.head_logo').removeClass('show');
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
    $('.ri-global-line').hover(function(){
        $('.language').toggleClass('hidden');
    });
});
