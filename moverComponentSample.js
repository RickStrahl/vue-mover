var vm = {
  message: "Vue Mover Component Sample",
  unselectedItems: [
    {
        value: "vitem1",
        displayValue: "vItem 1",
        isSelected: false
    },
    {
        value: "vitem2",
        displayValue: "vItem 2",
        isSelected: true
    },
    {
        value: "vitem3",
        displayValue: "vItem 3",
        isSelected: false
    },
    {
        value: "vitem4",
        displayValue: "vItem 4",
        isSelected: false
    },
    {
        value: "vitem5",
        displayValue: "vItem 5",
        isSelected: false
    },
    {
        value: "vitem6",
        displayValue: "vItem 6",
        isSelected: false
    },
    {
        value: "vitem7",
        displayValue: "vItem 7",
        isSelected: false
    },
    {
        value: "vitem8",
        displayValue: "vItem 8",
        isSelected: false
    },
    {
        value: "vitem9",
        displayValue: "vItem 9",
        isSelected: false
    },
    {
        value: "vitem10",
        displayValue: "vItem 10",
        isSelected: false
    },
    {
        value: "vitem11",
        displayValue: "vItem 11",
        isSelected: false
    },
    {
        value: "vitem12",
        displayValue: "vItem 12",
        isSelected: false
    },
    {
        value: "vitem13",
        displayValue: "vItem 13",
        isSelected: false
    },
    {
        value: "vitem14",
        displayValue: "vItem 14",
        isSelected: false
    }


    
  ],
  unselectedSortable: null,
  selectedItems: [
    {
        value: "xitem3",
        displayValue: "xItem 3",
        isSelected: false
    },
    {
        value: "xitem4",
        displayValue: "xItem 4",
        isSelected: false
    },
    {
        value: "vitem5",
        displayValue: "vItem 5",
        isSelected: false
    }
  ],    

  saveItems: function() {
    var s = "";
           
    for (var i = 0; i < vm.selectedItems.length; i++) {
      var element = vm.selectedItems[i];
      s += element.displayValue + "\r\n";
    }

    alert('ready to save ' + vm.selectedItems.length + 
         ' items.\r\n' + s);
  }
} 


var app = new Vue({
      el: "#Body",
      data: function() { return vm; }
});

