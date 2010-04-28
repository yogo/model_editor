// ==========================================================================
// Project:   ModelEditor.ModelNameEdit
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
ModelEditor.ModelNameEdit = SC.View.extend(
/** @scope ModelEditor.ModelNameEdit.prototype */ {

  childViews: 'modelNameField'.w(),
  modelNameField: SC.TextFieldView.extend({
    layout: { top:10, left:10, right:10, bottom:10 },
    valueBinding: "ModelEditor.modelDefinitionController.name"
  })

});
