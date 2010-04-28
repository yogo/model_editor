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
  addModel: function() {
    var count = this.get('newModelCount');
    var modelDef = ModelEditor.store.createRecord(ModelEditor.ModelDefinition, {
      name:"New Model " + count
    });
    this.selectObject(modelDef);
    this.set('newModelCount', count + 1);
    
    this.invokeLater(function() {
      var contentIndex = this.indexOf(modelDef);
      SC.Logger.debug(contentIndex);
      var modelList = ModelEditor.mainPage.getPath("mainPane.sideView.modelListView.contentView");
      SC.Logger.debug(modelList);
      var listItem = modelList.itemViewForContentIndex(contentIndex);
      SC.Logger.debug(listItem);
      //SC.Logger.debug(listItem.beginEditing());
      ModelEditor.modelDefinitionController.editModelName();
    });
    return YES;
  }

}) ;
