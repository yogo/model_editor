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
    ModelEditor.set('currentScene', 'modelsLoading');
    ModelEditor.sendAction('dataShouldBeReloaded');
  },
  
  willLoseFirstResponder: function() {
    ModelEditor.set('currentScene', null);
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  modelsDidChange: function() {
    if(ModelEditor.getPath('models.status') & SC.Record.READY) {
      console.log('switching to READY STATE');
      ModelEditor.makeFirstResponder(ModelEditor.READY);
      return YES;
    }
    return NO;
  }
  
}) ;
