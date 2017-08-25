var stage, queue;

window.onload = function() {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
	}
};

function init() {
	if (Enabler.isPageLoaded()) {
		pageLoadedHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	}
};

function pageLoadedHandler() {
	if (Enabler.isVisible()) {
		adVisibilityHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
	}
};

function adVisibilityHandler() {

	// Dynamic Content variables and sample values
	Enabler.setProfileId(10001198);
	var devDynamicContent = {};

	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600 = [{}];
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0]._id = 0;
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].ID = 1;
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Active = true;
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Default = false;
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Click_Tag = "https:\/\/www.sky.com\/kids";
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Reporting_Label = "OSM_CUST_UP-Q4_KIDS_NA_Bespoke_302980";
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Start_Date = {};
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Start_Date.RawValue = "2017/06/02 8:30";
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Start_Date.UtcValue = 1496392200000;
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].End_Date = {};
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].End_Date.RawValue = "2017/06/30 23:59";
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].End_Date.UtcValue = 1498867140000;
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets = {
		"CTA.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053820772_CTA.png"
		},
		"tablet.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053933636_tablet.png"
		},
		"sky_kids_logo.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053925416_sky_kids_logo.png"
		},
		"sky_kids_logo_lg.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053916539_sky_kids_logo_lg.png"
		},
		"morph.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053906813_morph.png"
		},
		"frame_two_text.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053857569_frame_two_text.png"
		},
		"frame_three_text.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053847804_frame_three_text.png"
		},
		"frame_three_relational_text.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053838338_frame_three_relational_text.png"
		},
		"frame_one_text.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053829978_frame_one_text.png"
		},
		"character_top.png": {
			"Type": "file",
			"Url": "https://s0.2mdn.net/ads/richmedia/studio/36187302/36187302_20170523053813471_character_top.png"
		}
	};
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Legal_Button = "Click for legals";
	devDynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Legal_Copy = "UK\/Ireland only. Sky TV subscription, Variety or Box Sets Bundle & compatible tablet required. Selected content available using 3G\/4G\/WiFi. Available on two registered compatible devices. Further terms apply.";
	Enabler.setDevDynamicContent(devDynamicContent);

	preloadImages();
};

function preloadImages() {
	queue = new createjs.LoadQueue(true);
	queue.on('complete', handleAllImagesLoaded, this);
	queue.loadFile({
		id: "skyKidsLogo",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['sky_kids_logo.png'].Url
	});
	queue.loadFile({
		id: "morph",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['morph.png'].Url
	});
	queue.loadFile({
		id: "tablet",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['tablet.png'].Url
	});
	queue.loadFile({
		id: "characterTop",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['character_top.png'].Url
	});
	queue.loadFile({
		id: "cta",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['CTA.png'].Url
	});
	queue.loadFile({
		id: "frameOneText",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['frame_one_text.png'].Url
	});
	queue.loadFile({
		id: "frameTwoText",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['frame_two_text.png'].Url
	});
	queue.loadFile({
		id: "frameThreeText",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['frame_three_text.png'].Url
	});
	queue.loadFile({
		id: "frameThreeRelText",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['frame_three_relational_text.png'].Url
	});
	queue.loadFile({
		id: "skyKidsLogoLg",
		src: dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Assets['sky_kids_logo_lg.png'].Url
	});
};

function handleAllImagesLoaded() {
	setupTheStage();
	removePreloaderClassFromHtmlElement();
	createAdvertElements();
	document.getElementById('advert-border').addEventListener('click', exitButtonHandler, false);
};

function setupTheStage() {
	stage = new createjs.Stage("id-canvas");
	stage.enableMouseOver(10);
	createjs.Ticker.addEventListener("tick", handleTick, false);
};

function removePreloaderClassFromHtmlElement() {
	document.getElementById('id-canvas').style.background = 'none';
};

function handleTick(event) {
	stage.update();
};

/*
 Add all assets to an object for easy passing
 */
