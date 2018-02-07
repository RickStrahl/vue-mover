# Vue-Mover

A simple list picker vue-component, with drag and drop and sortable items. Uses sortable.js for the 


* [Try it out](https://rawgit.com/RickStrahl/vue-mover/master/moverComponentSample.html)

Support:

* Moving items between two list displays
* Drag and drop or use movers
* Drag and drop sorting

![](vue-mover.png)

@icon-info-circle


### Syntax:
Inside of a Vue application use this markup:

```html
<script src="scripts/vue.min.js"></script>
<script src="scripts/Sortable.min.js"></script>    
<script src="vue-mover.js"></script>

<mover 
     target-id="MyMover"
     :left-items="selectedItems"
     :right-items="unselectedItems"
     title-left="Available Items"
     title-right="Selected Items"
     moved-item-location="top | bottom"
     @item-moved="itemMovedHandler"
     >
</mover>
```

where **left** and **right** items are array properties on the view model.

To set up the model load:

```
var vm = {
  pageTitle: "Vue Mover Component Sample",
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

### Multiple Movers
You can drop multiple movers on the page. If you do be sure to give each mover a seperate `target-id` and a `group-name`:

```html
<mover :left-items="unselectedItems2" 
       :right-items="selectedItems2"
       target-id="Mover2"></mover>  
```

`targetId` is required for a second mover to ensure that each gets its own unique scope.

### Use without Font-Awesome
By default the mover uses Font-Awesome icons for the mover buttons. If you don't use Font Awesome in your app and you don't want to add it, you can turn off use of Font awesome with:

```html
<mover :font-awesome=false></mover>
```

Note the binding requirement (:) in front.

### Styling
You can override the styling of the various styles in the `vue-mover.css` style sheet. The mover overall should be self contained, but the height is probably one you'll want to adjust:

```html
<style>
    /* override panel height */
    #Mover .mover-panel {
        height: 500px;
    }
    #Mover2 .mover-panel {
        height: 300px;
    }
</style>
```

If you have multiple movers prefix your tags with the mover's target id to keep the CSS separate. The default ID is `Mover`.

#### `item-moved` Event
The component fires an ItemMoved event which is fired when an item is moved from left to right or right to left. The event is hooked up with:

```
@item-moved="itemMovedHandler"
```

which should be mapped to a method on your model:

```js
itemMovedHandler: function(itemMovedInfo) {
    var item = itemMovedInfo.item;          // the item that was moved
    var list = itemMovedInfo.targetList;    // list that was updated
    var type = itemMovedInfo.listType       // "left", "right"
}
```


### Dependencies

* [font-awesome](http://fontawesome.io)
* [sortable js](http://rubaxa.github.io/Sortable/)

### Build
Output is built with WebPack.

To build use:

```
npm run build
```

### License

Licensed under the MIT License. There's no charge to use, integrate or modify the code for this project. You are free to use it in personal, commercial, government and any other type of application.

All source code is copyright © Rick Strahl, West Wind Technologies, regardless of changes made to them. Any source code modifications must leave the original copyright code headers intact.

Warranty Disclaimer: No Warranty!

IN NO EVENT SHALL THE AUTHOR, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE THIS PROGRAM AND DOCUMENTATION, BE LIABLE FOR ANY COMMERCIAL, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR LOSSES SUSTAINED BY THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS, EVEN IF YOU OR OTHER PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

### Change Log

#### 0.3.2

* **Add `item-moved` Event**  
Add `item-moved` event that captures an object that returns the item moved, the target list it was dropped into and the list type (left or right).

#### 0.3.0

* **Add moved-item-location Attribute**   
Added an `move-item-location` Attribute that determines whether items that are moved using the mover buttons are added at the `top` of `bottom` of the individual lists.