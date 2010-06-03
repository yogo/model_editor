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
  
  icon: function() {
    var redIcon = static_url('icon-bullet_red-16'),
        greenIcon = static_url('icon-bullet_green-16'),
        orangeIcon = static_url('icon-bullet_orange-16'),
        errorIcon = static_url('icon-bullet_error-16');
        
    var status = this.get('status');
    
    if(status & SC.Record.READY) {
      if(status === SC.Record.READY_NEW) return redIcon;
      if(status === SC.Record.READY_DIRTY) return redIcon;
      if(status === SC.Record.READY_CLEAN) return greenIcon;
    }
    if((status & SC.Record.BUSY)) return orangeIcon;
    
    if((status & SC.Record.ERROR)) return errorIcon;
    return errorIcon;
  }.property('status').cacheable(),
  
  propertyCount: function() {
    return this.getPath('properties.length');
  }.property('properties').cacheable()
}) ;
