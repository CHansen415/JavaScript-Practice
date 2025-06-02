function subscribe(){
            const buttonElement = document.querySelector('.js-ytSub-Button');

            if(buttonElement.innerText === 'Subscribe'){
                buttonElement.innerHTML = 'Subscribed';
                buttonElement.classList.add('is-subscribed');
            }
            else{
                buttonElement.innerHTML = 'Subscribe';
                buttonElement.classList.remove('is-subscribed');
            }
        }

        function  calc_total(){
           const inputVal = document.querySelector('.js-cost-input');
           let cost = Number(inputVal.value);
           if(cost < 40){
            cost = cost + 5;
           }
           document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
        }

        function handleCost(event){
            if(event.key === 'Enter'){
            calc_total();
            }
        }