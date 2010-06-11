// ==========================================================================
// Project:   ModelEditor.modelPropertiesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
ModelEditor.modelPropertiesController = SC.ArrayController.create(
  SC.CollectionViewDelegate,
/** @scope ModelEditor.modelPropertiesController.prototype */ {

  // TODO: Add your own code here.
  modelDefinitionBinding: "ModelEditor.modelDefinitionController.content",
  contentBinding: "*modelDefinition.properties",
  rawProperties: "*content.editableChildren",
  
  replace: function(start, amt, objects){
    rawObjects = objects.map(function(rec) {
      if(rec.get && rec.get('isChildRecord')) {
        rec = rec.get('attributes');
      }
      return rec;
    });
    arguments.callee.base.apply(this, [start, amt, rawObjects]);
    return this;
  },
  
  addProperty: function(sender, args) {
    SC.Logger.debug("adding Property!");
    var type = (args.type || "Text");
    this.addObject({type:type, name:"New "+ type +" Property"});
  },
  
  deleteProperty: function(sender) {
    var props = this.get('selection');
    if(props) props.forEach(function(p) { this.removeObject(p) }, this);
  },
  
  editProperty: function(sender) {
    var prop = this.get('selection').firstObject();
    SC.Logger.debug("Editing property");
    SC.Logger.debug(prop);
    var contentIndex = this.indexOf(prop);
    SC.Logger.debug(contentIndex);
    var propList = ModelEditor.mainPage.getPath("mainPane.centerView.propertyListView.contentView");
    SC.Logger.debug(propList);
    var listItem = propList.itemViewForContentIndex(contentIndex);
    SC.Logger.debug(listItem.get('layer'));
    var editView = ModelEditor.PropertyEditView.extend({});
    var pane = SC.PickerPane.create({
      layout: {width:200, height:100},
      contentView: editView
    });
    pane.popup(listItem, SC.PICKER_POINTER, [3,0,1,2,3]);
    // pane.get('contentView').becomeFirstResponder();
    //     console.debug(pane.getPath('contentView.nextKeyView'));
    //     console.debug(pane.getPath('contentView.propertyNameField.nextKeyView'));
  },
  
  collectionViewComputeDragOperations: function(view, drag, proposedDragOps) {
    SC.Logger.debug("Property List is computing drag op.")
    if(drag.hasDataType(ModelEditor.PropertyType)) {
      var source = drag.get('source');
      SC.Logger.debug("Properties List decided this is a DRAG_COPY.");
      return SC.DRAG_COPY;
    }
    
    return SC.DRAG_MOVE;
  },
  
  // collectionViewValidateDragOperation: function(view, drag, dragOp, idx, dropOp) {
  //   if(view.kindOf(SC.TableView)) {
  //     SC.Logger.debug("Handling for TableView");
  //     view.set('proposedInsertionIndex', idx+1); // Need to account for the header row
  //     view.set('proposedDropOperation', SC.DROP_BEFORE);
  //   }
  //   return dragOp;
  // },
  
  collectionViewPerformDragOperation: function(view, drag, dragOp, idx, dropOp) {
    var propertyType  = drag.dataForType(ModelEditor.PropertyType),
        content       = view.get('content'),
        len           = view.get('length'),
        source        = drag.get('source'),
        ret           = SC.DRAG_NONE;
        
    SC.Logger.debug("Property List is recieving a drop!");
    SC.Logger.debug(propertyType);
    SC.Logger.debug(source.get('dragContent'));
    SC.Logger.debug(arguments);
    
    
    if (!propertyType) return ret;
    
    if(dropOp & SC.DROP_AFTER) idx++;
    if(idx>len) idx = len;
    content.replace(idx, 0, propertyType);
    
    view.select(SC.IndexSet.create(idx, 1));
    view.becomeFirstResponder();
    
    return ret;
  }
  
  
  
  
  
}) ;
