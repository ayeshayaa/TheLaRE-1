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
        image: 'IMG-2862.JPG',
        is_stereo: false
    });
  }
}); 
