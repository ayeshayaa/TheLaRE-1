var vrHomePage = vRViewPlayer('#meiayeshadocs', {
    image: 'IMG-2863.JPG',
    is_stereo: false,
    is_autopan_off: true,
});
window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(events){
  vrHomePage.addHotspot('creating-hotspot-1', {
    pitch: -5,
    yaw: -90,
    radius: 0.10,
    distance: 1
  });
    
    });

vrHomePage.on('click', function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1'){
    vrHomePage.setContent({
        image: 'FullSizeRender%20(1).jpg',
        is_stereo: false
    });
  }
     vrHomePage.addHotspot('hotspot-back', {
      pitch: 0,
      yaw: 0,
      radius: 0.10,
      distance: 1
    });
  })
  if(event.id == 'hotspot-back') {
    location.reload();
  } 

