/*
 * File: app/controller/report/CabinetReportController.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.report.CabinetReportController', {
    extend: 'Ext.app.Controller',

    id: 'idCabinetReportController',

    refs: [
        {
            ref: 'cabinetFilterGrid',
            selector: '#idCabinetFilterPanel'
        }
    ],

    initCabinetReportGrid: function() {
        alert("initCabinetReportGrid");
    },

    runCabinetDetailReport: function() {
        //alert("initCAbinetReportGrid");

        window.open('report/cabinetDetailReport.html', '_blank', 'fullscreen=yes')

        /*
        var win = new Ext.Window({
        title:'Cabinet Detail Report',                
        plain       : true,
        html       : 'Cabinet Detail Report'
        });

        win.show();
        */
    },

    init: function(application) {

        console.log('Constroller init begins!!!');

        var me = this;

        me.listen(
        {
            controller: { 
                '*': {
                    initCabinetReportController: me.initCabinetReportController,
                    runCabinetReport: me.runCabinetReport
                }
            }, 
            component: {
                '#idRunReportButton': {
                    click: me.runCabinetDetailReport
                },
                '#idCabinetFilterPanel': {
                    afterrender: me.onCabinetReportGridAfterRender
                },
                '#idCabinetReportPanel': {
                    afterrender: me.onCabinetReportPanelAfterRender
                }
            }
        });
    },

    constructor: function(config) {
        var me = this;

        me.callParent(arguments);
        //me.init(config);

        console.log('Controller constructs ending!!!');
    },

    onCabinetReportPanelAfterRender: function() {



    },

    getDefaultGridData: function() {

        //It should be a server call function. 
        /*
        var gridData = {'items':[
        {'itemId':'15', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC129'},
        {'itemId':'1707', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC132'},
        {'itemId':'16', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC146'},
        {'itemId':'372', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC150'},
        {'itemId':'17', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD129'},
        {'itemId':'1708', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD132'},
        {'itemId':'18', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD146'},
        {'itemId':'373', 'location':'NAPNCR','itemClass':'Cabinet','status':'Planned','modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD150'}
        ]};
        */
        var gridData = [
        {'itemId':'15', 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC129', 'rowLabel':'1','grouping':'Storage'},
        {'itemId':'1707'  , 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC132', 'rowLabel':'1','grouping':'Storage'},
        {'itemId':'16'    , 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC146', 'rowLabel':'1','grouping':'Storage'},
        {'itemId':'372'   , 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BC150', 'rowLabel':'1','grouping':'Storage'},
        {'itemId':'17'    , 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD129', 'rowLabel':'1','grouping':'Storage'},
        {'itemId':'1708'  , 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD132', 'rowLabel':'1','grouping':'Storage'},
        {'itemId':'18'    , 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD146', 'rowLabel':'1','grouping':'Storage'},
        {'itemId':'373'   , 'location':'NAPNCR' , 'itemClass':'Cabinet' , 'status':'Planned' , 'modelName':'Rack (24W x 42D) 44U','cabinetName':'B1BD150', 'rowLabel':'1','grouping':'Storage'}
        ];

        return gridData;
    },

    getCabinetReportStore: function(gridData) {

        var store = Ext.create('Ext.data.Store', {
            fields: ['itemId','location','itemClass','status','modelName', 'cabinetName' ],
            data: gridData,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        });

        return store;
    },

    getLocationData: function() {

        var locationData = [
        [ 'Site A' ,'Site A'],
        [ 'Site B' ,'Site B'],
        [ 'Site C' ,'Site C']
        ];

        return locationData;
    },

    createCabinetReportItemListPanel: function() {

        //Test data
        var gridData = this.getDefaultData();

        var store = this.getCabinetReportStore(gridData);

        var filterRow = Ext.create('Ext.ux.grid.FilterRow');

        var gridPanel = Ext.create('Ext.grid.Panel', {
            store: store,
            stateful: true,
            stateId: 'stateGrid',
            plugins : [filterRow],
            columns: [
            {
                text     : 'Cabinet Name',
                width    : 0,
                flex     : 1,
                sortable : true,
                dataIndex: 'itemId',
                filterElement: new Ext.form.TextField()
            },    
            {
                text     : 'Location',
                width    : 85,
                sortable : true,                
                dataIndex: 'location',
                filterElement : new Ext.form.ComboBox({                              
                    displayField    : 'name',
                    valueField      : 'state',
                    triggerAction   : 'all',                
                    typeAhead               : false,                                
                    mode                    : 'local',
                    listWidth               : 160,
                    hideTrigger             : false,
                    emptyText               : 'Select',
                    //store                   :[[null, 'All'],['Site A','Site A'],['Site B','Site B']],
                    store                   : locationStore,
                    listConfig: {
                        getInnerTpl: function() {
                            //return '<div data-qtip="{name}. {slogan}">{name} ({name})</div>';
                            return '<div data-qtip="{locationName}. {locationCode}"><input type="checkbox">{locationName}</div>';
                        }
                    }
                }),
            },
            {
                text     : 'Class',
                width    : 85,
                sortable : true,                
                dataIndex: 'itemClass',
                renderer : function(value, meta, record) {
                    //return value ? 'Published' : 'Unpublished' ;
                    return value ;
                },
                filterElement : new Ext.form.ComboBox({                              
                    displayField    : 'name',
                    valueField      : 'state',
                    triggerAction   : 'all',                
                    typeAhead               : false,                                
                    mode                    : 'local',
                    listWidth               : 160,
                    hideTrigger             : false,
                    emptyText               : 'Select',
                    store                   :[[null, 'All'],['Device','Device'],['Cabinet','Cabinet'],['CRAC','CRAC']]
                })
            },

            {
                text     : 'Status',
                width    : 85,
                sortable : true,                
                dataIndex: 'status',
                renderer : function(value, meta, record) {
                    //return value ? 'Published' : 'Unpublished' ;
                    return value ;
                },
                filterElement : new Ext.form.ComboBox({                              
                    displayField    : 'name',
                    valueField      : 'state',
                    triggerAction   : 'all',                
                    typeAhead               : false,                                
                    mode                    : 'local',
                    listWidth               : 160,
                    hideTrigger             : false,
                    emptyText               : 'Select',
                    store                   :[[null, 'All'],['Planned','Planned'],['Installed','Installed'],['Archieved','Archieved']]
                })
            },

            {
                text     : 'Name',
                flex     : 1,
                sortable : true,
                dataIndex: 'modelName',
                filterElement: new Ext.form.TextField()
            },
            {
                text     : 'Cabinet Name',
                flex     : 1,
                sortable : true,
                dataIndex: 'cabinetName',
                filterElement: new Ext.form.TextField()
            }            


            ],
            height: 400,
            width: 600,
            title: 'Filter row Sample Grid demo',
            renderTo: 'grid-example',
            viewConfig: {
                stripeRows: true
            }
        });

        return gridPanel;
    },

    onCabinetReportGridAfterRender: function() {
        console.log("onCabinetReportGridAfterRender ======================================= begin");

        var me = this;

        //Get the cabinet filter grid
        var cabinetFilterPanel = me.getCabinetFilterGrid();


        var gridColumns = me.getCabinetReportGridColumns();


        //@TODO get data from server
        var gridData = me.getDefaultGridData();


        console.log("gridData=\n"+gridData.length);

        //var cabinetReportStore = me.getCabinetReportStore(gridData);



        //cabinetFilterPanel.store = cabinetReportStore;
        //cabinetFilterPanel.store.loadData(gridData,true);
        //cabinetFilterPanel.store.add(cabinetReportStore);

        cabinetFilterPanel.store.loadData(gridData);
        cabinetFilterPanel.reconfigure(cabinetFilterPanel.store, gridColumns);
        //cabinetFilterPanel.doLayout();



        //var locationData = this.getLocationData();

        /*
        var locationStore = Ext.create('Ext.data.ArrayStore', {
        fields: [
        {type: 'string', name: 'locationName'},
        {type: 'string', name: 'locationCode'}
        ],
        data: locationData
        });
        */






        //var grid = this.createCabinetReportItemListPanel();

        //var filterRow = Ext.create('Ext.ux.grid.FilterRow');
        //cabinetFilterPanel.plugins = [filterRow];

        ///console.log("===================================================================="+idCabinetFilterPanel);   


        console.log("onCabinetReportGridAfterRender ======================================= end");
    },

    getCabinetReportGridColumns: function() {

        var gridColumns = [
        {
            xtype: 'gridcolumn',
            maxWidth: 0,    
            dataIndex: 'itemId',
            text: ''

        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'location',
            text: 'Location',
            width:150
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'itemClass',
            maxWidth: 0,    
            text: 'Class'

        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'status',
            maxWidth: 0,    
            text: 'Status'

        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'modelName',
            maxWidth: 0,    
            text: 'Name'

        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'cabinetName',
            text: 'Cabinet Name',
            width: 150

        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'rowLabel',
            text: 'Row Label',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'grouping',
            text: 'Grouping',
            width: 150
        }


        ];

        return gridColumns;
    }

});
