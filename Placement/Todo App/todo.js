let todoList = [ 
    {
        item:'Practice Javascript' ,
         dueDate:'4/10/2025'
        },
    {
        item:'Running',
        dueDate:'4/10/2025'
         }
     ];                                           //global structure chhiye jaha pe sari todo list maintain kr sake 

displayItems();                                    //yeh displayitems do jagah call krenge ek to jab page load ho tab aur ek jab koi bhi naya item add kre tab




function addTodo()
{
     let inputElement = document.querySelector('#todo-input');
     let dateElement  = document.querySelector('#todo-date');



    // let inputElement = document.querySelectorAll('#todo-input'); note id selector krne ke lie document.query selector hi krengebecause all krenge to output undefined de dega wo
    
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

     todoList.push({ item: todoItem,dueDate:todoDate});      //ab jitne bhi todoItem mai hai hum add kr rhe hai wo todolist array me store hote jare hai 
   
     inputElement.value = '';
     dateElement.value = '';       //ab inputelement me jo value hum add kr rhe hai wo wha se gayab hokar store ho jayegi
     displayItems();
      }
    // console.log(todoItem);


  //div element me jo container element bnya usko nikal lia document.queryselector lga kr jiski class dedi todocontainer
   
   function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    
    
   //yah pe ek naya string bnayaa newhtml naam ka uske bd interate krna chalu kia todolist mai  puri todolist mei kitni baar chalega jitni bhi todoitems hige list me utni baar chalega 
   //button onclick me do statement ko execute kia koi delete press krta hai to usi index wale  item ko delete kia aur dusra ddisplayitem ko dobara call kiataki jo updated list hai usko dobara hum call kr paye
   // aur har kya hota hai yeh containerelement.innerhtml ko replace kr dete hai newhtml se
   let newHtml ='';

    for (let i = 0; i < todoList.length; i++){
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        let {item , dueDate} = todoList[i];    // yeh object destructuring kra 
         newHtml += `
        
         <span>${item}</span>
          <span>${dueDate}</span>
         <button class='btn-delete' onclick="todoList.splice(${i},1);    
         displayItems();">Delete</button> 
       
         `;
         }
     containerElement.innerHTML = newHtml;
      }
  

