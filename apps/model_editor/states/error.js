// ==========================================================================
// Project:   ModelEditor.ERROR
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
ModelEditor.ERROR = SC.Responder.create(
/** @scope ModelEditor.ERROR.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    SC.Logger.info("-> ERROR");
    ModelEditor.set('currentScene', 'errorLoading');
  },
  
  willLoseFirstResponder: function() {
    ModelEditor.set('currentScene', null);
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  
}) ;
