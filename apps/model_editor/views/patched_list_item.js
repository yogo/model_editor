// ==========================================================================
// Project:   ModelEditor.PatchedListItemView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your View Here)

  @extends SC.ListItemView
*/
ModelEditor.PatchedListItemView = SC.ListItemView.extend(
/** @scope ModelEditor.PatchedListItemView.prototype */ {

  inlineEditorShouldBeginEditing: function(){ return YES; }

});
