
//BudgetContrller
var budgetConroller = (function() {
    
    var Expence = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var data = {
      allItems : { 
        exp : [],
        inc : []
      },
    totls : {
        exp 
    } 
        
    };

        
})();




//UIController
var UIController = (function(){
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    };
    
    return{
      getInput : function (){
          
          return {
              type : document.querySelector(DOMStrings.inputType).value,
              description : document.querySelector(DOMStrings.inputDescription).value,
              value : document.querySelector(DOMStrings.inputValue).value              
          };
      },
        
        getDOMString : function(){
            return DOMStrings;
        }
     
    };
    
    
})();



//Gobel app controller
var controller = (function(budgetCtrl,UICtrl){
    
    
    var setupEventListeners = function(){
      var DOM = UICtrl.getDOMString();    
      document.querySelector(DOM.inputBtn).addEventListener('click', function(){
        ctrlAddItem();
    });
    // this event for when enter buttion pressed
    document.addEventListener('keypress', function(event){
        if( event.keyCode === 13 || event.which ===13){
            ctrlAddItem();
        }
        
    });      
        
    };
    
    
    var ctrlAddItem = function(){
        var input = UICtrl.getInput();
        console.log(input);
        
        //1. get the feald data
        //2. add the item to budgetController
        //3. add the item to user interface
        //4. caluclulate the budget
        //5. disply the budget
    }
    
    //apllication intilizatior
    return {
        init : function() {
            setupEventListeners();
        }
    }
    
                                   
                                              
})(budgetConroller,UIController);


controller.init();