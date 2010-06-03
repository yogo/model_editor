// ==========================================================================
// Project:   ModelEditor.PropertyListItemView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
ModelEditor.PropertyListItemView = SC.ListItemView.extend(
/** @scope ModelEditor.PropertyListItemView.prototype */ {

  renderAction: function(context, actionClassName) {
    context.push('<span>Action</span');
  }

});
