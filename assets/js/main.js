$(window).load(function(){
	var hash = (window.location.hash).replace('#', '');
	if(hash.length == 0){
		$('footer').animate({
			top: '50%',
			marginTop : -$('#navBar').height()/2
		}, 500);
	}else{
		var realHash = window.location.hash;
		console.log(realHash);
		switch(realHash){
			case '#/about':
				loadAbout();
				break;
			case '#/photography':
				loadPhotography();
				break;
			case '#/web-design':
				loadWebDesign();
				break;
			case '#/portfolio':
				loadPortfolio();
				break;
			case '#/contact':
				loadContact();
				break;
		}
	}
});
window.onhashchange = locationHashChanged;
$(function(){
	$('.mobileNavToggle').click(function(event) {
		event.preventDefault();
		if($('footer').hasClass('open')){
			closeMobileNav();
		}else{
			openMobileNav();
		}
	});
})

function openMobileNav(){
	$('footer').animate({
		top: $(window).height()-80,
		marginTop : 0
	}, 500, function(){
		$('.mobileNav').slideToggle(500).addClass('open');
	}).addClass('open');
};

function closeMobileNav(){
	$('.mobileNav').slideToggle(500, function(){
		$('footer').animate({
			top: '50%',
			marginTop : -$('#navBar').height()/2
		}, 500).removeClass('open');
	}).removeClass('open');
}

function moveNavToBottom(){
	$('footer').animate({
		top: '100%',
		marginTop : -$('#navBar').height()
	}, 500, function(){
		$('.overLay').fadeOut();
	});
}

function locationHashChanged() {
	switch(location.hash){
		case '#/about':
			loadAbout();
			break;
		case '#/photography':
			loadPhotography();
			break;
		case '#/web-design':
			loadWebDesign();
			break;
		case '#/portfolio':
			loadPortfolio();
			break;
		case '#/contact':
			loadContact();
			break;
	}
}
function loadAbout(){
	console.log('about page');
	moveNavToBottom()
}
function loadPhotography(){
	console.log('photography page');
	moveNavToBottom()
}
function loadWebDesign(){
	console.log('web design page');
	moveNavToBottom()
}
function loadPortfolio(){
	console.log('portfolio page');
	moveNavToBottom()
}
function loadContact(){
	console.log('contact page');
	moveNavToBottom()
}