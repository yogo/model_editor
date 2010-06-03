// ==========================================================================
// Project:   ModelEditor.ModelDefinition
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
ModelEditor.ModelDefinition = SC.Record.extend(
/** @scope ModelEditor.ModelDefinition.prototype */ {
  //childRecordNamespace: ModelEditor,
  
  properties: SC.Record.toMany("ModelEditor.ModelProperty", {nested: YES}),
  
  name: function() {
    var id = this.get('id');
    return id.humanize().titleize();
  }.property('id').cacheable(),
  
  //icon: "sc-icon-folder-16",
  icon: function() {
    var status = this.get('status');
    if((status & SC.Record.CLEAN)) return static_url('icon-bullet_green-16');
    if((status & SC.Record.BUSY)) return static_url('icon-bullet_orange-16');
    if((status & SC.Record.DIRTY)) return static_url('icon-bullet_red-16');
    if((status & SC.Record.ERROR)) return static_url('icon-bullet_error-16');
    return static_url('icon-bullet_black-16');
  }.property('status').cacheable(),
  
  propertyCount: function() {
    return this.getPath('properties.length');
  }.property('properties').cacheable()
}) ;
