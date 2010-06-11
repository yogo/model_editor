// ==========================================================================
// Project:   ModelEditor.READY
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */
sc_require('states/models.js');

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
ModelEditor.READY = SC.Responder.create(
/** @scope ModelEditor.READY.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: ModelEditor.MODELS,
  
  didBecomeFirstResponder: function() {
    SC.Logger.info("-> READY");
    ModelEditor.set('currentScene', 'ModelEditor.modelBrowser.mainView');
    ModelEditor.set('modelDetailView', 'ModelEditor.modelBrowser.browserWelcomeView');
    ModelEditor.getPath('mainPage.mainPane').becomeFirstResponder();
  },
  
  willLoseFirstResponder: function() {
    SC.Logger.info("READY ->");
    ModelEditor.set('currentScene', null);
    ModelEditor.set('modelDetailView', null);
  },
  
  // ..........................................................
  // EVENTS
  //
  
  
  
  // add event handlers here
  currentModelDidChange: function() {
    SC.Logger.info("READY: currentModelDidChange");
    if(ModelEditor.getPath('modelDefinitionController.content')) {
      ModelEditor.makeFirstResponder(ModelEditor.EDIT);
      return YES;
    }
    else {
      ModelEditor.makeFirstResponder(this);
      return YES; // stay in ready state
    }
  }
  
}) ;
