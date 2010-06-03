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
  
}) ;
