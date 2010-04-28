// ==========================================================================
// Project:   ModelEditor.PropertyEditView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
ModelEditor.PropertyEditView = SC.View.extend(
/** @scope ModelEditor.PropertyEditView.prototype */ {
  childViews: 'propertyNameField propertyTypeField'.w(),
  //nextKeyView: function(){ return this.get("propertyNameField") }.property(),
  //previousKeyView: function(){ return this.getPath("parentView.propertyTypeField") }.property(),
  
  
  // didBecomeKeyResponderFrom: function(sender) {
  //     this.get('nextKeyView').becomeKeyResponder();
  //   },
  
  propertyNameField: SC.TextFieldView.extend({
    layout: { top:10, left:10, right:10, height:30 },
    valueBinding: "ModelEditor.propertyController.name",
    nextKeyView: function(){ return this.getPath("parentView.propertyTypeField") }.property(),
    previousKeyView: function(){ return this.getPath("parentView.propertyTypeField") }.property(),
    //nextResponder: function() { return this.getPath("parentView.propertyTypeField") }.property()
  }),
  
  // propertyTypeField: SC.TextFieldView.extend({
  //     layout: { top:50, left:10, right:10, height:30},
  //     valueBinding: "ModelEditor.propertyController.propType"
  //   })
  
  propertyTypeField: SC.SelectFieldView.extend({
    layout: {top:50, left:10, right:10, height:30},
    valueBinding: "ModelEditor.propertyController.propType",
    objectsBinding: "ModelEditor.BasicPropertyConfig*propertyList",
    // objectsBindingDefault: SC.Binding.multiple(),
    nameKey: "type",
    valueKey: "type",
    nextKeyView: function(){ return this.getPath("parentView.propertyNameField") }.property(),
    previousKeyView: function(){ return this.getPath("parentView.propertyNameField") }.property(),
    //nextResponder: function() { return this.getPath("parentView.propertyNameField") }.property()
    
  })

});
