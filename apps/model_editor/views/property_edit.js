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
  
  
  acceptsFirstResponder: YES,
  
  isEnabledBinding: "ModelEditor.propertyController.content",
  isEnabledBindingDefault: SC.Binding.bool(),
  
  propertyNameField: SC.TextFieldView.extend({
    layout: { top:10, left:15, right:15, height:25 },
    valueBinding: "ModelEditor.propertyController.name",
    isEnabledBinding: ".parentView.isEnabled"
  }),
  
  
  propertyTypeField: SC.SelectButtonView.extend({
    layout: {top:40, left:15, right:15},
    theme: 'capsule',
    valueBinding: "ModelEditor.propertyController.propType",
    objectsBinding: "ModelEditor.BasicPropertyConfig*propertyList",
    isEnabledBinding: ".parentView.isEnabled",
    iconKey: "icon",
    nameKey: "type",
    valueKey: "type",
    checkboxEnabled: YES
    
  })

});
