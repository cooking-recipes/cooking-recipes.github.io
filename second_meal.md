---
layout: second_meal
title: Вторые блюда
rday:
- text: Рецепт дня
  title: Вкусненькое рагу
  des:  Отличное блюдо для сытного и легкого домашнего ужина. Очень вкусное рагу. В древнем Львове готовят блюдо с таким интересным названием  Годзя. По факту  это овощное рагу с мясом, основные составляющие которого картофель, капуста, лук, морковь, фасоль, соленные огурцы - без хотя бы одного из этих ингридиентов Годзя не получится. Все остальные дополнительные ингридиенты могут варьироваться как угодно мясо, грибы, сельдерей, красная капуста, томаты, перец и т.д. 
url: single.html
category: main
---
<div class="container">
				<div class="header-top">
					<div class="top-nav">
						<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s2">
							<h3>Menu</h3>
							<ul>
								<li><a href="index.html">Home</a></li>
								<li class="menu">Menu</li>
									<ul class="cl-effect-1">
										<li><a href="menu.html">Menu1</a></li>                                             
										<li><a href="menu.html">Menu2</a></li>
										<li><a href="menu.html">Menu3</a></li> 
										<li><a href="menu.html">Menu4</a></li>  
									</ul>
									<!-- script-for-menu -->
									 <script>
									   $( "li.menu" ).click(function() {
										 $( "ul.cl-effect-1" ).slideToggle( 300, function() {
										 // Animation complete.
										  });
										 });
									</script>
								<li><a href="events.html">Events</a></li>
								<li><a href="gallery.html">Gallery</a></li>
								<li><a href="mail.html">Mail Us</a></li>
							</ul>
						</nav>
						<div class="main buttonset">	
								<!-- Class "cbp-spmenu-open" gets applied to menu and "cbp-spmenu-push-toleft" or "cbp-spmenu-push-toright" to the body -->
								<button id="showRightPush"><img src="images/menu.png" alt=""/></button>
								<!--<span class="menu"></span>-->
						</div>
						<!-- Classie - class helper functions by @desandro https://github.com/desandro/classie -->
						<script src="js/classie.js"></script>
						<script>
						var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
						showRightPush = document.getElementById( 'showRightPush' ),
						body = document.body;

						showRightPush.onclick = function() {
							classie.toggle( this, 'active' );
							classie.toggle( body, 'cbp-spmenu-push-toleft' );
							classie.toggle( menuRight, 'cbp-spmenu-open' );
							disableOther( 'showRightPush' );
						};

						function disableOther( button ) {
							if( button !== 'showRightPush' ) {
								classie.toggle( showRightPush, 'disabled' );
							}
						}
					 </script>
					</div>
					<div class="header-logo">
						<a href="index.html"><img src="{{site.logos}}" alt="" /></a>
					</div>
					<div class="search-form">
						<form>
							<input type="text" value="Search..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search...';}" required="">
						</form>
					</div>
					<div class="clearfix"> </div>
				</div>
</div>
