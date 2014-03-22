flowplayer(function(player, root, engine) {

   console.log(player);
   console.log(root);
   console.log(engine);

   var lower3 = $("<div class='fp-lower3'/>").appendTo(root);

   lower3.html('just some text').addClass('red');

});