function GroupAssets() {

	var assets = {};

	assets.cta = new createjs.Bitmap(queue.getResult("cta"));
	assets.tablet = queue.getResult("tablet");
	assets.skyKidsLogo = new createjs.Bitmap(queue.getResult("skyKidsLogo"));
	assets.morph = new createjs.Bitmap(queue.getResult("morph"));
	assets.characterTop = new createjs.Bitmap(queue.getResult("characterTop"));
	assets.frameOneText = new createjs.Bitmap(queue.getResult("frameOneText"));
	assets.frameTwoText = new createjs.Bitmap(queue.getResult("frameTwoText"));
	assets.skyKidsLogoLg = queue.getResult("skyKidsLogoLg");
	assets.frameThreeText = new createjs.Bitmap(queue.getResult("frameThreeText"));
	assets.frameThreeRelText = new createjs.Bitmap(queue.getResult("frameThreeRelText"));

	return assets;
};

// Set loop
var loop = true,
	loopCounter = 0,
	numberOfLoops = 3;

function createAdvertElements() {

	var assets = new GroupAssets();
	var canvas = document.getElementById('advert-border');
	var tablet = assets.tablet;
	var characterTop = assets.characterTop;

	canvas.appendChild(tablet);
	createLegals();

	// Start the first frame
	frame1(assets, canvas, loopCounter, numberOfLoops);
};



function frame1(assets, canvas, loopCounter, numberOfLoops) {

	// Declare variables
	var frameOneText = assets.frameOneText;
	var tablet = assets.tablet;
	var cta = assets.cta;
	var skyKidsLogo = assets.skyKidsLogo;
	var morph = assets.morph;
	var characterTop = assets.characterTop;

	// Set initial state
	cta.x = 60;
	cta.y = 380;
	cta.regX = cta.image.width * 0.5;
	frameOneText.alpha = 1;
	characterTop.alpha = 0;
	tablet.alpha = 0;

	// Add to stage
	stage.addChild(skyKidsLogo, characterTop, morph, cta, frameOneText);

	// Animations
	createjs.Tween.get(frameOneText).to({
		alpha: 1
	}, 500).call(function() {
		createGlint(frameOneText)
	}).wait(4000).to({
		alpha: 0
	}, 500);

	TweenLite.to(tablet, 0.4, {
		alpha: 1
	});
	TweenLite.to(characterTop, 0.4, {
		alpha: 1
	});
	TweenLite.to(skyKidsLogo, 0.4, {
		opacity: 1
	});
	TweenLite.to(cta, 0.4, {
		alpha: 1
	});
	TweenLite.to(morph, 0.4, {
		opacity: 1
	});

	TweenLite.to(tablet, 0, {
		ease: Power1.easeOut,
		rotationY: 0,
		transformPerspective: 600
	});

	createjs.Tween.get(cta).wait(1500).to({
			scaleX: 0.7,
			scaleY: 0.7
		}, 400, createjs.Ease.linear).wait(100)
		.to({
			scaleX: 1,
			scaleY: 1,
			rotation: 0.001
		}, 1000, createjs.Ease.elasticOut);


	// Call next frame
	setTimeout(function() {
		frame2(assets, canvas);
	}, 5250);
};



function frame2(assets, canvas) {

	// Declare variables
	var frameTwoText = assets.frameTwoText;
	var cta = assets.cta;

	// Add to stage
	stage.addChild(frameTwoText);

	// Animations
	createjs.Tween.get(frameTwoText).to({
		alpha: 1
	}, 500).wait(3500).to({
		alpha: 0
	}, 500);

	createGlint(frameTwoText);

	createjs.Tween.get(cta).wait(2400).to({
			scaleX: 0.7,
			scaleY: 0.7
		}, 400, createjs.Ease.easeIn).wait(100)
		.to({
			scaleX: 1,
			scaleY: 1,
			rotation: 0.001
		}, 1000, createjs.Ease.elasticOut);

	// Call next frame
	setTimeout(function() {
		frame3(assets, canvas);
	}, 4250);
};



