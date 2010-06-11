// ==========================================================================
// Project:   ModelEditor.EDIT
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */
sc_require('states/models.js');

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
ModelEditor.EDIT = SC.Responder.create(
/** @scope ModelEditor.EDIT.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: ModelEditor.MODELS,
  
  didBecomeFirstResponder: function() {
    SC.Logger.info("-> EDIT");
    ModelEditor.set('currentScene', 'ModelEditor.modelBrowser.mainView');
    ModelEditor.set('modelDetailView', 'ModelEditor.propertyBrowser.mainView');
    ModelEditor.getPath('mainPage.mainPane').becomeFirstResponder();
  },
  
  willLoseFirstResponder: function() {
    SC.Logger.info("EDIT ->");
    ModelEditor.set('currentScene', null);
    ModelEditor.set('modelDetailView', null);
  },
  
  // ..........................................................
  // EVENTS
  //
  
  
  
  // add event handlers here
  currentModelDidChange: function() {
    SC.Logger.info("EDIT: currentModelDidChange");
    if(!ModelEditor.getPath('modelDefinitionController.content')) {
      ModelEditor.makeFirstResponder(ModelEditor.READY);
      return YES;
    }
    else {
      return YES; // stay in edit state
    }
  }
  
}) ;
