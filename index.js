 let addBtn = document.querySelector("#add_btn");
          // let inputData =document.querySelector("in")

          addBtn.addEventListener('click',addUser)
          let listMenu = document.getElementById('listMenu');
          function addUser(e){
            // console.log(e)
            let currentBtn = e.currentTarget;
            // console.log(currentBtn)
            let currentInput = currentBtn.previousElementSibling;
            let currentUserName = currentInput.value;
            // console.log(currentInput.value)
            let newLi = document.createElement('li')
            newLi.className = "list-group-item d-flex justify-content-between";
            newLi.innerHTML = `<h2>${currentUserName}</h2>
                    <button class="btn btn-outline-danger" onclick="removeUser(this)">Remove</button>`
            
          
          listMenu.appendChild(newLi);
          }
          function removeUser(e){
            e.parentElement.remove();
            if(listMenu.children.length <=0){
              let newMsg = document.createElement('h1');
              newMsg.textContent="cart khatam";
              listMenu.appendChild(newMsg);
            }

            
          }