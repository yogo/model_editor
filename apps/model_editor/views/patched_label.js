// ==========================================================================
// Project:   ModelEditor.PatchedLabelView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your View Here)

  @extends SC.LabelView
*/
ModelEditor.PatchedLabelView = SC.LabelView.extend(
/** @scope ModelEditor.PatchedLabelView.prototype */ {

  inlineEditorShouldBeginEditing: function(){ return YES; }

});
