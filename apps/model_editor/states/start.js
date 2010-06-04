// ==========================================================================
// Project:   ModelEditor.START
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
ModelEditor.START = SC.Responder.create(
/** @scope ModelEditor.START.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    SC.Logger.info("-> START");
    ModelEditor.set('currentScene', 'modelsLoading');
    ModelEditor.sendAction('dataShouldBeReloaded');
  },
  
  willLoseFirstResponder: function() {
    SC.Logger.info("START ->");
    ModelEditor.set('currentScene', null);
  },
  
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  modelsDidChange: function() {
    var status = ModelEditor.getPath('models.status');
    if(status & SC.Record.READY) {
      ModelEditor.makeFirstResponder(ModelEditor.READY);
      return YES;
    }
    else if(status & SC.Record.ERROR) {
      ModelEditor.makeFirstResponder(ModelEditor.ERROR);
      return YES;
    }
    return NO;
  }
  
}) ;
