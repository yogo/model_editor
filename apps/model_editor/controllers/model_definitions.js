// ==========================================================================
// Project:   ModelEditor.modelDefinitionsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
ModelEditor.modelDefinitionsController = SC.ArrayController.create(
/** @scope ModelEditor.modelDefinitionsController.prototype */ {
  
  allowsMultipleSelection: NO,
  orderBy:"name",
  newModelCount: 1,
  newModelName: "",
  
  
  showCreateModelView: function(sender) {
    // Prompt for Model Name
    var addPanel = ModelEditor.CreateModelPane.create({
      layout: {width:400, height:75, centerX:0, centerY:0},
    });
    addPanel.append();
  },
  
  createModel: function(sender) {
    var modelName = this.get('newModelName');
    this.set('newModelName', "");
    
    if(modelName.length === 0) return;
    
    try {
      var modelDef = ModelEditor.store.createRecord(ModelEditor.ModelDefinition, {
        guid: modelName.classify(),
        properties: []
      });
      
      var senderPane = sender.get('pane');
      senderPane && senderPane.remove();
    }
    catch(e) {
      alert("Duplication model name: " + modelName);
    }
  },
  
  cancelCreateModel: function(sender) {
    var senderPane = sender.get('pane');
    senderPane && senderPane.remove();
    this.set('newModelName', "");
  }

}) ;
