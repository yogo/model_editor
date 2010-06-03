// ==========================================================================
// Project:   ModelEditor.modelBrowser
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This page describes a part of the interface for your application.
ModelEditor.modelBrowser = SC.Page.design({

  // Add your views here.  Ex:
  
  mainView: SC.SplitView.design({
    defaultThickness: 150,
    thumbViews: ['topLeftView.contentView.bottomBar.resizeThumb'],
    nextKeyView: 'mainView.topLeftView.contentView.modelListView',
    
    topLeftView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      
      contentView: SC.View.design({
        childViews: "modelListView bottomBar".w(),
        
        modelListView: SC.SourceListView.design({
          layout:{bottom:25},
          nextKeyView: 'mainView.bottomRightView.contentView',
          exampleView: ModelEditor.PatchedListItemView,
          rowHeight: 25,
          contentBinding: "ModelEditor.modelDefinitionsController.arrangedObjects",
          selectionBinding: "ModelEditor.modelDefinitionsController.selection",
          contentValueKey: "name",
          canEditContent: NO,
          hasContentIcon: YES,
          contentIconKey: "icon",
          contentUnreadCountKey: "propertyCount"
        }),
        
        bottomBar: SC.ToolbarView.design({
          layout: {height:25},
          anchorLocation: SC.ANCHOR_BOTTOM,
          childViews: "addButton removeButton resizeThumb".w(),
          
          addButton: SC.ButtonView.design({
            layout: {left:0, top:0, bottom:0, width:36},
            titleMinWidth:0,
            //controlSize: SC.SMALL_CONTROL_SIZE,
            //title: "+",
            icon: static_url('icons/icon-add-16.png'),
            action: "addModel",
            keyEquivalent: "CTRL+N"
          }),
          
          removeButton: SC.ButtonView.design({
            layout: {left:36, top:0, bottom:0, width:36},
            titleMinWidth:0,
            //controlSize: SC.SMALL_CONTROL_SIZE,
            //title: "-",
            icon: static_url('icons/icon-delete-16.png'),
            isEnabledBinding: SC.Binding.bool('ModelEditor.modelDefinitionController.content'),
            action: "removeModel",
            keyEquivalent: "Delete"
          }),
          
          resizeThumb: SC.ThumbView.design({
            layout: {right:0, width:25, centerY:0, height:25}
          })
        })
      })
    }),
    
    bottomRightView: SC.ContainerView.design({
      nowShowingBinding: 'ModelEditor.modelDetailView'
    })
  })

});
