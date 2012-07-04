// Created by iWeb 3.0.2 local-build-20100913

function createMediaStream_id2()
{return IWCreateMediaCollection("http://web.me.com/karengomba/Spain/More_Photos/More_Photos_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://web.me.com/karengomba/Spain/More_Photos',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget9'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://web.me.com/karengomba/Spain/More_Photos',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(222,166),new IWSize(222,26),new IWSize(244,207),27,27,0,new IWSize(23,23)),new IWPhotoFrame([IWCreateImage('More_Photos_files/ul.png'),IWCreateImage('More_Photos_files/top.png'),IWCreateImage('More_Photos_files/ur.png'),IWCreateImage('More_Photos_files/right.png'),IWCreateImage('More_Photos_files/lr.png'),IWCreateImage('More_Photos_files/bottom.png'),IWCreateImage('More_Photos_files/ll.png'),IWCreateImage('More_Photos_files/left.png')],null,0,0.404386,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget9',null,'widget10',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return true;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('More_Photos_files/More_PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
