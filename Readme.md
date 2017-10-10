# Vue-Mover

A simple list picker vue-component, with drag and drop and sortable items.

> Note: this is a playground component as I'm experimenting and figuring out Vue. use at your own risk. Feedback welcome.

* [Try it out](https://rawgit.com/RickStrahl/vue-mover/master/moverComponentSample.html)

Support:

* Moving items between two list displays
* Drag and drop or use movers
* Drag and drop sorting

![](vue-mover.png)

### Syntax:
Inside of a Vue application use this markup:

```html
<script src="scripts/vue.min.js"></script>
<script src="scripts/Sortable.min.js"></script>    
<script src="vue-mover.js"></script>


<mover :left-items="selectedItems"
     :right-items="unselectedItems"
     titleLeft="Available Items"
     titleRight="Selected Items">
</mover>
```

where left and right items are properties on the view model.

To set up the model load:

```
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
  // demonstrate retrieving items
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
```

### Dependencies

* [font-awesome](http://fontawesome.io)
* [sortable js](http://rubaxa.github.io/Sortable/)


