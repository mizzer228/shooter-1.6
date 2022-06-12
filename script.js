let shot = document.querySelector(".shot");

let hit = document.querySelector(".hit");

document.body.addEventListener('click', shooting );

count = document.querySelector('.count strong'),

count_can = document.querySelector('.count_can strong'),

score = document.querySelector('.score strong'),

counter = 0,

counter_can = 0;

    function shooting(e){

   

    if(counter_can==10){
        alert("Игра закончена.Вы набрали "+ counter + " Баллов")
        location.reload();
       }



    let el= e.target;

        if(el.classList.contains("jar")) {
        
        el.classList.add("die");

        hit.play()

        counter++;
        count.textContent = counter;

 
        } else 
        {
    
        shot.play();

        }





        if(el.classList.contains("die")) {

        setTimeout(replay,400);

        }


        } 



        function load()  {     

        counter_can++;

        count_can.textContent = counter_can;

    let element = document.querySelector(".jar");
    
    
    new Jump(element).Run(18, 23, 0, -0.5 );
    
}

    function Jump(element)
    {   
    this.X = 0;
    this.Y = 0;
    this.Element = element;
    this.Refresh();
   
    }


        Jump.prototype.Run = function (ux, uy, xF, yF)
    {
    var self = this;

    var tID = setInterval(function ()
    {
        self.X += ux;
        self.Y += uy;
        ux += xF;
        uy += yF;
      
        self.Refresh();
      
        if (self.Y < 0)
        
            clearInterval(tID);

    }, 13);

}

Jump.prototype.Refresh = function ()
{
    this.Element.style.left = this.X + "px";
    this.Element.style.bottom = this.Y + "px";

}


   function replay() {
    let died = document.querySelectorAll('.jar');
    died.forEach(function(item){
     item.classList.remove('die');
    
    });
  
    load()

   }
   

