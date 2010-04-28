// ==========================================================================
// Project:   ModelEditor.propertyPaletteController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
ModelEditor.propertyPaletteController = SC.ArrayController.create(
  SC.CollectionViewDelegate,
/** @scope ModelEditor.propertyPaletteController.prototype */ {
  
  contentBinding: SC.Binding.transform(function(value){
        return value.toArray();
      }).from("ModelEditor.BasicPropertyConfig.propertySet"),
  //contentBinding: "ModelEditor.BasicPropertyConfig.propertyList",
  isEditable: NO,
  allowsMultipleSelection: NO,
  orderBy:"type",
  
  
  collectionViewDragDataTypes: function(view) { 
    SC.Logger.debug("PropertyPalette is returning it's drag data types.");
    return [ModelEditor.PropertyType];
  },
  
  collectionViewDragDataForType: function(view, drag, dataType) {
    SC.Logger.debug("PropertyPalette is returning data for a datatype.")
    SC.Logger.debug(drag);
    var ret=null;
    var selected=null;
    
    if(dataType === ModelEditor.PropertyType) {
      SC.Logger.debug("We are returning data for a PropertyType");
      selected = view.get('selection');
      ret = []
      if(selected)
        selected.forEach(function(x) { ret.push({type:x.type, name:"New Property", options:x.options}); }, this);
    }
    SC.Logger.debug("PropertyPalette is returning: ");
    SC.Logger.debug(ret);
    return ret;
  }

}) ;
