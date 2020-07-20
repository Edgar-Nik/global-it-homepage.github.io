 $(document).ready(function(){
 	let position = 0;
 	const slidesToShow = 2;
 	const slidesToScroll = 1;
 	const container = $('.slider-container');
 	const track = $('.slider-track');
 	const item = $('.slider-item');
 	const prevBtn = $('#slide-left');
 	const nextBtn = $('#slide-right');
 	const itemWidth = container.width() / slidesToShow;
 	const movePosition = slidesToScroll * itemWidth;
 	const itemsCount = item.length;

 	item.each((index,item)=>{
 		$(item).css({
 			minWidth: itemWidth,

 		})
 	})

 
 	prevBtn.click(()=>{
 		position += movePosition;
 		setPosition();
 		checkBtns();
 	});
 	nextBtn.click(()=>{
 	position -= movePosition;
 		setPosition();
 		checkBtns();
 	});


 	const setPosition=()=>{
 		track.css({
 		transform: `translateX(${position}px)`
 	})};

 	const checkBtns=()=>{
 		prevBtn.prop('disabled', position === 0)
 		nextBtn.prop('disabled', 
 		position <=	-(itemsCount - slidesToShow) * itemWidth
 			)
 	}
 	checkBtns();


 })
 

let chartIntervalId = setInterval(()=>{chartTest()},200);
 function chartTest() {
  let testDiv = document.getElementById("test-offset");
  if(window.scrollY >= testDiv.offsetTop){
  	chartAnimation();
  	 clearInterval(chartIntervalId)
  }
 
}
const fontSize = ($('#font-check').css('font-size'))
console.log(fontSize);
const fontArr = fontSize.split('');
fontArr.splice(fontArr.length-2,2)
const responseLine = (+(fontArr.join('')))/2;
console.log(responseLine)


const chartStr = ($('.chart').css('height'))

let arr = chartStr.split('')
arr.splice(arr.length-2,2)
const chartSize=(+(arr.join('')))-50;
function chartAnimation(){



	$(function() {
        $('.projects').easyPieChart({
           barColor	: '#5beb0e',
           trackColor:'#ebebeb',
           scaleColor: false,
           lineWidth: responseLine,
           size:chartSize
        });
    });

 $(function() {
        $('.year').easyPieChart({
           barColor	: '#572bd6',
           trackColor:'#ebebeb',
           scaleColor: false,
           lineWidth: responseLine,
           size:chartSize
        });
    });
 $(function() {
        $('.costumers').easyPieChart({
           barColor	: '#ff2525',
           trackColor:'#ebebeb',
           scaleColor: false,
           lineWidth: responseLine,
           size:chartSize
        });
    });
  $(function() {
        $('.students').easyPieChart({
           barColor	: '#ffd82c',
           trackColor:'#ebebeb',
           scaleColor: false,
           lineWidth: responseLine,
          size:chartSize
        });
    });
}
 






let boolean = true;
const testItems = document.querySelectorAll('.test-item');
console.log(testItems)
let left = 0;

function positionMove(left){
	testItems.forEach(function(currentValue, currentIndex, listObj) { 
		currentValue.style.left=`${left}%`;		
    console.log(currentValue); 
  })
}
	



let timerId = setInterval(()=>{

	if(left===0){
		boolean=true;
	}
	if(left===-200){
		boolean=false;
	}
	if(boolean){
	 left-=100;
	}else{
		left+=100;
	}

	positionMove(left)
},5000)