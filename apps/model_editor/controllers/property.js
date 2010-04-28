// ==========================================================================
// Project:   ModelEditor.propertyController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
ModelEditor.propertyController = SC.ObjectController.create(
/** @scope ModelEditor.propertyController.prototype */ {  
  contentBinding: "ModelEditor.modelPropertiesController.selection",
  contentBindingDefault: SC.Binding.single(),
  
  
  
  // propType: function(key, value) {
  //   var rec = this.get('content');
  //   if(!rec) return null;
  //   if(value !== undefined) {
  //     rec.beginEditing();
  //     var attr = rec.get('attributes');
  //     attr['type'] = value;
  //     rec.endEditing();
  //     return this;
  //   }
  //   else {
  //     var attr = rec.get('readOnlyAttributes');
  //     return attr['type'];
  //   }
  //   
  // }.property(),
  
  //propertyNameBinding: "*content.name",
  //propertyTypeBinding: "*content.type",
  // propertyName: function(key, value) {
  //   var prop = this.get('content');
  //   
  //   if(value !== undefined) {
  //     this.propertyWillChange('content');
  //     prop.name = value;
  //     this.propertyDidChange('content');
  //   }
  //   else {
  //     return prop && prop.name;
  //   }
  // }.property('content').cacheable(),
  // 
  // propertyType: function(key, value) {
  //   var prop = this.get('content');
  //   
  //   if(value !== undefined) {
  //     this.propertyWillChange('content');
  //     prop.type = value;
  //     this.propertyDidChange('content');
  //   }
  //   else {
  //     return prop && prop.type;
  //   }
  // }.property(),
  //   propertyTypeBinding: "*content.type",
  
  // editProperty: function() {
  //     SC.Logger.debug("Editing Property:");
  //     SC.Logger.debug(this.get('content'));
  //   }
  
  editProperty: function(sender) {
    // var prop = this.get('content');
    // SC.Logger.debug(prop);
    
    // SC.PanelPane.create({
    //       layout: { width:400, height:200, centerX:0, centerY:0},
    //       contentView: ModelEditor.PropertyEditView.extend({})
    //     }).append();
    var editView = ModelEditor.PropertyEditView.extend({});
    SC.PickerPane.create({
            layout: {width:350, height:200},
            contentView: ModelEditor.PropertyEditView.extend({}),
          }).popup(sender, SC.PICKER_POINTER, [3,0,1,2,3]);
    // editView.becomeFirstResponder();
    //     editView.becomeKeyResponder();
  },
}) ;
