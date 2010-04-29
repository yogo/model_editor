// ==========================================================================
// Project:   ModelEditor.CreateModelPane
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your View Here)

  @extends SC.PanelPane
*/
ModelEditor.CreateModelPane = SC.PanelPane.extend(
/** @scope ModelEditor.CreateModelPane.prototype */ {

  contentView: SC.View.extend({    
    childViews: 'modelNameLabel modelNameField cancelButton createButton'.w(),
    
    modelNameLabel: SC.LabelView.extend({
      layout: {left:10, top:10, width:90, height:20},
      value: "Model Name"
    }),
    modelNameField: SC.TextFieldView.extend({
      layout: {left:105, top:10, right:10, height:20},
      valueBinding: "ModelEditor.modelDefinitionsController.newModelName"
    }),
    createButton: SC.ButtonView.extend({
      layout: {right:10, top:40, width:100},
      title: "Create Model",
      isEnabledBinding: SC.Binding.from("ModelEditor.modelDefinitionsController.newModelName").bool(),
      target: "ModelEditor.modelDefinitionsController",
      action: "createModel"
    }),
    cancelButton: SC.ButtonView.extend({
      layout: {right:120, top:40, width:75},
      title: "Cancel",
      target: "ModelEditor.modelDefinitionsController",
      action: "cancelCreateModel"
    })
  })

});