function frame3(assets, canvas) {

	// Declare variables
	var skyKidsLogoLg = assets.skyKidsLogoLg;
	var frameThreeText = assets.frameThreeText;
	var frameThreeRelText = assets.frameThreeRelText;
	var characterTop = assets.characterTop;
	var morph = assets.morph;
	var tablet = assets.tablet;
	var skyKidsLogo = assets.skyKidsLogo;
	var cta = assets.cta;

	// Set initial state
	frameThreeText.alpha = 0;
	frameThreeRelText.alpha = 0;
	skyKidsLogoLg.style.position = 'absolute';
	skyKidsLogoLg.style.top = 0;
	skyKidsLogoLg.style.left = 0;

	// Add to stage
	canvas.appendChild(skyKidsLogoLg)
	stage.addChild(frameThreeText, frameThreeRelText)

	// Animations
	createGlint(frameThreeText);

	createjs.Tween.get(frameThreeText).wait(500).to({
		alpha: 1
	}, 500);

	TweenLite.to(frameThreeRelText, 0.5, {
		alpha: 1,
		delay: 0.5
	});
	TweenLite.to(morph, 0.5, {
		alpha: 0
	});
	TweenLite.to(skyKidsLogo, 0.5, {
		alpha: 0
	});
	TweenLite.to(characterTop, 0.5, {
		alpha: 0
	});
	TweenLite.to(tablet, 0.5, {
		ease: Power0.easeNone,
		rotationY: 90,
		transformPerspective: 600,
		delay: 0
	});
	TweenLite.to(skyKidsLogoLg, 0, {
		ease: Power0.easeNone,
		rotationY: -90,
		opacity: 1,
		transformPerspective: 600
	});


	TweenLite.to(skyKidsLogoLg, 0.5, {
		ease: Power2.easeOut,
		rotationY: 0,
		transformPerspective: 600,
		delay: 0.5
	});


	// Fade out if banner is set to loop

	if (loop === true && loopCounter < numberOfLoops) {
		loopCounter++;
		setTimeout(function() {
			createjs.Tween.get(frameThreeText).to({
				alpha: 0
			}, 500);
			TweenLite.to(frameThreeRelText, 0.5, {
				alpha: 0
			});
			TweenLite.to(skyKidsLogoLg, 0.5, {
				opacity: 0
			});
			TweenLite.to(cta, 0.5, {
				alpha: 0
			});
			hideLegals();
		}, 5250);

		// Call next frame
		setTimeout(function() {
			canvas.removeChild(tablet)
			stage.removeAllChildren();
			hideLegals();
			createAdvertElements();

		}, 6000);

	} else {
		return;
	}

};



/**
 * [Creates a glint that is masked to the target image]
 * @param  {image} target [The image to apply glint to]
 */
function createGlint(target) {

	var glint = new createjs.Shape();
	var maskArea = new createjs.Shape();

	// Cache the image you want to apply the glint to
	target.cache(0, 0, target.image.width, target.image.height);

	// The glint effect
	glint.graphics.beginLinearGradientFill(["rgba(255,255,255,0.2)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"], [0, 0.2, 0.9], -140, 0, 15, 30).drawRect(-5, 0, 18, target.image.height);
	glint.rotation = 20;


	// Create the mask area
	maskArea.graphics.beginLinearGradientFill(["rgba(255,255,255,0.2)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"], [0, 0.2, 0.9], 0, 0, target.image.width, target.image.height).drawRect(0, 0, target.image.width, target.image.height)
	maskArea.filters = [
		new createjs.AlphaMaskFilter(target.cacheCanvas)
	];
	maskArea.cache(0, 0, target.image.width, target.image.height);
	maskArea.mask = glint;
	//maskArea.mask = target;
	//
	stage.addChild(maskArea);


	TweenLite.to(glint, 1, {
		x: maskArea.getBounds().width * 1.45,
		delay: 1.5,
		ease: Power1.easeInOut,
		onComplete: function() {
			TweenLite.to(glint, 0, {
				x: -225,
				ease: Power1.easeInOut
			})
		}
	})
};



function createLegals() {
	var legalExitButton = document.getElementById('legal-copy-exit-button');
	legalExitButton.addEventListener('click', function(e) {
		document.getElementById('legal-copy-container').style.top = '600px';
	}, false);

	var copy = document.getElementById('legal-copy');
	copy.innerHTML = dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Legal_Copy;

	var label = document.getElementById('legal-button-label');
	TweenLite.to(label, 0.5, {
		opacity: 1
	})
	label.innerHTML = dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Legal_Button;

	var legalButton = document.getElementById('legal-button');

	legalButton.addEventListener('click', function(e) {
		document.getElementById('legal-copy-container').style.top = '350px';
	}, false);
};

function hideLegals() {

	var label = document.getElementById('legal-button-label');
	TweenLite.to(label, 0.5, {
		opacity: 0
	});

};


function exitButtonHandler() {
	Enabler.exitOverride('Exit', dynamicContent.OSM_CUST_UPQ4_KIDS_NA_Bespoke_302980_120x600[0].Click_Tag);
};