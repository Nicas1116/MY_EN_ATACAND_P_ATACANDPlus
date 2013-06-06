$(document).ready(function(e) {
     //gotFocus();
});
function callLostFocus()
{
    $(".content").children().css("display","none");
}
(function() {
 var sb = document.createElement('script'); sb.type = 'text/javascript';
 sb.src = "resource://js/SystemBridge.js"
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sb, s);
 })();

var currentPageNo;
var currentStage;
function callPageAnimation(pageNo)
{
	currentPageNo=pageNo;
	$(".content").children().css("display","none");
	var mA=0;
	$.each($(".content").children(),function(x,a)
	{
		
		if(!($(a).hasClass("NoAnimation")))
		{
			setTimeout(function(){$(a).fadeIn("slow");},(mA+1)*500);
			mA++;
		}else
		{
			$(a).css("display","block");
		}
	});
	switch(currentPageNo)
	{
        case "2_2":
            $(".Page2_GraphButton1").click(function()
            {
                SystemBridge.goToSlide("Hypertension::HypertensionPopUp1")
            });
            $(".Page2_GraphButton2").click(function()
                                           {
                                           SystemBridge.goToSlide("Hypertension::HypertensionPopUp2")
                                           });
            break;
        case "2_2_1":
            $(".Page2_Button1").click(function()
                                           {
                                           SystemBridge.goToSlide("Hypertension::HypertensionL")
                                           });
            break;
        case "2_2_2":
            $(".Page2_Button2").click(function()
                                           {
                                           SystemBridge.goToSlide("Hypertension::HypertensionL")
                                           });
            break;
		case "3_1":
		$( ".Page5_Graph3" ).draggable({revert: true});
		$( ".Page5_Graph4" ).draggable({revert: true});
		$( ".Page5_Graph5" ).draggable({revert: true});
		$( ".Page5_Graph6" ).draggable({revert: true});
		$( ".Page5_Graph7" ).draggable({revert: true});
		$( ".Page5_Graph8" ).draggable({revert: true});
		$( ".Page5_Graph9" ).draggable({revert: true});
		$(".Page5_BoxDrop").droppable({
			drop: function( event, ui ) {
				$(ui.draggable).fadeOut("slow",function()
				{
                                        SystemBridge.goToSlide("ModeOfAction::Videos");
				});
			}
		});
		case "4_1":
		$(".Page6_Graph1").click(function()
		{
                                 SystemBridge.goToSlide("Affinity::BindingSites2");
		})
		break;
		case "4_2":
		$(".Page6_Button1").click(function()
		{
			SystemBridge.goToSlide("Affinity::BindingSites1");
		})
		break;
		case 7:
		$(".Page7_Graph1").bind("mousedown",runStageAnimate);
		$(".Page7_Graph1").bind("startouch",runStageAnimate);
		break;
	}
}

function runStageAnimate(pStage)
{
	switch(currentPageNo)
	{
		case 7:
			$(".content_popup").css("display","block");
			var mB=0;
			//$(".").fadeOut("slow");
			$.each($(".content_popup").children(),function(x,a)
			{
				
				if(!($(a).hasClass("NoAnimation")))
				{
					setTimeout(function(){console.log("TEST");console.log($(a));$(a).fadeIn("slow");},(mB+1)*500);
					mB++;
				}else
				{
					$(a).css("display","block");
				}
			});
		break;
		case 8:
		
		break;
	}
}

function checkNavigateFooter()
{
	
}