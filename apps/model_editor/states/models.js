// ==========================================================================
// Project:   ModelEditor.MODELS
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
ModelEditor.MODELS = SC.Responder.create(
/** @scope ModelEditor.MODELS.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    // Called when this state becomes first responder
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  addModel: function(sender) {
    var addPanel = ModelEditor.CreateModelPane.create({
      layout: {width:400, height:75, centerX:0, centerY:0},
    });
    addPanel.append();
    
    return YES;
  },
  
  removeModel: function(sender) {
    SC.Logger.info("removeModel");
    ModelEditor.modelDefinitionController.deleteModel();
    return YES;
  },
  
  modelsDidChange: function() {
    if(status & SC.Record.ERROR) {
      ModelEditor.makeFirstResponder(ModelEditor.ERROR);
      return YES;
    }
    return NO;
  },
  
  showPropertyPalette: function(sender, args) {
    SC.PickerPane.create({
      layout: { width:200, height:300 },
      contentView: ModelEditor.PropertyPalette,
    }).popup(sender /*, SC.PICKER_POINTER, [3,0,1,2,3]*/);
    return YES;
  },
  
  addPropertyMenu: function(sender, args) {
    var menu = SC.MenuPane.create({
      layout:{width:150, height:300},
      items: ModelEditor.BasicPropertyConfig.get('propertyList'),
      itemIconKey: "icon",
      itemValueKey: "type",
      itemTitleKey: "type",
      itemActionKey: "action"
    });
    menu.popup(sender, SC.PICKER_POINTER);
    menu.becomeFirstResponder();
    return YES;
  },
  
  addProperty: function(sender) {
    ModelEditor.modelPropertiesController.addProperty(sender, sender.getPath('content'));
    return YES;
  },
  
  removeProperty: function(sender) {
    ModelEditor.modelPropertiesController.deleteProperty();
    return YES;
  },
  
  
}) ;
