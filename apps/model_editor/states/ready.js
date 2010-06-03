// ==========================================================================
// Project:   ModelEditor.READY
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

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
  nextResponder: null,
  nextKeyView: 'ModelEditor.currentScene',
  
  didBecomeFirstResponder: function() {
    ModelEditor.set('currentScene', 'ModelEditor.modelBrowser.mainView');
  },
  
  willLoseFirstResponder: function() {
    ModelEditor.set('currentScene', null);
  },
  
  // ..........................................................
  // EVENTS
  //
  
  keyDown: function(sender, evt) {
    SC.Logger.info(evt);
    if(evt.ctrlKey) {
      if(SC.PRINTABLE_KEYS[evt.keyCode] == "n") {
        alert("You pressed CTRL-n !");
        return YES;
      }
    }
    return NO;
  },
  
  addModel: function(sender) {
    var addPanel = ModelEditor.CreateModelPane.create({
      layout: {width:400, height:75, centerX:0, centerY:0},
    });
    addPanel.append();
    
    return YES;
  },
  
  // add event handlers here
  currentModelDidChange: function() {
    SC.Logger.info("currentModelDidChange");
    if(ModelEditor.getPath('modelDefinitionController.content')) {
      ModelEditor.makeFirstResponder(ModelEditor.EDIT);
      return YES;
    }
    return NO;
  }
  
}) ;
