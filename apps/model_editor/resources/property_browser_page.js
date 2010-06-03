// ==========================================================================
// Project:   ModelEditor.propertyBrowser
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This page describes a part of the interface for your application.
ModelEditor.propertyBrowser = SC.Page.design({

  // Add your views here.  Ex:
  
  mainView: SC.ScrollView.design({
    hasHorizontalScroller: NO,
    
    contentView: SC.ListView.design({
      rowHeight:30,
      exampleView: ModelEditor.PropertyListItemView,
      contentBinding: 'ModelEditor.modelPropertiesController.arrangedObjects',
      selectionBinding: 'ModelEditor.modelPropertiesController.selection',
      contentValueKey: "name",
      hasContentIcon: YES,
      contentIconKey: "displayIcon",
      canReorderContent: true,
      canEditContent: YES,
      isDropTarget: YES,
      action: "editProperty"
    })
  }),
  
  propertyActionButtons: SC.SegmentedView.design({
    itemTitleKey: "title",
    itemActionKey: "action",
    items: [
      {title:"+", action:"addProperty"},
      {title:"-", action:"removeProperty"}
    ]
  }),
  
  
  propertyPalette: SC.ScrollView.design({
    contentView: SC.SourceListView.design({
      contentBinding: "ModelEditor.propertyPaletteController.arrangedObjects",
      contentValueKey: "type",
      hasContentIcon: YES,
      contentIconKey: "icon",
      selectOnMouseDown: YES,
      isEnabledBinding: SC.Binding.from("ModelEditor.modelDefinitionsController.selection").notEmpty()
    })
  })

});
