window.onload = function(){
console.log('test');
                                        var canvas = document.getElementById("Canvas2");  
                                        var stage = new createjs.Stage(canvas);

                                        //create Graphic
                                        var shape = new createjs.Shape();

                                        //draw shape here
                                        //prefix is shape.graphics
                                        shape.graphics.f("rgba(58,241,78,254)").ss(7).s("rgba(221,243,4,254)").p("EBZEBS0YAAA8g8A8g8AAMgyKAAAYhGAAgyg8AAg8MAAAgq+YAAhGAygyBGAAMAyKAAAYA8AAA8AyAABGMAAAAq+").cp().ef().es().f("rgba(250,0,104,254)").ss(2).s("rgba(0,255,255,254)").p("EA88BJIIpipOYgKgKjSi+AAjwYAAkYCqi0EsAAYCqAACgCMBQBQYBGhQCgiMCqAAYEsAACqC0AAEYYAADwjSC+gKAKIpiJOYgKAKgUAAgKAAYgUAAgUAAgKgK").cp().ef().es();

                                        stage.addChild(shape);
                                        stage.update();
                                       }