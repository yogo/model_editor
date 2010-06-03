// ==========================================================================
// Project:   ModelEditor.modelBrowser
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ModelEditor */

// This page describes a part of the interface for your application.
ModelEditor.modelBrowser = SC.Page.design({

  // Add your views here.  Ex:
  mainView: SC.View.design({
    childViews: "topBar splitBrowser".w(),
    
    topBar: SC.ToolbarView.design({
      childViews: 'saveButton'.w(),
      layout: { top:0, left:0, right:0, height:40 },
      anchorLocation: SC.ANCHOR_TOP,
      
      saveButton: SC.ButtonView.design({
        layout: {left:10, width:140, centerY:0, height:25},
        icon: static_url('icons/icon-folder_go-16.png'),
        title:"Save Models",
        titleMinWidth:15,
        isEnabledBinding: "ModelEditor.store.hasChanges",
        action: 'changesShouldBeSaved'
      }),
      
    }),
    
    splitBrowser: SC.SplitView.design({
      layout:{top:40},
      defaultThickness: 150,
      dividerThickness: 1,
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
              keyEquivalent: "CTRL+n"
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
              layout: {right:0, width:25, centerY:0, height:25},
              classNames: 'thumb-view'.w()
            })
          })
        })
      }),
    
      bottomRightView: SC.ContainerView.design({
        classNames: 'model-detail-area'.w(),
        backgroundColor:'white',
        nowShowingBinding: 'ModelEditor.modelDetailView'
      })
    })
  }),
  
  browserWelcomeView: SC.View.design({
    childViews: "selectModelText selectModelArrow createModelText createModelArrow".w(),
    classNames: "browse-welcome-view".w(),
    
    selectModelText: SC.LabelView.design({
      layout: { width:200, height:50, left:180, top:20},
      escapeHTML: NO,
      value: "<h1>Select a Model to get started...</h1>"
    }),
    
    selectModelArrow: SC.View.design({
      classNames: "select-model-arrow",
      layout: {left:0, top:10, width:200, height:100}
    }),
    
    createModelText: SC.LabelView.design({
      layout: { width:200, height:50, left:200, bottom:150},
      escapeHTML: NO,
      value: "<h1>...or Create a New Model!</h1>"
    }),
    
    createModelArrow: SC.View.design({
      classNames: "create-model-arrow",
      layout: {left:0, bottom:0, width:200, height:175}
    }),
  })
});
