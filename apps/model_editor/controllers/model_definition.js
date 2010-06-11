// ==========================================================================
// Project:   ModelEditor.modelDefinitionController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
ModelEditor.modelDefinitionController = SC.ObjectController.create(
/** @scope ModelEditor.modelDefinitionController.prototype */ {
  
  contentBinding: 'ModelEditor.modelDefinitionsController.selection',
  contentBindingDefault: SC.Binding.single(),
  
  _currentModelDidChange: function() {
    ModelEditor.sendAction('currentModelDidChange');
  }.observes('content'),
    
  editModelName: function(sender) {
    var model = this.get('content');

    var contentIndex = ModelEditor.modelDefinitionsController.indexOf(model);
    var modelList = ModelEditor.mainPage.getPath("mainPane.sideView.modelListView.contentView");
    var listItem = modelList.itemViewForContentIndex(contentIndex);
    var nameEditor = ModelEditor.ModelNameEdit.extend({});
    SC.PickerPane.create({
      layout: {width:150, height:40},
      contentView: nameEditor
    }).popup(listItem, SC.PICKER_POINTER, [3,0,1,2,3]);
    //nameEditor.becomeFirstResponder();
  },
  
  deleteModel: function() {
    SC.Logger.debug("Deleting model");
    var modelDef = this.get('content');
    SC.Logger.debug(modelDef);
    SC.Logger.debug("showing alert pane");
    SC.AlertPane.warn("Delete: " + modelDef.get('name') + "?",
                      "This operation will be performed immediately, and cannot be un-done!", null,
                      "Delete Model", "Don't Delete", null,
                      this);
  },
  
  alertPaneDidDismiss: function(pane, status) {
    if(status === SC.BUTTON1_STATUS) {
      var modelDef = this.get('content');
      SC.Logger.debug("Destroying model: " + modelDef.get('name'));
      this.set('content', null);
      modelDef.destroy();
      modelDef.commitRecord();
    }
  },
  
  debugModelDefinition: function() {
    var model = this.get('content');
    if(model) {
      SC.AlertPane.info(model.get('name'), "Raw Model Definition",
                        JSON.stringify(model.get('readOnlyAttributes')),
                        "OK");
    }
  }
});
