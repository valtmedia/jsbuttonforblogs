//Onclick id basicModalshow
//The modal will be popup
$("#basicModalshow").click(function(){
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    //CHANGABLE VARIABLE START
    //CHANGE BELOW DATA AS YOU WANT
        var clear__ = 'yes';
        var time__ = 5;
        var text1__ = 'YouTube Video';
        var text2__ = 'bluh';
        var button__ = 'Earn Money';
        var video__ = 'https://www.youtube.com/embed/tgbNymZ7vqY';
        var url__ = 'https://www.google.com';
    //CHANGABLE VARIABLE END
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    //---------------------------------------------------
    $("#basicModal").attr("hidden","hidden"),redirect__url="";var go=window.location.href;redirect__url=go+"?clear="+clear__+"&time="+time__+"&text1="+text1__+"&text2="+text2__+"&button="+button__+"&video="+video__+"?autoplay=1&mute=1&url="+url__,window.location.href=redirect__url;
});
var urlParams="",clear="",time="",text1="",text2="",button="",video="",url="";$(document).ready((function(){$("#modal_print").html('<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">text1</h4><button type="button" class="close" id="cancelable" aria-label="Close"><span aria-hidden="true">&times;</span></button></div> <div class="modal-body"><iframe id="video" width="420" height="315"></iframe></div><div class="modal-footer"><button id="click_btn" type="button" class="btn btn-primary">button</button></div></div></div></div>'),$("#basicModal").attr("hidden","hidden"),urlParams=new URLSearchParams(window.location.search),clear=urlParams.get("clear"),time=urlParams.get("time"),text1=urlParams.get("text1"),text2=urlParams.get("text2"),button=urlParams.get("button"),video=urlParams.get("video"),mute=urlParams.get("mute"),url=urlParams.get("url"),console.log(video),console.log(mute),$("#myModalLabel").text((function(t,a){return"text1"===a?text1:a})),$("#click_btn").text((function(t,a){return"button"===a?button:a})),$("#video").attr("src",video+"&mute="+mute),"yes"==clear?setTimeout((function(){$("#cancelable").attr("data-dismiss","modal"),$("#basicModal").removeAttr("hidden"),$("#basicModal").modal({show:!0,backdrop:"static"})}),500):"no"==clear?setTimeout((function(){$("#basicModal").removeAttr("hidden"),$("#basicModal").modal({show:!0,backdrop:"static"})}),500):$("#basicModal").modal("hide"),$("#click_btn").click((function(){$("#click_btn").attr({disabled:!0,value:"Submitted"}),setTimeout((function(){$("#basicModal").modal("hide"),window.location.href=url}),1e3*time)}))}));
