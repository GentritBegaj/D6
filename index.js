
        function changeH1Text () {
            document.querySelector('h1').innerText = "Changed Text";
        }

        function changeBackground() {
            document.querySelector('body').style.backgroundColor = "lightblue";
        }

        function changeAddress () {
            document.querySelector('address').innerText = "37 Fake Address, Winter Wonderland"
        }

        function addClass() {
            let links = document.getElementsByTagName('a');
            for (let i = 0; i < links.length; i++) {
                links[i].classList.add('amazon-link');
            }
        }

        function toggleClass() {
            let images = document.getElementsByTagName('img');
            for(let i = 0; i < images.length; i++) {
                images[i].classList.toggle('visibility')
            }
            
        }

        function changePriceColor () {
            let price = document.querySelectorAll('td:last-child');
            for(let i = 0; i < price.length; i++) {
                let randomNumber = Math.floor(Math.random() * 0xfffff * 1000000).toString(16);
                let randomColor = "#" + randomNumber.slice(0,6);
                price[i].style.color = randomColor;
            }
        }
