// ==========================================================================
// Project:   ModelEditor.EDIT
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

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
  nextResponder: ModelEditor.READY,
  
  didBecomeFirstResponder: function() {
    ModelEditor.set('currentScene', 'ModelEditor.modelBrowser.mainView');
    ModelEditor.set('modelDetailView', 'ModelEditor.propertyBrowser.mainView');
    // ModelEditor.set('currentToolbarView', 'ModelEditor.propertyBrowser.propertyToolbar');
  },
  
  willLoseFirstResponder: function() {
    ModelEditor.set('currentScene', null);
    ModelEditor.set('modelDetailView', null);
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  currentModelDidChange: function() {
    SC.Logger.info("currentModelDidChange");
    if(!ModelEditor.getPath('modelDefinitionController.content')) {
      ModelEditor.makeFirstResponder(ModelEditor.READY);
      return YES;
    }
    return NO;
  }
  
}) ;
