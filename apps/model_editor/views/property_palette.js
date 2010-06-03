// ==========================================================================
// Project:   ModelEditor.PropertyPalette
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
ModelEditor.PropertyPalette = SC.ScrollView.extend({
  contentView: SC.SourceListView.extend({
    contentBinding: "ModelEditor.propertyPaletteController.arrangedObjects",
    contentValueKey: "type",
    hasContentIcon: YES,
    contentIconKey: "icon",
    selectOnMouseDown: YES,
    isEnabledBinding: SC.Binding.from("ModelEditor.modelDefinitionsController.selection").notEmpty()
  })
});
