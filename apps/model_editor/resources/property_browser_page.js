// ==========================================================================
// Project:   ModelEditor.propertyBrowser
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This page describes a part of the interface for your application.
ModelEditor.propertyBrowser = SC.Page.design({

  // Add your views here.  Ex:
  
  mainView: SC.View.design({
    childViews: "propertyList bottomBar".w(),
    
    propertyList: SC.ScrollView.design({
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
    
    bottomBar: SC.ToolbarView.design({
      anchorLocation:SC.ANCHOR_BOTTOM,
      layout: {height:25},
      childViews: "addPropertyButton".w(),
      
      addPropertyButton: SC.ButtonView.design({
        layout: {right:25, width:100, centerY:0, height:25},
        icon: static_url('icons/icon-add-16.png'),
        title: "Properties",
        isEnabledBinding: SC.Binding.bool("ModelEditor.modelDefinitionController.content"),
        action: "showPropertyPalette"
      })
    })
  })
  
});
