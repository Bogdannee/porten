if($(document).width() <= 768 ){
    $(document).ready(function() {
        const productItems = $(".our-brand").find(".our-brand__brands-img");
        const btNext = $('.bt-next2');
        const btPrev = $('.bt-prev2');
        const productItemsCount = productItems.length;
        let CurrentItem = 0;
        
        console.log(productItems);
        btNext.css("display","block");
        btPrev.css("display","block");
        $.each( productItems, function (index, item){
            if(index != 0){
                $(item).css({
                    display: 'none',
                });
            }
        });

        btNext.click(function(){

            if(CurrentItem == (productItemsCount-1)){
                btNext.prop('disabled');
                btNext.css("opacity","0");
            }
            else{
                CurrentItem++;
                btNext.css("opacity","1");
            }
            Controlslides();
            checkBtns();
        
        });

        btPrev.click(function(){
            if(CurrentItem == 0){
                btPrev.css("opacity","0");
                btPrev.prop('disabled');
            }
            else{
                CurrentItem--;
                btPrev.css("opacity","1");
            }
            Controlslides1();
            checkBtns();
            
        });

        const Controlslides = () =>{
            $.each( productItems, function (index, item){
                if(index == (CurrentItem-1)){
                    $(item).css({
                        display: 'none',
                    });
                }
                if(index == CurrentItem){
                    $(item).css({
                        display: 'inline-block',
                    });
                }
            });
        };

        const Controlslides1 = () =>{
            $.each( productItems, function (index, item){
                if(index == (CurrentItem+1)){
                    $(item).css({
                        display: 'none',
                    });
                }
                if(index == CurrentItem){
                    $(item).css({
                        display: 'inline-block',
                    });
                }
            });
        };
        const checkBtns = () =>{
            if(CurrentItem == (productItemsCount-1)){
                btNext.prop('disabled');
                btNext.css("opacity","0");
            }
            else{
                btNext.css("opacity","1");
            }
            if(CurrentItem == 0){
                btPrev.css("opacity","0");
                btPrev.prop('disabled');
            }
            else{
                btPrev.css("opacity","1");
            }
        };
        checkBtns();


    });
}
