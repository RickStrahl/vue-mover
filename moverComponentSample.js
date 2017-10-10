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

