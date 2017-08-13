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
    vrHomePage.addHotspot('creating-hotspot-2',{
    pitch: -5,
    yaw: 90,
    radius: 0.10,
    distance: 1
    });
    vrHomePage.addHotspot('creating-hotspot-3',{
    pitch: -5,
    yaw: 180,
    radius: 0.10,
    distance: 1
    });
    vrHomePage.addHotspot('creating-hotspot-4',{
    pitch: 0,
    yaw: 15,
    radius: 0.10,
    distance: 1
    });
    vrHomePage.addHotspot('creating-hotspot-5',{
    pitch: -5,
    yaw: -150,
    radius: 0.10,
    distance: 1
    });
    
});

vrHomePage.on('click', function(event){
  console.log('register all click events');
    
  if (event.id == 'creating-hotspot-1'){
    vrHomePage.setContent({
        image: 'IMG-2869.JPG',
        is_stereo: false
    });
  }
    if (event.id == 'creating-hotspot-2'){
    vrHomePage.setContent({
        image: 'IMG-2862.JPG',
        is_stereo: false
    });
  }
    if (event.id == 'creating-hotspot-3'){
    vrHomePage.setContent({
        image: 'IMG-2861.JPG',
        is_stereo: false
    });
  }
    if (event.id == 'creating-hotspot-4'){
        theLareAlert("This is the Brooklyn Bridge Park Environmental Education Center!");
    }
         vrHomePage.setContent({
      image: 'IMG-2863.JPG',
      preview: 'IMG-2863.JPG',
      is_stereo: true
    });
        
         vrHomePage.addHotspot('hotspot-back', {
      pitch: 0,
      yaw: 0,
      radius: 0.10,
      distance: 1
    });
        
   if(event.id == 'hotspot-back') {
    location.reload();
  }
    
  });
